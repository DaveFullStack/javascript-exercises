const sumAll = function(numOne, numTwo) {
    let a = numOne;
    let b = numTwo;
    let result = 0;
    let error = 'ERROR'

    if (typeof a !== "number" || typeof b !== "number") {
        return error
    }

    else {
        if (a < b) {
            while (a <= b) {
                result += a;
                a++;
                }
            }
        else {
            while (a >= b) {
                result += a;
                a--;
            }
        }

    
    if (result > 0) {
        return result;
        }
    else if (result < 0) {
        return error;
        }   
    }
}

// Do not edit below this line
module.exports = sumAll;
