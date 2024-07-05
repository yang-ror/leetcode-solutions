/*
Question:
Given a string s, find the length of the longest substring without repeating characters.
*/

/*
Solution:
Take a string s as input and returns a number.

Initialize two variables:
	longestSubString: to keep track of the length of the longest substring found so far
	curSubString: an array to represent the current substring being considered

The function iterates through each character of the input string:
	It checks if the current character already exists in curSubString
	If it does (i.e., idxOfCurChar !== -1), it removes all characters up to and including the first occurrence of the current character from curSubString
	It then adds the current character to curSubString
	It updates longestSubString if the length of curSubString is greater

Finally, return longestSubString

Time complexity: O(n)
space complexity: O(min(m, n))

Runtime:76ms
Beats:92.59%
*/

//Code
function lengthOfLongestSubstring(s: string): number {
    let longestSubString: number = 0
    let curSubString: string[] = []

    for (let i = 0; i < s.length; i++) {
        const idxOfCurChar = curSubString.indexOf(s[i])
        if (idxOfCurChar !== -1) {
            curSubString.splice(0, idxOfCurChar + 1)
        }
        curSubString.push(s[i])
        longestSubString = Math.max(longestSubString, curSubString.length)
    }
    
    return longestSubString
};