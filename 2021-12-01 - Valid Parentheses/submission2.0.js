// * Possible Improvements
// Find a way to not need the parens to array transition
// Make a simpler checked for "(" or ")"
// Make a simpler final delibiration
// It would be great if when the counter gets -1, the loop immediately stops since the result will already be false
// I'm thinking of just doing a for loop with a breaker
// Setup much better documentation

function validParentheses(parens) {
    // * Variable Declarations
    let parenCounter = 0;
    let result = true;

    // * Scrolling through the string
    for (let i = 0; i < parens.length && parenCounter != -1; i++) {
        parenCounter = parens[i] === `(` ? parenCounter++ : parenCounter--;
    }

    // * Final Delibiration
    result = parenCounter === 0 ? true : false;

    console.log(result);
    return result;
}

validParentheses("((()"); // False
validParentheses(")(()))"); // False
validParentheses("("); // False
validParentheses("(())((()())())"); // True