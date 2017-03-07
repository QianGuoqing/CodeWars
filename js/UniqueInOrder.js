/**
 * Created by qianguoqing on 17/3/7.
 */
/*
 * Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
 * */

var uniqueInOrder = function (iterable) {
    var ary = iterable.split("");
    var obj = {};
    for (var i = 0; i < ary.length; i++) {
        var cur = ary[i];
        if (obj[cur] === cur) {
            ary[i] = ary[ary.length - 1];
            ary.length--;
            i--;
            continue;
        }
        obj[cur] = cur;
    }
    obj = null;
    return ary;
}

