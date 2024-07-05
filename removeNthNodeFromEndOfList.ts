/*
Question:
Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/

/*
Solution:
Take two parameters:
    head: the head of the linked list (or null if the list is empty)
	n: the position from the end of the node to be removed

Initialize:
	target: set to -n, which will be used to find the node to remove
	newHead: a new node added before the actual head, which simplifies edge cases (like removing the first node)
	currentNode: starts at newHead and will traverse the entire list
	targetNode: also starts at newHead, but will end up at the node just before the one to be removed

The main loop traverses the list:
	Move currentNode to the end of the list
	Once target becomes positive, it starts moving targetNode
	This ensures that targetNode ends up n+1 nodes before the end

After the loop, targetNode is at the node just before the one to be removed. Update the next pointer to skip the node to be removed.

Finally, return newHead.next, which is the original head of the list.

Time complexity: O(n)
space complexity: O(1)

Runtime:60ms
Beats:65.30%
*/

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let target: number = 0 - n
    let newHead: ListNode = new ListNode(0, head)
    let currentNode: ListNode = newHead
    let targetNode: ListNode = newHead

    while (currentNode !== null ) {
        if (target > 0) targetNode = targetNode.next
        currentNode = currentNode.next
        target++
    }

    targetNode.next = targetNode.next.next

    return newHead.next
};