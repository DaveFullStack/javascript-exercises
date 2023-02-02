const repeatString = function(hey, num) {
    let repeatedString = '';
    while (num > 0) {
        repeatedString += hey;
        num--;
    }
    return repeatedString;

};

// Do not edit below this line
module.exports = repeatString;
