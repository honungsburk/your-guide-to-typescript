# More on Generics

### Type Guards

Type guards are a way of going from a more general type to a more specific one. Lets have look at an example

```ts
// You have a variable x that is either a string or number
const x: string | number = "test";

/**
 * If `isString` returns true the type checker knows that `a` is string
 */
function isString(a: any): a is string {
  return typeof a === "string";
}

if (isString(x)) {
  x.trim(); // valid, since x must be string inside the brackets
} else {
  // Must be a number inside the else statement
  const c: number = x + 13;
}
```

### Constraining Generics

You can constrain generics so that they must fulfill certain conditions by using the `extends` keyword.

Imagine that you want to write a function that flips the `isDeleted` flag in an object. How can we write
a type signature that works on any type of object?

```ts
/**
 * Lets start by just defining the shape of what we expect.
 */
function flip(a: { isDeleted: boolean }): { isDeleted: boolean } {
  const copy = { ...a };
  copy.isDeleted = !copy.isDeleted;
  return copy;
}

// Works!
const t1: { isDeleted: boolean } = flip({
  isDeleted: false,
});

// Does not work!
const t2: { isDeleted: boolean } = flip({
  isDeleted: false,
  name: "test", // can not include name
});
```

Unfortuntly we can not include any keys beyond `isDeleted` to fix this we will use generics.

```ts
/**
 * Here we say that we don't know what the type T is except that it must be an object with a key `isDeleted` that is a boolean
 * And we will return the same type.
 */
function flip<T extends { isDeleted: boolean }>(a: T): T {
  const copy = { ...a };
  copy.isDeleted = !copy.isDeleted;
  return copy;
}

// Works!
const t1: { isDeleted: boolean } = flip({
  isDeleted: false,
});

// Works!
const t2: { isDeleted: boolean; name: string } = flip({
  isDeleted: false,
  name: "test", // can not include name
});
```

### Type Level functions

Just as you can write functions that operate on values you can use generics to write functions
on the type level. These functions take types and return new types.

We want to write a function that lets us remove a type from a union of multiple types.

```ts
// We start with a type union of string, number and boolean
type T1 = string | number | boolean;

// we then want to remove "boolean" from the union
type T2 = Exclude<T1, boolean>;
const test1: T2 = "";
const test2: T2 = 12;
const test3: T2 = false; // Does not work!

// The best way of thinking about  Exclude is as a function on the type level. It takes types, and return new types.
type Exclude<T, U> = T extends U ? never : T;

/**
 * Example evaluation:
 * type T2 = Exclude<T1, boolean>
 * type T2 = Exclude<string | number | boolean, boolean>
 * type T2 = Exclude<string, boolean> | Exclude<number, boolean> | Exclude<boolean, boolean>
 * type T2 = string | number | never
 * type T2 = string | number
 */
```
