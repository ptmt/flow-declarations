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
    console.log(output);
    cb(output);
  });
  // function (error, stdout, stderr) {
  //   console.log('stdout: ' + stdout);
  //   console.log('stderr: ' + stderr);
  //   if (error !== null) {
  //     console.log('exec error: ' + error);
  //   }
  //   cb(stdout);
  // });
  console.log(sourceCode);
  child.stdin.setEncoding = 'utf-8';
  child.stdin.write(sourceCode + '\n');
  child.stdin.end();
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
