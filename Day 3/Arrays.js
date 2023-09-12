/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let n = nums.length;
    nums.sort(function(a, b) {return a - b;});
    while (n>0) {
        if (nums[n-1] < nums[n])
            break;
        n--;
    }
    return nums[n-1];
}