/**
 * Created by qianguoqing on 17/3/10.
 */
/*
* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
* */

function toCamelCase(str){
    var ary = str.split(/_|-/);
    var camelAry = [];
    camelAry.push(ary[0]);
    for (var i = 1; i < ary.length; i++) {
        var cur = ary[i];
        camelAry.push(cur[0].toUpperCase() + cur.substr(1));
    }
    return camelAry.join("");
}