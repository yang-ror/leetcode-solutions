/*
Question:
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
*/

/*
Solution:
Take two sorted arrays nums1 and nums2 as input.

Calculate:
	totalLength: the combined length of both arrays
	posOfMedium: the position of the median
	isOddLength: whether the total length is odd or even

Initialize variables:
	pos: to keep track of the current position while merging arrays
	idxOfNums1 and idxOfNums2: indices for nums1 and nums2
	prevValue and currValue: to store the last two values encountered

The main loop merges the two arrays until it reaches the median position:
	It compares elements from both arrays and selects the smaller one
	If one array is exhausted, it takes elements from the other
	It updates currValue and prevValue accordingly

Finally, return:
	For odd-length total: the currValue
	For even-length total: the average of currValue and prevValue

Time complexity: O(m+n)
space complexity: O(1)

Runtime:101ms
Beats:60.61%
*/

//Code
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const totalLength: number = nums1.length + nums2.length

    let posOfMedium: number = totalLength / 2
    const isOddLength: boolean = posOfMedium % 1 !== 0

    posOfMedium = Math.floor(posOfMedium)

    let pos: number = 0
    let idxOfNums1: number = 0
    let idxOfNums2: number = 0

    let prevValue: number = 0
    let currValue: number = 0

    function setCurrValue(num: number) {
        prevValue = currValue
        currValue = num
    }

    while (pos <= posOfMedium) {
        if(nums1.length === idxOfNums1) {
            setCurrValue(nums2[idxOfNums2])
            idxOfNums2++
        } else if(nums2.length === idxOfNums2) {
            setCurrValue(nums1[idxOfNums1])
            idxOfNums1++
        } else if(nums1[idxOfNums1] < nums2[idxOfNums2]) {
            setCurrValue(nums1[idxOfNums1])
            idxOfNums1++
        } else {
            setCurrValue(nums2[idxOfNums2])
            idxOfNums2++
        }
        pos++
    }

    return isOddLength ? currValue : (currValue + prevValue) / 2
};