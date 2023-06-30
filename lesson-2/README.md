# Lesson 1

### Topics

- type operators `&` and `|`
- classes vs interfaces vs types
- extends vs implements

## Type Operators

TypeScript has a few operators that can be used to create new types from existing types. The first two we'll look at are the union operator `|` and the intersection operator `&`.

### Union

We have already seen this type before but lets see what happens if we use them on objects.

```ts
type A = { a: string; d: string };

type B = { b: string; d: number };

type C = A | B;

const c1: C = { a: "a", d: "23" }; // ok
const c2: C = { a: "a", d: 23 }; // error
const c3: C = { b: "b", d: 23 }; // ok
const c4: C = { a: "a", b: "b", d: 123 }; // ok

function handleC(c: C) {
  c.a; // err
  c.b; // err
  c.d; // ok!
}
```

For now we can think of the union operator as a way to create a new type that is a combination of two other types. In the example above, the type `C` is a combination of the types `A` and `B`. The type `C` can be either an `A` or a `B`. This is useful when we want to create a function that can take multiple types. We will return to this idea later when we talk about tagged unions.

### Intersection

The intersection operator `&` is used to create a new type that is a combination of two other types. For example, if we have two types `A` and `B`, we can create a new type `C` that is the combination of `A` and `B` by using the intersection operator `&`.

```ts
type A = { a: string };
type B = { b: number };
type C = { c: boolean };

type D = A & B & C;

const d: D = { a: "hello", b: 42, c: true };
```

Why Would you want to combine types? Well, let's say you have an API that returns a couple of different kinds of objects

```ts
type User = {
  id: string;
  updatedAt: Date;
  createAt: Date;
  name: string;
  email: string;
  age: number;
};

type Books = {
  id: string;
  updatedAt: Date;
  createAt: Date;
  isbn: string;
  title: string;
  description: string;
};

type ReadingList = {
  id: string;
  updatedAt: Date;
  createAt: Date;
  name: string;
  description: string;
  books: Books[];
};
```

There is a lot of duplication here. All three types have an `id`, `updatedAt`, and `createdAt` property. We can use the intersection operator to create a new type that combines these three types.

```ts
type Common = {
  id: string;
  updatedAt: Date;
  createAt: Date;
};

type User = Common & {
  name: string;
  email: string;
  age: number;
};

type Books = Common & {
  isbn: string;
  title: string;
  description: string;
};

type ReadingList = Common & {
  name: string;
  description: string;
  books: Books[];
};
```

## Classes vs Interfaces vs Types

We can also create types by using the `class` and `interface` keywords. These keywords are used to create types that describe objects. The `type` keyword is more general and can be used to describe objects as well.

```ts
class Book {
  isbn: string;
  title: string;
  description: string;

  constructor(isbn: string, title: string, description: string) {
    this.isbn = isbn;
    this.title = title;
    this.description = description;
  }
}

const myBook: Book = new Book("123", "My Book", "A book about me");
```

We can also create types using the `interface` keyword.

```ts
interface A {
  a: string;
}
interface B {
  b: number;
}
interface C {
  c: boolean;
}

interface D extends A, B, C {}
// is the same as
type D2 = A & B & C;

const d: D = { a: "hello", b: 42, c: true };
```

### Type vs Interface

```ts
interface Common {
  id: string;
  updatedAt: Date;
  createAt: Date;
}

interface User extends Common {
  name: string;
  email: string;
  age: number;
}

interface Books extends Common {
  isbn: string;
  title: string;
  description: string;
}

interface ReadingList extends Common {
  name: string;
  description: string;
  books: Books[];
}
```

## Extends vs Implements

```ts
class A {
  a: string;
  constructor(a: string) {
    this.a = a;
  }
}

class B {
  b: number;

  constructor(b: number) {
    this.b = b;
  }
}

// Classes can only extend a single class
class C extends A {
  constructor(public a: string) {
    super(a);
  }

  c: boolean;
}

// Classes can implement multiple interfaces
class D implements A, B {
  constructor(public a: string, public b: number) {
    super(a); // Can only call super on a class that extends another class
  }
}
```

## extends vs &

**interface extends interface**

```ts
interface PartialPointX {
  x: number;
}
interface Point extends PartialPointX {
  y: number;
}
```

**Type alias extends type alias**

```ts
type PartialPointX = { x: number };
type Point = PartialPointX & { y: number };
```

**Interface extends type alias**

```ts
type PartialPointX = { x: number };
interface Point extends PartialPointX {
  y: number;
}
```

**Type alias extends interface**

```ts
interface PartialPointX {
  x: number;
}
type Point = PartialPointX & { y: number };
```
