/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        // Check if current numeral is smaller than the next numeral
        if (i < s.length - 1 && romanValues[s[i]] < romanValues[s[i + 1]]) {
            total -= romanValues[s[i]];  // Subtract if smaller numeral is before larger one
        } else {
            total += romanValues[s[i]];  // Otherwise, add the numeral's value
        }
    }

    return total;
};


module.exports={romanToInt}