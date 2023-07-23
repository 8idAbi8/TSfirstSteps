let age: number = 34;
// age = 'a';  // Type 'string' is not assignable to type 'number'.

/** type inference */
let sales: number = 123_456_789; // in TS we can separete a large nr with an uderscore, to make the nr more readable
let course: string = "TypeScript";
let is_published = true; // TS compiler can infer the type of the variables from the initialization

/** "any" type */
let level; /* tsc assumes the type of non initialize variables as "any".
We can initialize this variable several times with diffrent types of value, but this is angains of the idea of using TS for type safety & type checking. So as a best practice, we should avoid using "any".
*/

function render(document: any) {
  /* expliciting the type any, we're telling to tsc, that we know what we're doing. */
  console.log(document);

  /* alternatively we can turn the "noImplicitAny" tsc configuration to false, but this is not recommended. */
}

/* Arrays */
let numbers: number[] = [
  1, 2, 3,
]; /** explicitly applaying the type annotation "number[]", the array can have only elements of type number. otherwise can have elements of diffrent type. */

numbers = numbers.map((element) => (element *= 2)); // callback function
console.log("numbers: " + numbers);

numbers.forEach((element, index) => {
  // callback function
  numbers[index] = element * 2;
});
console.log("numbers: " + numbers);

/** Tuples (fixed length array where each element has a particular type, often used when working with a pair of values). */

// id, name
let user: [number, string] = [1, "Idi"];

console.log("tuples: " + user);
console.log("tuples length: " + user.length);

/** Enums (list of related constants) */
// const small = 1;
// const medium = 2;
// const large = 3;

enum Size {
  Small = 1,
  Medium,
  Large,
}
console.log("enum Size: ");
for (const key in Size) {
  if (isNaN(Number(key))) {
    console.log(key + ":", Size[key]);
  }
}

/**Functions */
function calculateTax(income: number, taxYear = 2023): number {
  /** best practice: annotate the return type of functions */

  if (taxYear < 2023) return income * 0.15;

  if (income < 30_000) return income * 0.2;

  return income * 0.3;
}
console.log("Tax = " + calculateTax(10000));
// console.log("Tax = " + calculateTax(100000));
// console.log("Tax = " + calculateTax(100000, 2022));

/**Objects */
let employee1: {
  // object with some properties
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Idi",
  retire: (date: Date) => {
    console.log(date);
  },
};

// employee.id = 2; /**Cannot assign to 'id' because it is a read-only property. */
console.log(employee1);

/**Type Aliases */
// Defines the structure of an Employee object
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee2: Employee = {
  id: 2,
  name: "Abi",
  retire: (date: Date) => {
    console.log(date);
  },
};
console.log(employee2);

/**Union types */
/**With union type we can give a variable or function parameter more than one type */
function kgToLbs(weight: number | string): number {
  /**here we can invoke on "weight" both methods of numbers and strings. To control this we use the "Narrowing": */
  if (typeof weight == "number") return weight * 2.2;
  // use of string methods
  else return parseInt(weight) * 2.2;
}

/**Intersection Types */
/**Another technique for combining types */
// let's define a costume type that rappresents an object that can be dragged on the screen
type Draggable = {
  drag: () => void; // method that takes no arguments and returns void
};

type Resizable = {
  resize: () => void;
};

/** we can combine this 2 separate types in a new type, using an intersection type: */
type UIWidget = Draggable & Resizable;
/**UIWidget is an intersection type, so is a Draggable type & a Resizable type. */

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

/**Literal Types */
/**Limit the values we can assign to a variable */

// Literal: (exact, specific value)
let quantity1: 55; // this is a literal type
// quantity2 = 41;  // Type '41' is not assignable to type '55'.

// define a literal type
type Quantity = 50 | 100;
type Metric = "cm" | "inch";

let unitsOfLength: Metric = "cm";
let quantity2: Quantity = 100;

console.log(quantity2 + " " + unitsOfLength);

/**Nullable Types */
/**TS is very strict of using null or undefined values, because are common source of bugs.*/
function greet(name: string | undefined) {
  if (name)
    // if has a correct value
    console.log("Hello " + name.toUpperCase());
  // if name is null or undefined
  else console.log("Hello");
}

greet("idi");
greet(undefined);
//greet(null); // Argument of type 'null' is not assignable to parameter of type 'string'.
/**we can pass null or undefined as argument,
 * declaring name as a union type like this:
 * function greet(name: string | null | undefined) ...
 */

/*********** Optional Chaining **********/
type Custumer = {
  birthday?: Date;
};

function getCustumer(id: number): Custumer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let custumer = getCustumer(0);
//console.log(custumer.birthday); // 'costumer' is possibly 'null'

// solution
if (custumer !== null && custumer !== undefined) console.log(custumer.birthday);

/**oprional property access operator (Optional Chaining) allows to safely access nested properties or methods of an object without the risk of encountering a runtime error if the intermediate properties are null or undefined. */
console.log(custumer?.birthday); // executed only if we have a custumer not null or undefined

let custumer1 = getCustumer(1);
//console.log(custumer1?.birthday.getFullYear); // executed if we have the custumer, and the custumer have a birthday // 'custumer1.birthday' is possibly 'undefined'
console.log(custumer1?.birthday?.getFullYear());

// Optional element access operator
// useful when dealing with arrays
// customers?.[0]

// Optional call operator (same syntax: ?.)
let log: any = null; // log "is" a reference to a function

//log("a"); // run time error /**TypeError: log is not a function */

log?.("a"); // executed only if log is referencing an actual function
