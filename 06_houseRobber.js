// LeetCode 198
/*You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from 
robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.*/

/*Given an integer array nums representing the amount of money of each house, return the maximum 
amount of money you can rob tonight without alerting the police. */

function rob(nums) {
    let previous = 0;
    let current = 0;
    let temp; 
    for (let x of nums) {
        temp = current; 
        current = Math.max(x+previous, current);
        previous = temp;
    }
    return current;
}