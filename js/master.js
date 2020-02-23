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