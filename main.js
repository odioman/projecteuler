/* Project Euler Question 1 */
/* iterative approach */ 
function findSumOfThreeAndFive(n) {
    let total = 0; 
    for (let i=0; i < n; i++) {
        if (i % 3 === 0) {
            total += i
        } else if (i % 5 === 0) {
            total += i 
        } 
    }
    return total
}

/* Recursive Approach */
function findSumOfThreeAndFiveRec(number) {
    number = number - 1;
    let multiples = [];
    multiples = multiplesOfN(multiples, number, 3);
    multiples = multiplesOfN(multiples, number, 5);
    return multiples.reduce((a,b) => a + b, 0);
}

function multiplesOfN(multiples, number, n) {
    if (number > 0 && number % n == 0 && !multiples.includes(number)) {
        multiples.push(number)
        return multiplesOfN(multiples, number - n, n);
    } else if (number > 0) {
        return multiplesOfN(multiples, number - 1, n);
    } else {
        return multiples;
    }
}

/* Problem 2 Even Fibonacci Number */
/* iterative approach */
function fibEvenSum(n) {
    let fibNumSum = 0;
    let fibCurrent = 0;
    let fibNext = 1;

    for (let i = 1; i <= n; i++) {
        let fibTotal = fibCurrent + fibNext;
        fibCurrent = fibNext;
        fibNext = fibTotal
        
        if (fibTotal % 2 == 0) {
            fibNumSum += fibTotal
            console.log(fibNumSum)
        }
    }
    return fibNumSum
}

/* recursive approach not working */
function fibEvenSumRec(n) {
    let fibNums = [1,2];
    fibNums = add(n, fibNums);
    let sum = 0;
    for (let i in fibNums) {
        if (fibNums[i] % 2 === 0) {
            sum = sum + fibNums[i];
        }
    }
    return sum;
} 

function add(n, fibNums) {
    let c = fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2];
    fibNums.push(c);
    if (fibNums < n) {
        return add(n, fibNums)
    } else {
        return fibNums 
    }

}


function fibsRec(n) {
    if (n === 0 || n < 0) {
        return 
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else if (n > 2) {
        return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n-3]];
    }
} 

function fibEvenSumRecursive(n) {
    let evenFib = []
    if (fibsRec(n - 1)[n - 3] % 2 === 0) {
        evenFib.push(fibsRec(n - 1)[n - 3])
        console.log(evenFib)
    }
    return evenFib.reduce((a,b) => a + b, 0)

}

/* Problem 3. Largest Prime Factor */

function largestPrimeFactor(n) {
    let i = 2;

    while (i <= n) {
        if (n % i == 0) {
            n /= i;
        } else {
            i++
        }
    }
    console.log(i)
  
}