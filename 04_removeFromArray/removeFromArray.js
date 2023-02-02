const removeFromArray = function(mainArray, ...args) {
    let a = mainArray;
    let b = args;
    let c = a.filter(d => !b.includes(d));
    return c;
    

    //main array contains all values
    //args contains all arguments stored in array
    //need to say if any values in args is equal to values in main array
    //it removes the value from the main array
};

// Do not edit below this line
module.exports = removeFromArray;
