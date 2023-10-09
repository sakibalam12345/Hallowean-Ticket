
# Q/A


1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined

Answer : B . Option B is correct because there is a typographical error in the code (greetign instead of greeting). This leads to a ReferenceError, as the variable greetign is not defined, and the code cannot execute successfully. 

2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer : C . answer is c because because JavaScript performs string concatenation when you use the + operator with a string and a number, converting the number to a string and concatenating the two values.

3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

Answer : A . The info.favoriteFood property is initially set to the first element of the food array, which is "🍕". Later, it is updated to "🍝". However, this update only affects the info.favoriteFood property, and it does not modify the food array itself. Therefore, the food array remains unchanged, and the output is ['🍕', '🍫', '🥑', '🍔'].

4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}
console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

Answer: The correct answer is B: Hi there, undefined.
In the sayHi function, you expect a name parameter, but when you call sayHi() without passing any arguments, the name parameter inside the function is undefined. Therefore, the function returns "Hi there, undefined" when you log the result.

5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4

Answer :  the count variable is initially set to 0, and you have an array nums containing the values [0, 1, 2, 3]. You are using the forEach method to iterate over the elements of the nums array and increment the count variable by 1 if the element num is truthy.

In this case, 0 is considered falsy in JavaScript, so the first element (0) will not increment the count. However, the other elements (1, 2, and 3) are truthy, so they will each increment the count by 1.

After the forEach loop has completed, the value of count will be 3.

Used chatgpt for these questions.