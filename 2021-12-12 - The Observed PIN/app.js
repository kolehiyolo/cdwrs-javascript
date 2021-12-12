// * Rules
// Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

// The keypad has the following layout:
// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘

// He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

// He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

// # possible in sense of: the observed PIN itself and all variations considering the adjacent digits

// Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java/Kotlin and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

// Detective, we are counting on you!

// * My Solution
// This is an incredible puzzle and yeah I'm all for it
// First step is to find some sort of algorithm that gets you the adjacent digits of an observed[i]
// We can just make some sort of array listing the adjacent digits of each button but c'mon that's boring
// As I see it, the formula for the adjacent digits is:
// the adjacent of observed[i] is [i, i-1, i+1, i+3, i-3];
// Now, we need to know which buttons are in which positions
// if digit % 3 === 2, then it's on the left
// if digit % 3 === 0, then it's on the right
// if digit % 3 === 1, then it's on the center
// Another thing to keep in mind is that if an adjacent is above 9 or below 1, then it's not an adjacent and must not be included in the array in the first place
// Finally, one exception has to be made that if an adjacent turns out to be 11, it must be converted to 0
// Oh wait another exception is that if observed[i] is 0, then the adjacent is 8
// Aight so that's one part of the problem
// Here's the expected results
// observed[i] = 1 -> [1, 2, 4]
// observed[i] = 2 -> [1, 2, 3, 5]
// observed[i] = 3 -> [2, 3, 6]
// observed[i] = 4 -> [1, 4, 5, 7]
// observed[i] = 5 -> [2, 4, 5, 6, 8]
// observed[i] = 6 -> [3, 5, 6, 9]
// observed[i] = 7 -> [4, 7, 8]
// observed[i] = 8 -> [5, 7, 8, 9, 0]
// observed[i] = 9 -> [6, 8, 9]
// observed[i] = 0 -> [8, 0]
// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘

// Now all we need is to do is to build the array listing all possible combinations
// The simplest way is to write a loop that goes through each observed[i]
// Then we check which digit it is and match it to the array of adjacent digits
// Say an example is getPINs(901);
// 9's adjacents are [6, 8, 9] which are then added to the array
// Then we go to the next observed[i] which is 0
// 0's adjacents are [8, 0], with just 2 numbers
// What this means is we duplicate results array and add the adjacent digits of [0] to the array
// Then we go to the next observed[i] which is 1
// 1's adjacents are [1, 2, 4] which are then added to the array
// Then we go to the next observed[i] which is 2

// ? ABOVE IS DONE

// * Side Note
// I'm pretty sure doing a recursive function would be the best for this
// Especially since there's a chance that we'll have to do a lot of loops within loops

// * Code
function getPINs(observed) {
    // * Function Start
    console.log(`getPINs(${observed}) called`);
    console.log(`\n`);

    // * Variable Declarations
    let result = [];
    // let parsedObserved = observed.split('').map((item) => parseInt(item));
    let parsedObserved = observed.split('');
    let adjacents = [
        ['0', '8'],
        ['1', '2', '4'],
        ['2', '1', '3', '5'],
        ['3', '2', '6'],
        ['4', '1', '5', '7'],
        ['5', '2', '4', '6', '8'],
        ['6', '3', '5', '9'],
        ['7', '4', '8'],
        ['8', '0', '5', '7', '9'],
        ['9', '6', '8'],
    ];
    let currentAdjacents = [];

    console.log(`parsedObserved = ${parsedObserved}`);
    console.log(`\n`);

    result = [...parsedObserved];
    let resultLength = result.length;

    for (let i = 0; i < parsedObserved.length; i++) {
        currentAdjacents = adjacents[parsedObserved[i]];
        console.log(`parsedObserved[${i}] = ${parsedObserved[i]}`);
        console.log(`-- currentAdjacents = ${currentAdjacents}`);
        
        for (let j = 0; j < currentAdjacents.length; j++) {
            console.log(`----currentAdjacents[${j}] = ${currentAdjacents[j]}`); 
            
            for (let k = 0; k < resultLength; k++) {
                console.log(`------result[${k}] = ${result[k]}`);
                // result.push(result[k] + currentAdjacents[j]);
            }
            resultLength = result.length;
        }

        console.log(`\n`);
    }

    // * Final Output
    console.log(`result = ${result}`);
    console.log(`\n`);
    console.log(`getPINs(${observed}) end`);
    return result;
}

// * Tests
// getPINs("8"); // ["5", "7", "8", "9", "0"]
// getPINs("11"); // ["11", "22", "44", "12", "21", "14", "41", "24", "42"]
getPINs("369"); // ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]