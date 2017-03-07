/**
 * Created by qianguoqing on 17/3/7.
 */
/*
* Task

 Given an integral number, determine if it's a square number:

 In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
 The tests will always use some integral number, so don't worry about that in dynamic typed languages.
* */

var isSquare = function (n) {
    if (typeof n !== 'number') {
        console.log("Error input!");
        return;
    }
    if (n < 0) {
        console.log('Negative numbers cannot be square numbers');
        return;
    }
    if (n === 0 || n === 1) {
        return true;
    }
    for (var i = 1; i <= n / 2; i++) {
        if (i * i === n) {
            return true;
        }
    }
    return false;
}

console.log(isSquare(-1));