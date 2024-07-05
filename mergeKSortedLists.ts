/*
Question:
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.
*/

/*
Solution:
Takes an array of ListNode objects (or null) as input.
Initialize:
    newHead: a dummy head node for the result list
    curNewNode: a pointer to the current last node in the result list

The main loop continues until all lists are exhausted:
    It initializes minVal as null and minNodeIdx as -1
    It iterates through all lists:
        If a list is empty (null), it skips it
        It finds the minimum value among the first nodes of all non-empty lists
        It keeps track of the index of the list with the minimum value

    If no minimum value is found (all lists are empty), it breaks the loop
    It adds a new node with the minimum value to the result list
    It moves the pointer in the list that provided the minimum value

return newHead.next, which is the head of the merged list

Time complexity: O(N*k)
space complexity: O(1)

Runtime:368ms
Beats:24.40%
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const newHead:ListNode | null = new ListNode(0, null)
    let curNewNode:ListNode | null = newHead
    
    while (true) {
        let minVal: number = null
        let minNodeIdx: number = -1

        for (let i = 0; i < lists.length; i++) {
            if(lists[i] === null) continue
            if (minNodeIdx === -1 || minVal > lists[i].val) {
                minVal = lists[i].val
                minNodeIdx = i
            }
        }
    
        if (minVal === null) break
        curNewNode.next = new ListNode(minVal, null)
        curNewNode = curNewNode.next
        lists[minNodeIdx] = lists[minNodeIdx].next
    }

    return newHead.next
};