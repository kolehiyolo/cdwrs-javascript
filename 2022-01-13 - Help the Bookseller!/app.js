// * Rules
// The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

// A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").

// * Example
// abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
// === "e6t-r3s are r4y fun!"

// * Solution
// Here's my thinking
// 1. First thing is to split the string into an array of what are considered "words"
// --1a. Might be done via Regex or Split or sumthing
// --1b. We have to still add the non-words in the array for the combining process at the final process
// 2. Second, we loop thru the array and do the a10n processing for each item
// 3. We check if the item is a word or not
// --3a. If so, leave it be and move to the next item
// --3b. If not, then continue with the processing
// --3c. This step has become obsolete as if the item is not a word, it's actually definitely gonna be less than 3 chars so this is caught by the next conditional
// 4. We check if an item only has 3 or below chars
// --4a. If so, the item is unaltered and we move to the next item
// --4b. If not, continue with the processing
// 5. If not, we take the length of the item, take item[0] and item[item.length-1], then produce "item[0]+(item.length-2)+item[item.length-1]"
// * Done
// 6. After doing this for all items, have them all joined as usual


// ? ABOVE IS DONE

// * Side Note

// * Code
function abbreviate(string) {
    // let wordsArray = string.split(/(\W)/g);

    // wordsArray.forEach((item, index) => {
    //     let iLen = item.length;
    //     wordsArray[index] = (iLen > 3) ? `${item[0]}${iLen-2}${item[iLen-1]}` : item;
    // });

    // return wordsArray.join(``);

    // return string.split(/(\W)/g).map(item => (item.length > 3) ? `${item[0]}${item.length-2}${item[item.length-1]}` : item).join(``);

    return string.replace(/(\w{4,})/g, (item) => `${item[0]}${item.length-2}${item[item.length-1]}`);
}

// * Tests
// abbreviate("elephant--rides are really fun!");
console.log(abbreviate("elephant--rides are really fun!"));