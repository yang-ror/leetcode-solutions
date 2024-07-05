/*
Question:
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

/*
Solution:
Take an array of numbers nums as input and return an array of triplets.

Initialize an empty array triplets to store the results.

The input array is sorted in ascending order. This is crucial for the two-pointer technique used later and for avoiding duplicates.

The main loop iterates through the array with index i:
	It skips duplicate values of i to avoid duplicate triplets.
	For each i, it uses two pointers j and k to find pairs that sum to -nums[i].

The inner while loop uses the two-pointer technique:
	starts right after i, and k starts at the end of the array.
	If the sum is too large, it decrements k.
	If the sum is too small, it increments j.
	If the sum is zero, it adds the triplet to the result and moves both pointers.
	Also check for duplicates when adding a triplet.

Finally, return the array of triplets.

Time complexity: O(n^2)
space complexity: O(1)

Runtime:137ms
Beats:98.15%
*/

function threeSum(nums: number[]): number[][] {
    const triplets: [number, number, number][] = []

    nums.sort((a, b) => a - b)

    let i:number = 0

    while (i < nums.length) {
        let j: number = i + 1
        let k: number = nums.length - 1

        if (i > 0 && nums[i] === nums[i-1]) {
            i++
            continue
        }
        
        while (j < k) {
            if (nums[i] + nums[j] + nums[k] > 0) {
                k--
            } else if (nums[i] + nums[j] + nums[k] < 0) {
                j++
            } else {
                if (nums[j] !== nums[j-1] || nums[k] !== nums[k+1]) {
                    triplets.push([nums[i], nums[j], nums[k]])
                }
                j++
                k--
            }
        }

        i++
    }

    return triplets
};