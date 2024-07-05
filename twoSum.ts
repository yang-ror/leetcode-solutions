/*
Question:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

/*
Solution:
Take two parameters:
    nums: an array of numbers
    target: the target sum we're looking for

It initializes a Map called diffs to store the differences between the target and each number, along with their indices.
The function starts by setting the difference for the first element (index 0) in the Map.
It then iterates through the array starting from the second element (index 1):
    For each number, it checks if its complement (the number that would sum up to the target) exists in the diffs Map.
    If found, it returns the indices of the current number and its complement.
    If not found, it adds the current number's difference from the target to the Map, along with its index.

If no solution is found after the loop, return an empty array.

Time complexity: O(n)
space complexity: O(n)

Runtime:54ms
Beats:94.39%
*/

//Code
function twoSum(nums: number[], target: number): number[] {
    const diffs = new Map<number, number>()
    diffs.set(target - nums[0], 0)
    
    for (let i = 1; i < nums.length; i++) {
        const indexOfDiff = diffs.get(nums[i])
        if (indexOfDiff !== undefined){
            return [indexOfDiff, i]
        }
        diffs.set(target - nums[i], i)
    }
    return []
};