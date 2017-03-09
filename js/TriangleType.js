/**
 * Created by qianguoqing on 17/3/9.
 */
/*
* In this kata, you should calculate type of triangle with three given sides a, b and c (given in any order).

 If all angles are less than 90°, this triangle is acute and function should return 1.

 If one angle is strictly 90°, this triangle is right and function should return 2.

 If one angle more than 90°, this triangle is obtuse and function should return 3.

 If three sides cannot form triangle, or one angle is 180° (which turns triangle into segment) - function should return 0.

 Input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both).
* */

function triangleType(a, b, c){
    var ary = [a, b, c];
    ary.sort(function (a, b) {
        return a - b;
    });
    if (ary[0] * ary[0] + ary[1] * ary[1] > ary[2] * ary[2])
        return 1;
    if (ary[0] * ary[0] + ary[1] * ary[1] === ary[2] * ary[2])
        return 2;
    if (ary[0] * ary[0] + ary[1] * ary[1] < ary[2] * ary[2])
        return 3;
    if (!((ary[0] + ary[1] > ary[2]) && (ary[2] - ary[0] < ary[1])))
        return 0;
}
