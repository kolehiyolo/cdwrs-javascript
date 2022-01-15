// * Rules
// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

// * My Solution

// -?(\d{1,3},)+\.?\d+\d$

// Exercise 1: Matching Numbers
// -?((\d{1,3},)+(\d{1,3})|\d+)\.?\d+e?\d+$

// Exercise 2: Matching Phone Numbers
// ^1? ?\(?(\d{3})\)?

// Exercise 3: Matching Emails
// ^((.+)\+.+)|((.+))@

// Exercise 4: Capturing HTML Tags
// 



// ? ABOVE IS DONE

// * Side Note

// * Code
function validate(password) {
    return /(put answer here)/.test(password);
}

// * Tests
validate('djI38D55'); // true
// validate('a2.d412'); // false
// validate('JHD5FJ53'); // false
// validate('!fdjn345'); // false
// validate('jfkdfj3j'); // false
// validate('123'); // false
// validate('abc'); // false
// validate('Password123');; // true