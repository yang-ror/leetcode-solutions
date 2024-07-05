/*
Question:
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
*/

/*
Solution:
Take a string s as input and returns a boolean.

Initialize an object parenthesePair that maps closing brackets to their corresponding opening brackets.

Create an empty array parenthesesStack to act as a stack for tracking opening brackets.

The main loop iterates through each character in the input string:
    If the character is an opening bracket ('(', '[', or '{'), it's pushed onto the stack.
    If the character is a closing bracket:
        It checks if there's a corresponding opening bracket in parenthesePair.
        If the stack is empty or the last opening bracket doesn't match the current closing bracket, return false.
        If there's a match, remove (pops) the last opening bracket from the stack.

After the loop, if there are any remaining opening brackets in the stack, it returns false.

If all checks pass, return true.

Time complexity: O(n)
space complexity: O(n)

Runtime:57ms
Beats:82.28%
*/

//Code
function isValid(s: string): boolean {
    const parenthesePair = {
        ')': '(',
        ']': '[',
        '}': '{',
    }
    const parenthesesStack: string[] = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            parenthesesStack.push(s[i])
            continue
        }

        if (parenthesePair[s[i]]) {
            if(parenthesesStack.length === 0 || parenthesesStack.pop() !== parenthesePair[s[i]])
                return false
        }
    }

    if (parenthesesStack.length > 0)
        return false

    return true
};