console.log("Hello World!");
console.log("So right here is my first Code Wars Kata done in a while");
console.log("Lesgooo");

// * Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// * Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// * Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
    // your code here ..
    // Here's what I'm thinking
    // First, we set up an open parenthesis counter
    // Then, we scroll through the string
    // For every open parenthesis we match, we add to the counter
    // And for every closing parenthesis we match, we subtract from the counter
    // If at some point the counter gets to -1, that's an immediate false
    // -- This means that the recent closing parenthesis doesn't have a matching opening one before it
    // If after the scroll, the counter is at 0, then it's true
    // -- This means that all closing parenthesis matched with an opening one
    // Otherwise it's false
    // -- This means that there are more opening parenthesis than closing ones

    // Right so turns out the above setup doesn't really work
    // It doesn't take into account the nesting situation
    // So with the above solution, this somehow works:
    // ()()()
    // Actually yknow what it seems like it does work lol let's go try it then
    console.log(`parens = ${parens}`);

    // * Variable Declarations
    let parenCounter = 0;
    let parensArray = parens.split(``);
    let result = true;

    // * Scrolling through the Array
    console.log(`Looping now`);
    parensArray.map((item, index) => {
        console.log(`--parensArray[${index}] = ${item}`);

        switch (item) {
            case "(":
                console.log(`----OPEN`);
                parenCounter++;
                break;
            case ")":
                console.log(`----CLOSE`);
                parenCounter--;
                break;
            default:
                console.log(`----INVALID`);
                break;
        }

        if (parenCounter<0) {
            result = false;
            console.log(`!BREAK`);
        }

        console.log(`----parenCounter = ${parenCounter}`);
    });

    console.log(`\n`);
    console.log(`DONE`);
    console.log(`parenCounter = ${parenCounter}`);
    if (parenCounter===0 && result === true) {
        console.log(`TRUE`);
    } else {
        console.log(`FALSE`);
    }

    return false;
}



validParentheses(")(()))");
validParentheses("(");
// validParentheses("(())((()())())");

