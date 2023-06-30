/**
 * extends
 */

function flip<T extends { isDeleted: boolean }>(a: T): T {
  const copy = { ...a };
  copy.isDeleted = !copy.isDeleted;
  return copy;
}

const flipTest1: { isDeleted: boolean; name: string } = flip({
  isDeleted: false,
  name: "test",
});

function flipWrong(a: { isDeleted: boolean }): { isDeleted: boolean } {
  const copy = { ...a };
  copy.isDeleted = !copy.isDeleted;
  return copy;
}

const flipWrongTest1: { isDeleted: boolean } = flipWrong({
  isDeleted: false,
  name: "test", // can not include name
});

/**
 * Type Guards
 */

function isString(a: any): a is string {
  return typeof a === "string";
}

const x: unknown = "test";

if (isString(x)) {
  const y: string = x;
}

/**
 *
 */

/**
 *  MyExclude
 */

type MyExclude<T, U> = T extends U ? never : T;

type MyExcludeTest1 = MyExclude<string | number | boolean, boolean>;
const myExcludeTest11: MyExcludeTest1 = "a";
const myExcludeTest12: MyExcludeTest1 = 123;
const myExcludeErrTest11: MyExcludeTest1 = true; // error
