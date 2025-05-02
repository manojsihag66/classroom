// function double(a) { return a*2;}
// console.log(double(4));

// const squareRoot = (b) => b**2
// console.log(squareRoot(5));

// const details = {
//   name: "xyz",
//   surname: "abc",
//   city: "mohali",
//   age: 34,
//   record: function () {
//     return `HI MY NAME IS ${name}`;
//   },
// };

// console.log(details.record());

// function personDetails(firstname, lastname)
// {
//     console.log({firstname, lastname});
// }

// personDetails("XYZ", "ABC" )

// function intro(fname, lname, age, city)

// {
//   this.firstname = fname;
//   this.lastname = lname;
//   this.userage = age;
//   this.usercity = city;
// }

// const manoj = new intro("XYZ", "ABC", 23, "MOHALI");


// console.log(manoj.firstname, manoj.usercity, manoj);
// console.log(`HI, My Name is ${manoj.firstname}${manoj.lastname}.I am ${manoj.userage} years old. I live in ${manoj.usercity} city.`);


// console.log(``);

// console.log(this)

// let num = Math.random();

//  num = num * 10;

// num = Math.floor(num);

// num = num + 1;

// console.log(num);

// let num = Math.floor( Math.random() * 10) + 1;

// let num = Math.ceil( Math.random() * 10);

// console.log(num);

// Generate random number between 1 to 100

// let randomNum = Math.floor( Math.random() * 100) + 1;

// console.log(randomNum);

// Generate random number between 1 to 5

// let randomNum = Math.floor( Math.random() * 5) + 1;

// console.log(randomNum);

// let num = Math.pow(2, 3);

// console.log(num);

//Recursion
// Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem.
//  It's commonly used to solve problems that can be divided into similar sub-problems, such as tree traversal, factorial calculation, etc.

// Key Points:
// Recursive function: A function that calls itself.
// Base case: The condition that stops the recursion to avoid infinite loops.
// Recursive case: The part of the function where it calls itself with a reduced or modified problem.

// Example of Recursion:

// function factorial(n) {
//     // Base case: stop when n is 1
//     if (n === 1) {
//         return 1;
//     }
//     // Recursive case: call factorial for n-1
//     return n * factorial(n - 1);
// }

// console.log(factorial(5)); // Output: 120

// In this example, the factorial function calls itself until it reaches the base case (n === 1), calculating the product of all numbers down to 1.

// Coercion
// Coercion refers to the process of converting a value from one type to another in JavaScript.
//  JavaScript automatically (or explicitly) converts values between different data types, like from a string to a number, or a boolean to a string.

// There are two types of coercion in JavaScript:

// Implicit Coercion: Done automatically by JavaScript when you perform operations on different types.
// Explicit Coercion: Done manually by the programmer using specific functions or operators.
// Example of Implicit Coercion:
// javascript
// Copy code
// console.log('5' - 2); // Output: 3 ('5' is implicitly coerced to a number)
// console.log('5' + 2); // Output: '52' (2 is coerced to a string, and concatenation happens)
// Example of Explicit Coercion:

// console.log(Number('5')); // Output: 5 (String '5' is explicitly coerced to a number)
// console.log(String(5));   // Output: '5' (Number 5 is explicitly coerced to a string)
// Key Differences
// Recursion is a logic-based concept, where a function repeatedly calls itself until a base condition is met.
// Coercion is a type-based concept, dealing with the conversion of values between different data types.
// In short, recursion is about function execution patterns, whereas coercion is about how JavaScript handles different data types during operations.



// function intro(fname, lname, age, city, state, email, mobile) {
//   this.firstname = fname;
//   this.lastname = lname;
//   this.userage = age;
//   this.usercity = city;
//   this.userstate = state;
//   this.useremail = email;
//   this.usermobile = mobile;
// }

// const record = new intro("Manoj", "Sihag", 23, "Sirsa", "Haryana", "msihag613@gmail.com", 8818066630);
// console.log(record);

