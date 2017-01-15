var sortColors = function(nums) {
    let result = [];
    let cache = {};

    for (var n of nums) (n in cache) ? cache[n] = cache[n] + 1 : cache[n] = 1;

    function buildResult(n, limit, curr = 0) {
        while (curr < limit) {
            result.push(n);
            curr++
        }
    }

    for (let n of Object.keys(cache)) buildResult(+n, cache[n]);
    
    return result;
    
};