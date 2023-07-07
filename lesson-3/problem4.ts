/**
 * Updates the updatedAt field of a document
 */
function updatedAt(document: any): any {
  return {
    ...document,
    updatedAt: Date.now(),
  };
}

// Tests

/**
 * Do not modify the tests below.
 */

// The below tests MUST pass (no red squiggles)

const updatedAtTest1: { updatedAt: number } = updatedAt({
  updatedAt: 123,
});
const updatedAtTest2: {
  updatedAt: number;
  isDeleted: boolean;
  name: string;
} = updatedAt({ updatedAt: 123, isDeleted: false, name: "test" });

// @ts-expect-error
const updatedAtTestFail1 = updatedAt("test");
