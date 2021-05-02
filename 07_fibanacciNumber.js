// LeetCode 509
/*The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
such that each number is the sum of the two preceding ones, starting from 0 and 1. */

function fib(N) {
    if(N===0){
        return 0;
    } 
 
    if(N===1){
        return 1;
    }
    let i=2;
    let a=0;
    let b=1;
    while(i<=N){
        let temp=a+b;
        a=b;
        b=temp;
        i++;
    }
    return b;
};