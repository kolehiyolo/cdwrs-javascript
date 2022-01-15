// * Rules
// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.
// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

// A2358 1

// For example an extract of a stocklist could be:
// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....

// You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :
// M = {"A", "B", "C", "W"} 
// or
// M = ["A", "B", "C", "W"] or ...
// and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

// For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):
// (A : 20) - (B : 114) - (C : 50) - (W : 0)
// where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

// If L or M are empty return string is "" (Clojure and Racket should return an empty array/list instead).

// Note:
// In the result codes and their values are in the same order as in M.

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
// 6. After doing this for all items, have them all joined as usual


// ? ABOVE IS DONE

// * Side Note

// * Code
function stockList(listOfArt, listOfCat) {
    let result;

    return result;
}

// * Tests
stockList(); // 