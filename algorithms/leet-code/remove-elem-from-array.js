// given an array remove all instances of a value in place and return the new length
var removeElement = function(nums, val) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] == val) {
            nums.splice(i, 1);
            i--;
            len--;
        }
    }
    return nums.length;
};