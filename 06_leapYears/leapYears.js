const leapYears = function(year) {
let a = year;


if (a % 400 === 0) {
    return true
}
else if (a % 100 === 0){
    return false;
}
else if (a % 4 === 0) {
    return true;
}
else {
    return false;
}

};

// Do not edit below this line
module.exports = leapYears;
