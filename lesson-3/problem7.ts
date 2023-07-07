/**
 * Replace the `any` types with the correct types.
 */
function removeAllNulls(obj: any): any {
  // Do not modify this function body. The "any" in "const newObj: any = ..."
  // is needed and an example of the sometimes necessary usage of "any".
  const newObj: any = {};

  for (const key in obj) {
    if (obj[key] !== null) {
      newObj[key] = obj[key];
    } else {
      newObj[key] = undefined;
    }
  }
  return newObj;
}

// Tests

/**
 * Do not modify the tests below.
 */

// The below tests MUST pass (no red squiggles)

const t1: { s: string | null } = { s: null };
const removeAllNullsTest1: { s: string | undefined } = removeAllNulls(t1);

const t2: { s: string | null; x: number | null } = { s: null, x: 123 };
const removeAllNullsTest2: { s: string | undefined; x: number | undefined } =
  removeAllNulls(t2);

const t3: { s: string | null; name: string } = { s: null, name: "fricky" };
const removeAllNullsTest3: { s: string | undefined; name: string } =
  removeAllNulls(t3);

const removeAllNullsTest4: {} = removeAllNulls({});

// @ts-expect-error
const removeAllNullsErrorTest1 = removeAllNulls("");
// @ts-expect-error
const removeAllNullsErrorTest2 = removeAllNulls(true);
