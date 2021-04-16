// LeetCode - 20
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

var isValid = function(s) {
    let stack = []
    let hashMap = { "(" : ")", "{" : "}", "[" : "]" }
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        
        if(hashMap[char]) {
            stack.push(char)
        } else if (hashMap[stack.pop()] !== char) {
            return false
        }
    }
    return stack.length === 0
};