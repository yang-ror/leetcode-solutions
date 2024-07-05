/*
Question:
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
*/

/*
Solution:
Take an integer n as input, representing the number of pairs of parentheses.
Initialize an empty array allComb to store all valid combinations.
The main logic is in the recursive function makeComb:
    Take three parameters:
        curComb: the current combination being built
        open: the number of remaining open parentheses
        close: the number of remaining close parentheses

    Base case: If both open and close are 0, it means we've used all parentheses, so we add curComb to allComb.
    Recursive cases:
        If there are remaining open parentheses, make a recursive call adding an open parenthesis.
        If there are more close parentheses than open ones remaining, make a recursive call adding a close parenthesis.

The initial call to makeComb is made with an empty string and n for both open and close parentheses.
Finally, return allComb containing all valid combinations.

Time complexity: O(4^n / √n)
space complexity: O(n)

Runtime:62ms
Beats:45.97%
*/

//Code
function generateParenthesis(n: number): string[] {
    const allComb: string[] = []

    function makeComb(curComb: string, open: number, close: number): void {
        if(open === 0 && close === 0) {
            allComb.push(curComb)
        }
        if (open !== 0) {
            makeComb(curComb + '(', open - 1, close)
        }
        if (open < close){
            makeComb(curComb + ')', open, close - 1)
        }
    }

    makeComb('', n, n)

    return allComb
};