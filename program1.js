/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const matchingBrackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    // Stack to keep track of opening brackets
    const stack = [];

    for (let char of s) {
        if (matchingBrackets[char]) {
            // If it's a closing bracket, check the top of the stack
            const topElement = stack.length > 0 ? stack.pop() : '#';
            if (matchingBrackets[char] !== topElement) {
                return false;
            }
        } else {
            // If it's an opening bracket, push to stack
            stack.push(char);
        }
    }

    // If stack is empty, all brackets were matched properly
    return stack.length === 0;
};

module.exports = { isValid };


