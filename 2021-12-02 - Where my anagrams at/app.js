// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
// 'abba' & 'baab' == true
// 'abba' & 'bbaa' == true
// 'abba' & 'abbba' == false
// 'abba' & 'abca' == false

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

// Note for Go
// For Go: Empty string slice is expected when there are no anagrams found.

// * My Solution
// this is a very interesting challenge
// first thing in my mind is this
// The first layer of the loop is to loop through the words array
// once we get the item, we check first if it's the same length as word
// If not, then words[i] obviously isn't an anagram of word
// * ABOVE IS DONE
// if it's the same length, proceed with the match-checking
// loop through the string word[i]
// under this loop is another loop that goes through words[i]
// if a match is found for words[i][j] and word[i], words[i][j] is spliced off
// then move to the next words[i][j] then do again
// if during the inner loop no match is found, tripwire is set to true, words[i] loop is stopped and we move on to the next word in the array
// if after the inner loop the tripwire indicator hasn't been tripped, that means words[i] is an anagram and is to be added to the results array
// lesgo build this thing

// * Side Note
// The more I think about, the more I'm certain the matchmaking part can be done easily via regex
// But yeh we'll look into that later when optimizing lol

function anagrams(word, words) {
    // * Variable Declarations
    let result = [];
    let tripwire = false;
    let wordLength = word.length;
    let itemLength;

    // * words Array Looper
    words.forEach((item, index) => {
        console.log(`words[${index}] = ${item}`);
        itemLength = item.length;
        tripwire = false;
        let itemPH = item.split("");

        // * Length Checker
        if (words[index].length === wordLength) {
            console.log(`--${word} = ${words[index]} -> EQUAL LENGTH`);

            // * Looping through word
            for (let i = 0; i < wordLength && tripwire === false; i++) {
                console.log(`----word[${i}] = ${word[i]}`);

                // * Looping through words[index] to find a match for word[i] 
                for (let j = 0; j < itemLength; j++) {
                    console.log(`------item[${j}] = ${itemPH[j]}`);

                    if (word[i] === itemPH[j]) {
                        console.log(`------MATCH FOUND`);
                        itemPH.splice(j--,1);
                        j = itemLength--;
                        tripwire = true;
                    }
                }

                if (tripwire === true) {
                    tripwire = false;
                } else {
                    tripwire = true;
                }
            }

            if (tripwire === false) {
                result.push(item);
            }
        }

    });

    console.log(result);

    // * Final Output
    return result;
}

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']); // ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']); // ['carer', 'racer']
anagrams('laser', ['lazing', 'lazy',  'lacer']); // []