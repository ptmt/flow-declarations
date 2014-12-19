/* @flow */

declare module "nodejs" {
  declare class A {}
}

declare module "B" {
  // declare module "inner" {
  //   import a = require("nodejs");
  //   declare class B extends a.A implements NodeJS.Stream {}
    declare class C {
      func(): { D: string; E: number };
    }
//  }
}
var assert = require('assert');
var A = [1, 2];
var b = 1;

assert.equal(A.indexOf(b), 0);

// type AngularConfigFn = (...w?: any) => void;
//
// declare class AngularJSModule {
//   controller(name: string, dependencies: Array<string | AngularConfigFn>): AngularJSModule;
// }
//
// declare class AngularJS {
//   module(name: string, dependencies: Array<string>): AngularJSModule ;
// }
//
// declare var angular: AngularJS;
//
// angular.module('testModule', ['dep1', 'dep2', 'dep3'])
// .controller('CapacityProfileViewController', ['dep1', 'dep2', function(...requirements: Array<any>): any {
// }
// ]);

// var configFn: AngularConfigFn = function($scope: any, $window: any, $routeParams: any, $location: any, modal: any, ...args: Array<any>) {
//}
//
//
//
// declare var f: Array<((...args: Array<any>)=>void)>;
//
// var $scope, $window, $routeParams, $location;
//
// var fb = function(...args: Array) {
//   console.log(args);
// }
//
// f = [fb ];
