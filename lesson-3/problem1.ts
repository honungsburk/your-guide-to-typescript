/**
 * Replace the `any` types with the correct types.
 */
function id(x: any): any {
  return x;
}

// Tests

/**
 * Do not modify the tests below.
 */

// The below tests MUST pass (no red squiggles)

const idTest1: string = id("");
const idTest2: number = id(123);
const idTest3: boolean = id(false);
const idTest4: number[] = id([1, 2, 3]);
const idTest5: Date[] = id([new Date()]);
