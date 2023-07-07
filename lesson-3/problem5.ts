/**
 * Updates the updatedAt field of a document
 */
function createdAt(document: any): any {
  return {
    ...document,
    createdAt: Date.now(),
  };
}

// Tests

/**
 * Do not modify the tests below.
 */

// The below tests MUST pass (no red squiggles)

const createdAtTest1: { createdAt: number } = createdAt({
  createdAt: 123,
});

const createdAtTest2: {
  updatedAt: number;
  isDeleted: boolean;
  name: string;
  createdAt: number;
} = createdAt({ updatedAt: 123, isDeleted: false, name: "test" });

const createdAtTest3: {
  values: {
    name: string;
    isDeleted: boolean;
  };
  createdAt: number;
} = createdAt({
  isbn: "jknbasdyug2bkasjduahd",
  values: { name: "sebastian", isDeleted: false },
});

// @ts-expect-error
const createdAtTestFail1 = createdAt("test");
