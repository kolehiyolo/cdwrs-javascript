// * Rules
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// * My Solution
// Now this is an interesting and a very very useful problem
// The simplest way is to divide the input with the conversions
// We first divide by 3600, and the answer is then set as hours
// Whatever remains, we divide by 60, and the answer is then set as minutes
// Then whatever remains is set as seconds

// ? ABOVE IS DONE

// * Side Note

// * Code
function humanReadable(seconds) {
    // * Function Start
    console.log(`humanReadable(${seconds}) CALL`);

    // * Variable Declarations
    let result = "";
    let hrs = "";
    let mins = "";
    let secs = seconds;

    hrs = Math.floor(secs / 3600);
    hrs = (hrs >= 10) ? hrs : `0${hrs}`;
    secs = secs % 3600;
    mins = Math.floor(secs / 60);
    mins = (mins >= 10) ? mins : `0${mins}`;
    secs = (secs % 60 >= 10) ? secs % 60 : `0${secs % 60}`;

    result = `${hrs}:${mins}:${secs}`;

    // * Final Output
    console.log(`result = ${result}`);
    return result;
}

// * Tests
// humanReadable(0); // "00:00:00"
// humanReadable(59); // "00:00:59"
// humanReadable(60); // "00:01:00"
// humanReadable(90); // "00:01:30"
// humanReadable(3599); // "00:59:59"
// humanReadable(3600); // "01:00:00"
// humanReadable(45296); // "12:34:56"
// humanReadable(86399); // "23:59:59"
// humanReadable(86400); // "24:00:00"
// humanReadable(359999); // "99:59:59"
// humanReadable(1251611); // "99:59:59"