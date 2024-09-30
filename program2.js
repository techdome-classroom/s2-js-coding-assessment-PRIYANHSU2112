/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
      const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    // Iterate through the string from right to left
    for (let i = s.length - 1; i >= 0; i--) {
        const currentChar = s[i];
        const currentValue = romanMap[currentChar];

        // If the current value is less than the previous value, we subtract it
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            // Otherwise, we add it
            total += currentValue;
        }

        // Update the previous value for the next iteration
        prevValue = currentValue;
    }

    return total;
};


module.exports={romanToInt}
