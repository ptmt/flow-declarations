/* @flow */

/* test-repl.js */
//

declare module "test-repl.js" {
  type TestCase = {
    client: string | RegExp;
    send: string | any;
    expect: string | RegExp;
  }

  declare function send_expect(cases: Array<TestCase>): void;
}
