const palindromes = function (palindrome) {
    
  var removeChar = palindrome.replace(/[^A-Z0-9]/ig, "").toLowerCase();

  
  var checkPalindrome = removeChar.split('').reverse().join('');

   if(removeChar === checkPalindrome){
     return true;
   }else{
     return false;
   }
}

// Do not edit below this line
module.exports = palindromes;
