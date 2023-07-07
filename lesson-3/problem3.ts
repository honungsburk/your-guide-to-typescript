/**
 * Replace the `any` types with the correct types.
 */
function zip(l: any, r: any): any {
  if (l.length < r.length) {
    return l.map((x, i) => [x, r[i]]);
  } else {
    return r.map((x, i) => [l[i], x]);
  }
}

// Tests

/**
 * Do not modify the tests below.
 */

// The below tests MUST pass (no red squiggles)

const zipTest1: [number, string][] = zip([1, 2, 3], ["1", "2", "3"]);
const zipTest2: [number | boolean, string][] = zip(
  [true, 2, false],
  ["1", "2", "3"]
);
const zipTest3: [string, { a: string }][] = zip(["1", "2", "3"], [{ a: "a" }]);
const zipTest4: [never, never][] = zip([], []);

// @ts-expect-error
const zipTestFail1 = zip([1, 2, 3], "");
// @ts-expect-error
const zipTestFail2 = zip("", 123);
