// remove duplicates from a sorted array in place
// return the length of the new array
var removeDuplicates = function(nums) {
    let p = nums[0];
    let limit = nums.length;
    for (let i = 1; i < limit; i++) {
        if (nums[i] == p) {
            nums.splice(i, 1);
            limit--;
            i--;
            continue;
        } else {
            p = nums[i];
        }
    }
    return nums.length;
};