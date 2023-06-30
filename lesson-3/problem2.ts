/**
 * Replace the `any` types with the correct types.
 */
function map(fn: any, xs: any): any {
  return xs.map(fn);
}

// Tests

/**
 * Do not modify the tests below.
 */

// The below tests MUST pass (no red squiggles)

const mapTest1: number[] = map((x: number) => x + 2, [1, 2, 3]);
const mapTest2: string[] = map((x: string) => x + 2, ["1", "2", "3"]);
const mapTest3: never[] = map(
  (x: string) => {
    throw new Error("unknown");
  },
  ["1", "2", "3"]
);
const mapTest4: (string | number)[] = map(
  (x: boolean) => (x ? "yes" : 11),
  [true, false, true]
);

// The below tests MUST fail (red squiggles)

const mapTestFail1 = map("", [1, 2, 43]);
const mapTestFail2 = map((n) => n + 1, 123);
