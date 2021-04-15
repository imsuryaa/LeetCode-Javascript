// Valid Anagram
var isAnagram = function(s, t) {
    s = s.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('')
    t = t.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('')
    if (s !== t) {
        return false
    }
    return true
};