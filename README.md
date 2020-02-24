# Recreate forEach

Create a function that can be used in place of a for loop.  

A for loop can be used to run a piece of code for each item in an array.  Generally, when writing a for loop, the code to set up creating the index variable, testing when to stop looping, and incrementing the index each loop is the same.  The only bit that changes is the code inside the for loop that does something with each element in the array.  When we find we are duplicating code (i.e. the for loop set up), we should try to create a function for it.

Declare a function called forEach that takes an array and a callback function.  Call the callback for each item in the array, passing in the item and the item's index.

Test the function be passing by running the following code runs with no errors, and gives the expected output.

```

console.log("--- test 1 (basic) ---");

const array1 = [1, 2, 3, 4];
forEach(array1, function(item, index) {
    console.log(`[${index}] ${item}`);
});


console.log("--- test 2 (array of objects) ---");

const array2 = [{
    name: "obj1",
    prop1: 1,
},{
    name: "obj2",
    prop1: 2,
}];
forEach(array2, function(item, index) {
    console.log(`[${index}]`, item);
});


console.log("--- test 3 (array of arrays) ---");

const array3 = [[
    1, 2, 3
],[
    "a", "b", "c"
]];
forEach(array3, function(item, index) {
    console.log(`[${index}]`, item);
});


console.log("--- test 4 (empty array) ---");

const array4 = [];
forEach(array4, function(item, index) {
    console.log(`[${index}]`, item);
});
```

**Note:** When styles are required they are provided for you in master.css. Look in the file to find the approriate class names to use on your HTML elements.

## Example

[The example is here](https://jsf--create-foreach.now.sh).

## Task

Clone or download this repository onto your computer.  You will start out in the "master" branch which contains an empty project.

Try to recreate the website above.  Firstly, try to create it without any help.  If you are unsure of what to do, you can follow the steps below.  If the steps don't help, checkout out the "answer" branch from this repository.  The answer branch contains a working example.

## Steps

1. Declare a function called forEach that takes 2 arguments.  Argument 1 will be the array.  Argument 2 will be a callback function.  
1. Inside the forEach function, create a standard for loop that loops through the array parameter.
1. Inside the for loop, call the callback function that was passed into the function.  Pass in the current item of the loop, and the current loop indcex as the first 2 parameters.
1. Copy the test function calls from above and paste them into your code.
1. Open the web page and test that there are no errors and that the array values for each test are logged out as expected.  Check the example link for the expected output.