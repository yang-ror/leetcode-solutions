/*
Question:
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/

/*
Solution:
Take a string of digits as input and return an array of strings (all possible letter combinations).

Initialize a Map called keyboardMap that maps each digit to its corresponding letters on a phone keypad.

An empty array allComp is created to store all the combinations.
The main logic is in the recursive function getComb:
	Take two parameters: initStr (the combination built so far) and digit (remaining digits to process).
	Base case: If there are no more digits to process and initStr is not empty, Add initStr to allComp.
	Recursive case: Get the characters corresponding to the first digit, then recursively calls itself for each of these characters, appending the character to initStr and removing the first digit from digit.

The initial call to getComb is made with an empty string and the full input digits.

Finally, return allComp

Time complexity: O(4^n * n)
space complexity: O(4^n)

Runtime:48ms
Beats:92.72%
*/

function letterCombinations(digits: string): string[] {
    const keyboardMap = new Map<string, string[]>()

    keyboardMap.set('2', ['a','b', 'c'])
    keyboardMap.set('3', ['d','e', 'f'])
    keyboardMap.set('4', ['g','h', 'i'])
    keyboardMap.set('5', ['j','k', 'l'])
    keyboardMap.set('6', ['m','n', 'o'])
    keyboardMap.set('7', ['p','q', 'r', 's'])
    keyboardMap.set('8', ['t','u', 'v'])
    keyboardMap.set('9', ['w','x', 'y', 'z'])

    const allComp: string[] = []

    function getComb(initStr: string, digit: string ): void {
        if (digit.length === 0 && initStr.length > 0 ) allComp.push(initStr)
        
        let characters: string[] | undefined = keyboardMap.get(digit[0])

        if (characters !== undefined) {
            for (const char of characters) {
                getComb(initStr + '' + char, digit.slice(1, digit.length))
            }
        }
    }

    getComb('', digits)
    return allComp
};