/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
      const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const stack = [];

    for (const char of s) {
        if (bracketMap[char]) { // If it's a closing bracket
            const topElement = stack.pop(); // Pop from stack if available
            if (topElement !== bracketMap[char]) {
                return false; // Mismatch
            }
        } else {
            stack.push(char); // Push opening bracket onto stack
        }
    }

    // If stack is empty, all brackets are matched
    return stack.length === 0;
};

module.exports = { isValid };


