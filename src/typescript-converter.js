#!/usr/bin/env node
require('cli').withStdinLines(function(lines, newline) {
  var converters = [convertClassToInterface
    , convertInherKeyword
    , convertExportKeyword
    , convertKeywordsWithoutDeclare
    , convertExtendsImplements
    , convertContructorSignature
    , convertGenerics
    , convertOptionalMethods
    , extractInternamModules
    , extractClassesInModules];
  converters.forEach(function(f) {
    lines = f(lines);
  });
  this.output(lines.join(newline));
});

function replace(str, pattern, to) {
  return str.replace()
}

/*
 * Replaces 'interface' with 'class'
 * like this:
 * interface SomeInterface {}
 * =>
 * class SomeInterface {}
 */
function convertClassToInterface(lines) {
  lines = lines.map(function(line) {
    return line.replace('interface ', 'class ');
  })
  return lines;
}

/*
* Replaces 'implements' with 'extends'
* like this:
* class SomeClass implements SomeInterface {}
* =>
* class SomeClass extends SomeInterface {}
*/
function convertInherKeyword(lines) {
  lines = lines.map(function(line) {
    return line.replace(' implements ', ' extends ');
  })
  return lines;
}

/*
* Replaces 'implements' with 'extends'
* like this:
* class SomeClass {
*   export var A: string;
* }
* =>
* class SomeClass {
*   declare var A: string;
* }
*/
function convertExportKeyword(lines) {
  lines = lines.map(function(line) {
    return line.replace('export ', 'declare ');
  })
  return lines;
}

/*
* Replaces 'class' with 'declare class'
* like this:
* class SomeClass {
*   declare var A: string;
* }
* =>
* declare class SomeClass {
*   declare var A: string;
* }
*/
function convertKeywordsWithoutDeclare(lines) {
  lines = lines.map(function(line) {
    if (line.trim().indexOf('class') === 0) {
      line = 'declare ' + line;
    }
    if (line.trim().indexOf('var ') === 0) {
      line = 'declare ' + line;
    }
    if (line.trim().indexOf('function ') === 0) {
      line = 'declare ' + line;
    }
    if (line.trim().indexOf('module ') === 0) {
      line = 'declare ' + line;
    }
    return line;
  })
  return lines;
}

/*
* Replace typescripts `extended implemented` with double `extends`
* like this:
* class SomeClass extends SomeOtherClass implements IClass {
*   declare var A: string;
* }
* =>
* class SomeClass extends SomeOtherClass, IClass {
*   declare var A: string;
* }
*/
function convertExtendsImplements(lines) {
  lines = lines.map(function(line) {
    //console.log(line.match(/extends /g));
    var match = line.match(/extends /g);
    if (match && match.length > 1) {
      line = line.replace('extends', '__e').split('extends ').join(', ').replace('__e', 'extends');
    }
    return line;
  })
  return lines;
}

/*
* Adds void type to constructor
* like this:
* class SomeClass {
*   constructor();
* }
* =>
* class SomeClass {
*   constructor(): void;
* }
*/
function convertContructorSignature(lines) {
  var flag = false; // very bad workaround until grammar parser will be ready
  lines = lines.map(function(line) {
    if (line.indexOf('constructor(') > -1 || flag) {
      if (line[line.length - 2] === ')') {
        line = line.slice(0,-1);
        line += ': void;';
        flag = false;
      } else {
        flag = true;
      }
    }
    return line;
  })
  return lines;
}


/*
* Simplify generics
* like this:
* class SomeClass<T extends A> {
*   constructor<T extends A>();
* }
* =>
* class SomeClass<T> {
*   constructor<T>(): void;
* }
*/
function convertGenerics(lines) {
  lines = lines.map(function(line) {
    return line.replace(/<T extends (.*)>/, '<T>');
  })
  return lines;
}

/*
* Removes optional for method
* like this:
* class SomeClass {
*   someMethod?(): void;
* }
* =>
* class SomeClass {
*   someMethod(): void;
* }
*/
function convertOptionalMethods(lines) {
  lines = lines.map(function(line) {
    return line.replace(/\?\(/, '(');
  })
  return lines;
}

/*
* Extract internal modules
* like this:
* module A {
*   module B {
*     class C {}
*   }
* }
* =>
* module A {
*
*   class C {}
*
* }
*/
function extractInternamModules(lines) {
  var is_in_modules = false;
  var br = 0;
  var cut = -1;
  lines = lines.map(function(line) {

    if (line.indexOf('module ') > -1) {
      if (is_in_modules) { // we already in module, so cut it off
        line = '';
        cut = br;
        br++;
      } else {
        is_in_modules = true;
      }
    }
    if (line.indexOf('{') > -1) {
      br++;
    }
    if (line.indexOf('}') > -1) {
      br--;
      if (br === cut) {
        line = '';
        cut = -1;
      }

      if (br === 0) {
        is_in_modules = false;
      }
    }
    if (line.indexOf('declare =') > -1) {
      line = '';
    }
    return line;
  })
  return lines;
}

/*
** Extracts classes needed to be used at another modules
*/
function extractClassesInModules(lines) {
  var is_in_modules = false;
  var br = 0;
  var moduleNames = [['NodeJS', 'NodeJS']], classNames = {};
  function checkIfInModule(line) {
    if (line.indexOf('module ') > -1) {
      is_in_modules = true;
    }
    if (line.indexOf('{') > -1) {
      br++;
    }
    if (line.indexOf('}') > -1) {
      br--;
      if (br === 0) {
        is_in_modules = false;
      }
    }
  }
  // 1. remove import lines
  lines = lines.map(function(line) {
    checkIfInModule(line);
    if (is_in_modules && line.indexOf('import ') > -1) {
      var rx = /import (.*) =/g;
      var arr = rx.exec(line);
      var rx1 = /\(.(\w*).\)/g;
      var arr1 = rx1.exec(line);
      moduleNames.push([arr[1], arr1[1]])
      return '';
    } else {
      return line;
    }
  });

  // 2. search&replace needed modules like
  //    module_name.className -> module_name$className

  lines = lines.map(function(line) {
    checkIfInModule(line);
    if (is_in_modules) {
      moduleNames.forEach(function(m) {
        if (line.indexOf(m[0] + '.') > -1) {
          var rx = new RegExp(m[0] + "\\.(\\w*)","g");
          //console.log(rx, rx.exec(line));
          classNames[rx.exec(line)[1]] = m;
          line = line.replace(m[0] + '.', m[0] + '$') // replace ALL
        }

      });
    }
    return line;
  });

  // 3. copypaste class by searching it
  for (var className in classNames) {
    var moduleLines = searchByPattern(lines, 'declare module .*' + classNames[className][1]);
    //console.log('moduleLines', className, ' -- ', classNames[className][1]);
    var classLines = searchByPattern(lines, 'declare class ' + className);
    if (classLines.length > 0) {
      classLines[0] = classLines[0].replace(className, classNames[className][0] + '$' + className);
      classLines.forEach(function (c) {
        lines.push(c);
      });
    }
  };



  return lines;
}

function searchByPattern(lines, pattern) {
  var br = 0;
  var insidePattern = false;
  var returnLines = [];
  var rx = new RegExp(pattern, "g");
  lines.forEach(function (line) {
    if (rx.exec(line)) {
      insidePattern = true;
      br = 0;
    }
    if (insidePattern) {
      returnLines.push(line);
    }
    if (line.indexOf('{') > -1) {
      br++;
    }
    if (line.indexOf('}') > -1) {
      br--;
    }
    if (br === 0) {
      insidePattern = false;
    }
  })
  return returnLines;
}
