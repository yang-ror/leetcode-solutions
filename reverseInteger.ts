/*
Question:
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

/*
Solution:
Take a number x as input and returns a number.
Determine if the input is positive and stores this in posNumber.
Set maxLength to 10 (the maximum number of digits in a 32-bit integer) and calculate maxValue
Converts the absolute value of x to a string newStr.
Initialize an empty string revStr to store the reversed number.
Check if the input has the same number of digits as the maximum value.
The main loop reverses the digits:
	Compare each digit with the corresponding digit of the maximum value.
	If a digit is larger and no smaller digit has been found yet, it returns 0.
	If a smaller digit is found, it sets foundSmallerDigit to true.
	Append each digit to revStr

Finally, Parses the reversed string to an integer and restore the original sign.

Time complexity: O(n)
space complexity: O(1) 

Runtime:72ms
Beats:82.44%
*/

//Code

function reverse(x: number): number {
    const posNumber: boolean = x > 0

    let maxLength: number = 10
    let maxValue: number|string = 2147483648 - (posNumber ? 1 : 0)
    maxValue = maxValue.toString()

    // const newStr = Math.abs(x).toString().split('').reverse().join('')
    const newStr = Math.abs(x).toString()
    let revStr = ''

    if (newStr.length > maxLength) return 0

    const isSameLength: boolean = newStr.length === maxLength
    let foundSmallerDigit: boolean = false

    for (let i = newStr.length - 1; i >= 0 ; i--) {
        const curMaxDigit = maxValue[maxLength - 1 - i]
        if(!foundSmallerDigit){
            if(isSameLength && newStr[i] > curMaxDigit) {
                return 0
            } else if (isSameLength && newStr[i] < curMaxDigit) {
                foundSmallerDigit = true
            }
        }
        revStr = revStr + '' + newStr[i]
    }

    return parseInt(revStr) * (posNumber ? 1 : -1)
};