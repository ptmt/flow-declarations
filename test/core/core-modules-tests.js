/* @flow */

declare module "nodejs" {
  declare class A {}
}

declare module "B" {
  declare module "inner" {
    import a = require("nodejs");
    declare class B extends a.A implements NodeJS.Stream {}
  }
}
// var assert = require('assert');
// var A = [1, 2];
// var b = 1;
//
// assert.equal(A.indexOf(b), 0);
