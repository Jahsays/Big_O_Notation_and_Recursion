// Simplify the following big O expressions as much as possible:
O(n + 10)  = O(n)
O(100 * n) = O(100n) = O(n)
O(25) = O(1)
O(n^2 + n^3) = O(n^3)
O(n + n + n + n) = O(n)
O(1000 * log(n) + n) = O(log(n))
O(1000 * n * log(n) + n) = O(log(n))
O(2^n + n^2) = O(2^n)
O(5 + 3 + 1) = O(1)
O(n + n^(1/2) + n^2 + n * log(n)^10) = O


// Part 2
// Determine the time and space complexities for each of the following functions. If you're not sure what these functions do, copy and paste them into the console and experiment with different inputs!
// 1.
 
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
//  time complexity = O(n)
//  space complexity = O(1)
// 2. 
 
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
//  time complexity = O(1)
//  space complexity = O(1)
// 3. 
 
function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}
// time complexity = O(1)
// space complexity = O(1)
// 4.
 
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
// time complexity = O(n)
// space complexity = O(1)
// 5. 
 
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
// time complexity = O(n^2)
//  space complexity = O(1)