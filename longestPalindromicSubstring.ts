/*
Question:
Given a string s, return the longest palindromic substring in s.
*/

/*
Solution:
Take a string s as input and returns a string (the longest palindrome).
Initialize maxLengthPld with the first character of the string, assuming at least one character exists.
The main loop iterates through each character of the string starting from the second character:

For each character, consider it as the center of a potential palindrome.
Initialize curPld with the current character.
Set left and right pointers to check characters on both sides.


The inner while loop expands the palindrome in both directions:

First check for consecutive identical characters to the left and right of the center.
Then check for matching characters on both sides, expanding the palindrome.
Update maxLengthPld whenever a longer palindrome is found.


The loop continues until it can't expand further in either direction.
Finally, Return maxLengthPld

Time complexity: O(n^2)
space complexity: O(1)

Runtime:125ms
Beats:46.90%
*/

function longestPalindrome(s: string): string {
    let maxLengthPld: string = s[0]

    for (let i = 1; i < s.length; i++) {
        let curPld:string = s[i]

        let left:number = i - 1
        let right:number = i + 1

        let leftChkDone:boolean = left === -1
        let rightChkDone:boolean = right === s.length

        while (true) {
            if(!leftChkDone){
                if (left >= 0 && s[left] === s[i]) {
                    curPld = s[left] + '' + curPld
                    left--
                } else {
                    leftChkDone = true
                }
            }

            if(!rightChkDone){
                if (right <= s.length - 1 && s[right] === s[i]) {
                    curPld = curPld + '' + s[right]
                    right++
                } else {
                    rightChkDone = true
                }
            }

            if(curPld.length > maxLengthPld.length) maxLengthPld = curPld

            if (leftChkDone && rightChkDone) {
                if (left < 0 || right === s.length)
                    break

                if (s[left] === s[right]) {
                    curPld = s[left] + '' + curPld + '' + s[right]
                    if(curPld.length > maxLengthPld.length) maxLengthPld = curPld
                    left--
                    right++
                } else {
                    break
                }
            }
        }
    }
    return maxLengthPld
};