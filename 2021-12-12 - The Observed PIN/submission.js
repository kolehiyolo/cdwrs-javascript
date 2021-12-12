function anagrams(word, words) {
    // * Variable Declarations
    let result = [];
    let tripwire = false;
    let wordLength = word.length;
    let itemLength;

    // * words Array Looper
    words.forEach((item, index) => {
        // console.log(`words[${index}] = ${item}`);
        itemLength = item.length;
        tripwire = false;
        let itemPH = item.split("");

        // * Length Checker
        if (words[index].length === wordLength) {
            // console.log(`--${word} = ${words[index]} -> EQUAL LENGTH`);

            // * Looping through word
            for (let i = 0; i < wordLength && tripwire === false; i++) {
                // console.log(`----word[${i}] = ${word[i]}`);

                // * Looping through words[index] to find a match for word[i] 
                for (let j = 0; j < itemLength; j++) {
                    // console.log(`------item[${j}] = ${itemPH[j]}`);

                    if (word[i] === itemPH[j]) {
                        // console.log(`------MATCH FOUND`);
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

    // console.log(result);

    // * Final Output
    return result;
}