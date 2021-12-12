// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// * Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// * Solution
// So here's what I had in mind
// The best I can come up with is to setup an array that stores every int and their corresponding count
// I realize it's quite process intensive
// Ohhhhh
// I think it's best to do this instead
// we don't do the array storage anymore
// instead, we straight up do the loop
// we check the 1st value and store it as the value to bounce off against and splice it off the array
// we also setup a counter for all matches
// then we do an inner loop for the rest of the items in the array
// we check to see if the next item matches the bounce off thingie
// if it does, we splice it off and add to the counter
// once the loop is done, we check if the counter is odd or nah
// if it is, break the loop
// if it's not, do it all over again
// this isn't exactly a scaleable implementation because what exactly would this be used for lol
// it's just that I can't imagine a use for a program that specifically just does this
// but yeah I'm aight with this lesgo

function findOdd(A) {
    // * Variable Declaration
    let result = 0;

    for (let i = 0; i < A.length; i++) {
        console.log(`A[${i}]= ${A[i]}`);
        let bounce = A.splice(i--, 1)[0];
        let counter = 1;

        for (let j = 0; j < A.length; j++) {
            console.log(`--A[${j}] = ${A[j]}`);
            if (bounce === A[j]) {
                A.splice(j--, 1);
                counter++;
            }
        }

        console.log(`${bounce} = ${counter}`);
        if (counter % 2 === 1) {
            console.log(`${bounce} is odd`);
            return bounce;
        }
    }

    return 0;
}

findOdd([1, 2, 2, 3, 3,5,5,5,3,3, 4, 3, 3,1]);
// findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);