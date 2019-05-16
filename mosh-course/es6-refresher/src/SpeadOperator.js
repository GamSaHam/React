const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
// const combined2 = [...first, "a", ...second]; //Sprad Operator

// console.log(combined);
// console.log(combined2);

const clone = [...first];
console.log(first);
console.log(clone);

const first2 = { name: "mosh" };
const second2 = { job: "Instructor" };

const combined = { ...first, ...second, location: "australia" };

console.log(combined);

const clone2 = { ...first2 };
console.log(clone2);
