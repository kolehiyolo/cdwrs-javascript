function validParentheses(parens) {
    // * Variable Declarations
    let parenCounter = 0;
    let parensArray = parens.split(``);
    let result = true;

    // * Scrolling through the Array
    parensArray.map((item, index) => {
        switch (item) {
            case "(":
                parenCounter++;
                break;
            case ")":
                parenCounter--;
                break;
            default:
                break;
        }

        if (parenCounter < 0) {
            result = false;
        }
    });

    // * Final Deliberation
    if (parenCounter === 0 && result === true) {
        result = true;
    } else {
        result = false;
    }

    return result;
}