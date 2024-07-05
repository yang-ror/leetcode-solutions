/*
Question:
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

/*
Solution:
Take two linked lists (l1 and l2) as input and returns a new linked list representing their sum.
A helper function getVal is defined to safely get the value of a node or return 0 if the node is null.
The function initializes:

result: the head of the result linked list
curNode: a pointer to the current node in the result list
carry: to keep track of carry-over in addition

The main loop continues as long as curNode is not null:

Calculate the sum of current digits from both lists and the carry
Update the carry for the next iteration
Set the value of the current result node to the ones digit of the sum
Move to the next nodes in both input lists
Create a new node in the result list if there are more digits to process or if there's a carry

Finally, return the result linked list.

Time complexity: O(n)
space complexity: O(n)

Runtime:102ms
Beats:91.26%
*/

//Code
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const getVal = (linkedList: ListNode|null) => linkedList ? linkedList.val : 0
    
    let result: ListNode = new ListNode()
    let curNode: ListNode|null = result
    let carry: number = 0

    while (curNode) {
        const sum: number = getVal(l1) + getVal(l2) + carry
        carry = sum >= 10 ? 1 : 0
        curNode.val = parseInt(sum % 10 + '')
  
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null

        curNode.next = (l1 || l2 || carry) ? new ListNode() : null
        curNode = curNode.next ?? null
    }

    return result
}