# Lesson 1

### Topics

- Basic Types
- Type aliases
- Function types
- Type interference

## Basic Types

Most types in Typescript are basic types.

```ts
// Supports boolean values
const isDone: boolean = false;

// Supports numbers
const decimal: number = 6;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;

// Supports strings
const txt: string = "strings";

// Supports arrays
const list: number[] = [1, 2, 3];
const list2: Array<number> = [1, 2, 3];

// Supports tuples
const tuple: [string, number] = ["hello", 10];

// Supports enums
enum Color {
  Red,
  Green,
  Blue,
}
const c: Color = Color.Green;

// Supports null
const null: null = null

// Supports undefined
const undef: undefined = undefined

// When you do not know a type you can use `any`
let what_ever_you_want: any = "a string"
what_ever_you_want = true
what_ever_you_want = 123
what_ever_you_want = undefined
...
```

#### Exercises

Replace all the `any` types with more specific types.

```ts
const a: any = 3;
const b: any = true;
const c: any = "what is this?";
const d: any = [true, "", 123];
```

## Type aliases

Here we create a type alias for `string`. "Boolean" is not a boolean, but is a string.
Of course, this is a contrived example but we will see later how the type keyword can be
extremely useful.

```ts
type Boolean = string;

const flag1: Boolean = "true";
const flag2: Boolean = "any random string";
```

## Objects

We also would like to descript javascript objects, such as when receiving an API response

```ts
type APIResponse = {
  id: string;
  score: number;
  username: string;
  favoriteAnimal: string;
};

const response: APIResponse = {
  id: "aksjdhiygb",
  score: 123,
  username: "honungsburk",
  favoriteAnimal: "bear",
};
```

But maybe it is a bit much to ask all users to supply a `favoriteAnimal`. We can make it optional by adding a `?`.

```ts
type APIResponse = {
  id: string,
  score: number,
  username: string,
  favoriteAnimal?: string
}

const response1: APIResponse = {
  id: "aksjdhiygb",
  score: 123,
  username: "honungsburk"
}

const response2: APIResponse = {
  id: "asakiasdygb",
  score: 321,
  username: "tripod"
  favoriteAnimal: "bear"
}
```

Alternatively, instead of using `?` we can write `string | undefined`. It means the same thing as the previous example.

```ts
type APIResponse = {
  id: string;
  score: number;
  username: string;
  favoriteAnimal: string | undefined;
};

const response: APIResponse = {
  id: "aksjdhiygb",
  score: 123,
  username: "honungsburk",
};
```

Sometimes you have to integrate with badly written API:s. What if `score` sometimes is a number and sometimes a string? How would we describe that on the type level? Use the `|` operator!

```ts
type APIResponse = {
  id: string;
  score: number | string;
  username: string;
  favoriteAnimal: string | undefined;
};

const response: APIResponse = {
  id: "aksjdhiygb",
  score: "123",
  username: "honungsburk",
};
```

#### Exercises

##### Exercise 1

Replace `any` with the correct type

```ts
type Book = any;

const example: Book = {
  isbn: "1785301543",
  title: "Harry Potter and the Philosopher’s Stone",
  author: "J.K. Rowling",
  rating: 4.47,
  summary:
    "Harry Potter thinks he is an ordinary boy - until he is rescued by an owl, taken to Hogwarts School of Witchcraft and Wizardry, learns to play Quidditch and does battle in a deadly duel. The Reason ... HARRY POTTER IS A WIZARD!",
};
```

##### Exercise 2

Replace `any` with the correct type that works for all examples

```ts
type Game = any;

const example1: Game = {
  title: "Call of Duty: Modern Warfare"
  rating: 7.7,
  genres: ["action", "fps", "multi-player", "singel-player"]
}

const example1: Game = {
  title: "Elden Ring"
  rating: 9.2,
  genres: ["action", "third-person", "role-playing", "singel-player", "exploration", "souls-like"]
  videoReview: "https://www.youtube.com/watch?v=D1H4o4FW-wA&ab_channel=videogamedunkey"
}
```

## Function Types

Now you know how to describe simple values. Of course, you also have functions that operate on those types so let's see how we can describe them on the type level.

```ts

/**
 * A function that takes a boolean and returns a new boolean
 */
function not(x: boolean): boolean {
    return !x
}

const false: boolean = not(true)
const true: boolean = not(false)


/**
 * A function that adds two numbers
 */
function add(x: number, y: number): number {
  return x + y
}

/**
 * A function that trims the string with key `a`.
 *
 * Since the function isn't returning anything we set the return type to `void`
 */
function trimA(obj: { a: string }): void {
  obj.a = obj.a.trim()
}

/**
 * A function with an optional configuration
 */
function unnecessaryComputation(iterations?: number): number {
  let i = 0
  let sum;

  while(i < iterations ?? 100) {
    sum += sum
    i += 1
  }
  return sum
}

```

#### Exercises

Replace all the `any` types with more specific types.

##### Exercise 1

```ts
function multiply(a: any, b: any): any {
  return a * b;
}
```

##### Exercise 2

```ts
function sum(...xs: any): any {
  let total = 0;

  for (let x in xs) {
    total += x;
  }
  return total;
}
```

##### Exercise 3

```ts
function alwaysThree(value: any): any {
  return 3;
}
```

## Type interference

Why it is often good practice to write out the full type you expect sometimes it would be convenient to not have to write the type signature.

```ts

// flag is infererd by typescript to be a `boolean`
const flag = true

// Same goes for strings
const msg = "Type interference is really convenient"

// It even works for objects
// type: { flag: boolean, msg: string}
const obj = {
    flag: false
    msg: "will be infered as a string"
}

// You can also do it for the return value of functions
// The return type will be infered to be `number`
function add(a: number, b: number) {
    return a + b
}
```
