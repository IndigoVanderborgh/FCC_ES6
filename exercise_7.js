// Use the Rest Parameter with Function Parameters

// In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. 
// With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

// Check out this code:

// function howMany(...args) {
//   return "You have passed " + args.length + " arguments.";
// }
// console.log(howMany(0, 1, 2));
// console.log(howMany("string", null, [1, 2, 3], { }));

// The console would display the strings You have passed 3 arguments. and You have passed 4 arguments..

// The rest parameter eliminates the need to use the arguments object and allows us to use array methods on the array of parameters passed to the function howMany.


// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------
// Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.

const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

//   const sum = (x, y, z) => {
//     const args = [x, y, z];
//     let total = 0;
//     for (let i = 0; i < args.length; i++) {
//       total += args[i];
//     }
//     return total;
//   }
// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------
// We used the spread operator in line 22 and removed the const from the function. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax for mroe information on a spread operator.
// From this source: A spread operator allows an iterabl (array/string) to be expanded in places where zero or more argumnets (for function calls) or elements (for array literals) are expected
// In laymans terms: You can combine two arrays into one see both examples below. 

// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];

// Or

// Assign the first and second items from numbers to variables and put the rest in an array:

// const numbers = [1, 2, 3, 4, 5, 6];

// const [one, two, ...rest] = numbers;

// output -> 1 2 [3, 4, 5, 6]