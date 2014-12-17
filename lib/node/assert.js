declare function assert(value:any, message?:string):void;


declare module assert {

  declare class AssertionError extends Error {
    name:string;
    message:string;
    actual:any;
    expected:any;
    operator:string;
    generatedMessage:boolean;

    constructor(options?:{
      message?: string;
      actual?: any;
      expected?: any;
      operator?: string;
      stackStartFunction?: Function
    }): void;
  }

  declare function fail(actual?:any, expected?:any, message?:string, operator?:string):void;

  declare function ok(value:any, message?:string):void;

  declare function equal(actual:any, expected:any, message?:string):void;

  declare function notEqual(actual:any, expected:any, message?:string):void;

  declare function deepEqual(actual:any, expected:any, message?:string):void;

  declare function notDeepEqual(acutal:any, expected:any, message?:string):void;

  declare function strictEqual(actual:any, expected:any, message?:string):void;

  declare function notStrictEqual(actual:any, expected:any, message?:string):void;

  declare var throws:{
    (block:Function, message?:string): void;
    (block:Function, error:Function, message?:string): void;
    (block:Function, error:RegExp, message?:string): void;
    (block:Function, error:(err:any) => boolean, message?:string): void;
  };

  declare var doesNotThrow:{
    (block:Function, message?:string): void;
    (block:Function, error:Function, message?:string): void;
    (block:Function, error:RegExp, message?:string): void;
    (block:Function, error:(err:any) => boolean, message?:string): void;
  };

  declare function ifError(value:any):void;
}
