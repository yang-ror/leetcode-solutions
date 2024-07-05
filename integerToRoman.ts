/*
Question:
Seven different symbols represent Roman numerals with the following values:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.
Given an integer, convert it to a Roman numeral.
*/

/*
Solution:

Convert a single digit to its Roman numeral representation:
	Take four parameters: the digit to convert, and the Roman symbols for one, five, and ten in the current place value.
	Handle all cases from 0 to 9, including the special cases for 4 and 9.


intToRoman:
	Break down the input number into its individual place values (ones, tens, hundreds, thousands).
	For each place value, call digitToRoamn with the appropriate Roman symbols.
	Build the full Roman numeral from right to left, starting with the ones place.

Time complexity: O(1)
space complexity: O(1)

Runtime:123ms
Beats:46.25%
*/

function digitToRoamn(num: number, one: string, five: string, ten: string): string {
    const digit = num
    let roman: string = ''

    if (digit < 4) {
        for (let i = 0; i < digit; i++)
            roman = roman + one
    } else if (digit === 4) {
        roman = roman + one + five
    } else if (digit === 5) {
        roman = roman + five
    } else if (digit < 9) {
        roman = roman + five
        for (let i = 0; i < digit - 5; i++)
            roman = roman + one
    } else {
        roman = roman + one + ten
    }

    return roman
}

function intToRoman(num: number): string {
    let roman = ''

    roman = digitToRoamn(Math.floor(num % 10), 'I', 'V', 'X') + roman
    roman = digitToRoamn(Math.floor(num % 100 / 10), 'X', 'L', 'C')  + roman
    roman = digitToRoamn(Math.floor(num % 1000 / 100), 'C', 'D', 'M') + roman
    roman = digitToRoamn(Math.floor(num / 1000), 'M', '', '')  + roman

    return roman
};