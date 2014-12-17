#!/usr/bin/env node
require('cli').withStdinLines(function(lines, newline) {
  var converters = [convertClassToInterface
    , convertInherKeyword
    , convertExportKeyword
    , convertContructorSignature
    , convertGenerics
    , convertOptionalMethods];
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
