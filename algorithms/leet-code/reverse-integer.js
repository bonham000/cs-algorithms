// reverse the integers in an integer input
var reverse = function(x) {
    let sign = false;
    x = x.toString();
    if (x[0] === '-') {
        sign = true;
        x = x.toString().slice(1);
    };
    let ans = x.split('').reverse().join('');
    return (sign) ? Number(ans) * -1 : Number(ans);
};