// LeetCode - 125
// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

function isPalindrome(s) {
    // Santize the input string
    s = s.toLowerCase().replace(/[\W_]/g, "")

    let left = 0
    let right = s.length - 1

    while(left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left ++
        right ++
    }
    return true
}