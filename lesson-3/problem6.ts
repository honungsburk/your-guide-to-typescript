/**
 * Replace the `any` types with the correct types.
 *
 * Hint: you need to use an interface and overload the type signature of `filter` to make this work.
 */
interface Filter {
  (predicate: any, xs: any): any;
  (predicate: any, xs: any): any;
}

const filter: Filter = (predicate: any, xs: any) => {
  return xs.filter(predicate);
};

// Tests

/**
 * Do not modify the tests below.
 */

// The below tests MUST pass (no red squiggles)

const filterTest1: number[] = filter((n: number) => n % 2 === 0, [1, 2, 3]);

function noUndefined<A>(x: A | undefined): x is A {
  return x !== undefined;
}

const filterTest2: number[] = filter(noUndefined, [1, undefined, 3]);

const filterTest3: (number | undefined)[] = filter(
  (x) => x !== undefined,
  [1, undefined, 3]
);

function isString(x: any): x is string {
  return typeof x === "string";
}
const filterTest4: string[] = filter(isString, ["1", undefined, 3]);

// @ts-expect-error
const filterErrorTest1: number[] = filter((n: number) => "", [1, 2, 3]);
// @ts-expect-error
const filterErrorTest2: number[] = filter(123, "");
