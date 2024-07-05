/*
Question:
You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
*/

/*
Solution:
Take an array of integers height as input and returns a number (the maximum area).
Initialize:
	max: to store the maximum area found
	left: a pointer starting from the leftmost line (index 0)
	right: a pointer starting from the rightmost line (last index)

The main loop continues while left is less than right:
	Calculate the current area:
	The width is the difference between the two pointers (right - left)
	The height is the minimum of the two line heights (Math.min(height[left], height[right]))
	The area is width * height

If this area is greater than the current max, it updates max.
It then moves the pointer that points to the shorter line:
	If the left line is shorter, it increments left
	Otherwise, it decrements right

Return max


Time complexity: O(n)
space complexity: O(1)

Runtime:81ms
Beats:20.56%
*/

function maxArea(height: number[]): number {
    let max: number = 0
    let left: number = 0
    let right: number = height.length - 1

    while (left < right) {
        const area: number = Math.min(height[left], height[right]) * (right - left)
        if (area > max) {
            max = area
        }
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return max
};