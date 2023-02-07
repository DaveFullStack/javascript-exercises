const fibonacci = function(fibonacci) {

    let a = fibonacci;
    let numOne = 0, numTwo = 1, nextNum;
    if (a < 0) {
        return 'OOPS'
    }
    else if (a == 1) {
        return 1;
    }
    for (i = 0; i < a -1; i++) {
        nextNum = numOne + numTwo;
        numOne = numTwo;
        numTwo = nextNum;
    }
    return nextNum;




};

// Do not edit below this line
module.exports = fibonacci;
