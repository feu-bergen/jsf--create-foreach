// Declare a function called forEach that takes 2 arguments;
// Argument 1 will be an array,
// Argument 2 will be a callback function.
// When forEach is called, it shall loop through the array, and call the callback function each loop.
// When calling callback, the current item of the loop and the current item index shall be passed 
// as the first 2 arguemtns
function forEach(array, callbackFn) {
    // loop through the array
    for(let i = 0; i < array.length; i++) {
        // get the item from the array based on the index
        const element = array[i];
        // call the callback function, passing in the current item, and the current index
        callbackFn(array[i], i);
    }
}


// Test function
// Copy the test function calls from above and paste them into your code.
// Open the web page and test that there are no errors and that the array values 
// for each test are logged out as expected.  Check the example link for the expected output.

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