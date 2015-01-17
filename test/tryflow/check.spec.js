var assert = require('assert');
var check = require('../../app/server/flow_check');

var sourceCode = "function length (a) {\n  return a.length;\n}\na(1);";
var oneErrorJson = {"passed":false,"errors":
  [{"message":[{"descr":"identifier a\nUnknown global name","code":0,"path":"-","line":4,"endline":4,"start":1,"end":1}]}]
  ,"version":" Nov 26 2014 16:57:27"}


describe('Wrapper', function(){
    it('should return source code as is if no errors occured', function(){
      var wrappedCode = check.wrap(sourceCode, { passed: true});
      assert.equal(wrappedCode, sourceCode);
    })
    it('should wrap source code with 1 error', function(){
      var wrappedCode = check.wrap(sourceCode, oneErrorJson);
      assert.equal(wrappedCode, 'function length (a) {\n  return a.length;\n}\n<span class=\"error\" title=\"identifier a\nUnknown global name\">a</span>(1);');
    })
})
