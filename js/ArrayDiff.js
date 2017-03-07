/**
 * Created by qianguoqing on 17/3/7.
 */
/*
* Your goal in this kata is to implement an difference function, which subtracts one list from another.

 It should remove all values from list a, which are present in list b.
* */

function array_diff(a, b) {
    // var aLen = a.length;
    // var bLen = b.length;

    if (typeof a.length === 'undefined' || typeof b.length === 'undefined') {
        return;
    }

    for (var i = 0; i < a.length; i++) {
        var cur = a[i];
        for (var j = 0; j < b.length; j++) {
            if (cur === b[j]) {
                a.splice(i, 1);
                i--;
            }
        }
    }
    console.log(a);
}

array_diff([1,2,2,2,3], [2]);