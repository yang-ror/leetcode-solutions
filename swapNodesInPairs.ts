/*
Question:
Given a linked list, swap every two adjacent nodes and return its head. 
You must solve the problem without modifying the values in the list's nodes
(i.e., only nodes themselves may be changed.)
*/

/*
Solution:
Take the head of a linked list as input and returns the new head after swapping.
Initialize:
    newHead: a dummy head node pointing to the original head. This simplifies edge cases.
    curNode: a pointer that will be used to traverse the list and perform swaps.

The main loop continues as long as there are at least two more nodes to swap:
    nodeAfter: stores the reference to the node that comes after the pair being swapped.
    temp: temporarily stores the first node of the pair.
    Perform the swap:
        curNode.next is set to the second node of the pair.
        curNode moves to this second node (which is now the first of the pair).
        The original first node (stored in temp) is attached after it.
        curNode moves to this node.
        then connect this node to nodeAfter.

Finally, return newHead.next, which is the new head of the swapped list.

Time complexity: O(n)
space complexity: O(1)

Runtime:57ms
Beats:56.05%
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

function swapPairs(head: ListNode | null): ListNode | null {
    const newHead: ListNode = new ListNode(0, head)
    let curNode: ListNode = newHead

    while (curNode.next !== null && curNode.next.next !== null) {
        const nodeAfter = curNode.next.next.next
        const temp = curNode.next
        curNode.next = curNode.next.next
        curNode = curNode.next
        curNode.next = temp
        curNode = curNode.next
        curNode.next = nodeAfter
    }
    return newHead.next
};