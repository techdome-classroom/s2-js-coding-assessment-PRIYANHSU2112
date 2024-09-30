/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const bracketMap = {'(': ')', '{': '}', '[': ']'};
    for (const char of s) {
        if (bracketMap[char]) {
            stack.push(bracketMap[char]);
        } else {
            if (stack.pop() !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
module.exports = { isValid };
