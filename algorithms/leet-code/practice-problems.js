
// Two Sum: quadratic time
var twoSum = function(nums, target) {
    if (!Array.isArray(R) || R.length == 0) return null;
    let result = [];
    for (let a = 0; a < nums.length; a++) {
        result[0] = a;
        for (let b = a + 1; b < nums.length; b++) {
            if (nums[a] + nums[b] == target) {
                result[1] = b;
                return result;
            }
        }
    }
    return [-1];
};
// Two Sum: linear time
function twoSum2(R, target) {
    if (!Array.isArray(R) || R.length == 0) return null;
  let ans = [-1];
    let store = new Map();
    R.forEach((v, i) => {
        store.set(v, i);
        let diff = target - v;
        if (store.has(diff)) ans = [store.get(diff), i];
    });
    return ans;
};
// tests:
console.assert(twoSum2([2,7,11,15], 9).join('') == '01', 'The function returns the correct answer.');
console.assert(twoSum2([5,5], 7), [-1], 'The function returns [-1] if the sum can\'t be achieved.');
console.assert(twoSum2([], 10) == null, 'The function returns null when passed an empty array.');
console.assert(twoSum2({}, 10) == null, 'The function returns null when not passed an array.');
