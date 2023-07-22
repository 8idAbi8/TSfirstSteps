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
let employee: {
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

console.log(employee);