let array = [321, 34, 56] + [4, 56, 67];
console.log(array);

console.log(typeof(array));


// console.log(0.2 + 0.1 === 0.3);

// console.log(0.2 + 0.1);
// console.log(0.3);


// console.log({} === {});


// console.log(date() === date());
// console.log(date());



// In JavaScript, the + operator between two arrays doesn't concatenate them. Instead, it converts the arrays to strings and concatenates those strings.

// For example:


// let array = [321, 34, 56] + [4, 56, 67];
// console.log(array);
// This will output the following:


// 321,34,564,56,67
// Here, the two arrays are converted to strings ("321,34,56" and "4,56,67") and then concatenated into the string "321,34,564,56,67".

// To concatenate two arrays in JavaScript, you should use the concat() method or the spread operator .... Here's the corrected version:

// Using concat():

// let array = [321, 34, 56].concat([4, 56, 67]);
// console.log(array);
// Using the spread operator:

// let array = [...[321, 34, 56], ...[4, 56, 67]];
// console.log(array);
// Both methods will output:

// [321, 34, 56, 4, 56, 67]






// console.log(0.2 + 0.1 === 0.3);

// In JavaScript, floating-point arithmetic can lead to unexpected results due to how numbers are stored in memory. The expression 0.2 + 0.1 === 0.3 will evaluate to false because 0.2 + 0.1 results in a value that is slightly off from 0.3 due to floating-point precision errors.




// console.log(0.2 + 0.1 === 0.3); // false
// console.log(0.2 + 0.1); // 0.30000000000000004
// To compare floating-point numbers accurately, it’s common to use a small tolerance (or epsilon) to check if the difference between the numbers is very small:


// let epsilon = 0.0000001;
// console.log(Math.abs(0.2 + 0.1 - 0.3) < epsilon); // true
// This approach ensures that minor floating-point precision issues don’t cause unexpected results.







// console.log({} === {});

// In JavaScript, comparing two objects using the === operator checks whether the two objects refer to the same instance in memory, not whether they have the same structure or properties. Since {} and {} are two different object instances, the comparison will return false.


// console.log({} === {}); // false
// Even though both objects are empty, they are distinct in memory, so they are not considered equal.

// If you want to compare two objects' contents, you would need to check their properties explicitly or use a utility function, such as JSON.stringify() or deep comparison libraries like Lodash's _.isEqual().

// Example using JSON.stringify() (note this works only for simple objects):


// console.log(JSON.stringify({}) === JSON.stringify({})); // true
// However, this method has its limitations, like not handling cases with circular references or different property orderings in non-standard JSON object comparisons.







// console.log(date() === date());

// In JavaScript, date() is not a valid function. Instead, the Date object is used to work with dates and times. To get the current date, you can use new Date().

// When you compare two different Date objects with ===, even if they represent the same point in time, they will be different objects in memory, so the result will be false, similar to how comparing two different objects works.

// For example:

// console.log(new Date() === new Date()); // false
// Each call to new Date() creates a new instance, and since they are distinct objects, the comparison returns false.

// To compare the actual values of two Date objects (i.e., the time they represent), you can use the .getTime() method, which returns the timestamp (the number of milliseconds since January 1, 1970):

// console.log(new Date().getTime() === new Date().getTime()); // false (unless run at exactly the same moment)
// However, since new Date() returns the current time, even the two calls to getTime() are likely to differ by a few milliseconds.



// console.log(date());

// In JavaScript, if you attempt to run console.log(date()); as is, you'll get a ReferenceError: date is not defined because date() is not a built-in function.

// If you're trying to get the current date and time, you should use new Date() instead:


// console.log(new Date());
// This will output something like:


// 2024-09-05T12:34:56.789Z
// This prints the current date and time in the ISO 8601 format. You can further format the date using JavaScript methods or libraries like Date.prototype.toLocaleString() or moment.js for more control over formatting.



