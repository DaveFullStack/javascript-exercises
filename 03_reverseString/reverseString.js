const reverseString = function(reverse) {
    let charArray = Array.from(reverse)
    let output = '';
    for (i = charArray.length -1; i >= 0; i--) {
        output += charArray[i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
