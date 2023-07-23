"use strict";
var _a;
let age = 34;
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [
    1, 2, 3,
];
numbers = numbers.map((element) => (element *= 2));
console.log("numbers: " + numbers);
numbers.forEach((element, index) => {
    numbers[index] = element * 2;
});
console.log("numbers: " + numbers);
let user = [1, "Idi"];
console.log("tuples: " + user);
console.log("tuples length: " + user.length);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
console.log("enum Size: ");
for (const key in Size) {
    if (isNaN(Number(key))) {
        console.log(key + ":", Size[key]);
    }
}
function calculateTax(income, taxYear = 2023) {
    if (taxYear < 2023)
        return income * 0.15;
    if (income < 30000)
        return income * 0.2;
    return income * 0.3;
}
console.log("Tax = " + calculateTax(10000));
let employee1 = {
    id: 1,
    name: "Idi",
    retire: (date) => {
        console.log(date);
    },
};
console.log(employee1);
let employee2 = {
    id: 2,
    name: "Abi",
    retire: (date) => {
        console.log(date);
    },
};
console.log(employee2);
function kgToLbs(weight) {
    if (typeof weight == "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity1;
let unitsOfLength = "cm";
let quantity2 = 100;
console.log(quantity2 + " " + unitsOfLength);
function greet(name) {
    if (name)
        console.log("Hello " + name.toUpperCase());
    else
        console.log("Hello");
}
greet("idi");
greet(undefined);
function getCustumer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let custumer = getCustumer(0);
if (custumer !== null && custumer !== undefined)
    console.log(custumer.birthday);
console.log(custumer === null || custumer === void 0 ? void 0 : custumer.birthday);
let custumer1 = getCustumer(1);
console.log((_a = custumer1 === null || custumer1 === void 0 ? void 0 : custumer1.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log("a");
//# sourceMappingURL=index.js.map