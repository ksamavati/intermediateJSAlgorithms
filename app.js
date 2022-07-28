/*
Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
    let oddSum = 1;
    let j = 1;
    let k = 0;

    for (let i = 1; i <= num; i = k) {
        if (i % 2) {
            oddSum += i;
        }

        k = i + j;
        j = i;
    }

    return oddSum;
}

console.log(sumFibs(4));

/*
Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false
            }
        }
        return true;
    }

    let sum = 0;

    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) sum += i;
    }

    return sum;
}

console.log(sumPrimes(10));

/*
Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/
function smallestCommons(arr) {
    arr.sort((a, b) => a - b);

    for (let i = arr[1]; i < 10000000; i += arr[1]) {
        for (let j = arr[0]; j <= arr[1]; j++) {
            if (i % j) {
                break;
            }
            if (j == arr[1]) { return i }
        }
    }
}

console.log(smallestCommons([1, 5]));