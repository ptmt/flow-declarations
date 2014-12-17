/* @flow */
declare module "nodejs" {
  declare class A {

  }
}

declare module "B" {
  declare class B extends nodejs$A {}
}
// var assert = require('assert');
// var A = [1, 2];
// var b = 1;
//
// assert.equal(A.indexOf(b), 0);
