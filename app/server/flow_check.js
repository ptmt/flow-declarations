var spawn = require('child_process').spawn;
var exec = require('child_process').exec;

module.exports = function(sourceCode, cb) {
  child = spawn('flow', ['check-contents', ['--json']]);
  var output = '';
  child.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
    output += data;
  });

  child.stderr.on('data', function (data) {
    output += data;
  });

  child.on('close', function (code) {
    try {
      console.log(JSON.parse(output));
      cb(JSON.parse(output));
    } catch(e) {
      console.log(e);
      cb({fatalError: true});
    }

  });
  console.log(sourceCode);
  child.stdin.setEncoding = 'utf-8';
  child.stdin.write(sourceCode + '\n');
  child.stdin.end();
}

function insert(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}

module.exports.wrap = function(sourceCode, errorsJson) {
  if (errorsJson.passed || errorsJson.fatalError) {
    return sourceCode;
  }
  var sourceLines = sourceCode.split('\n');
  console.log(sourceLines);
  errorsJson.errors.forEach(function(error) {
    error.message.forEach(function(message) {
      console.log(message);
      console.log(sourceLines[message.line - 1][message.start - 1]);
      sourceLines[message.line - 1] = insert(sourceLines[message.line - 1]
        , message.end
        , '</span>')
      sourceLines[message.line - 1] = insert(sourceLines[message.line - 1]
          , message.start - 1
          , '<span class="error" title="' + message.descr + '">')
    });
  });
  return sourceLines.join("\n");
}

module.exports.version = function(sourceCode) {
  child = exec('flow --version',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}
