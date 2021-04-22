// LeetCode 70
//You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/* Example-
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps */

function climbStairs(n) {
    if(n <= 3) return n

    let ways = [0,1,2,3]

    for(let i = 4; i <= n; i++) {
        ways.push(ways[i-1] + ways[i-2])
    }
    return ways[n]
}
