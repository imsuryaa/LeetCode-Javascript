// LeetCode - 242
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

var isAnagram = function(s, t) {
    s = s.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('')
    t = t.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('')
    if (s !== t) {
        return false
    }
    return true
};