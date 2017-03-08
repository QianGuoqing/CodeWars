/**
 * Created by qianguoqing on 17/3/8.
 */
/*
* Given: an array containing hashes of names

 Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
* */

function list(names){
    if (names.length === 0) {
        return '';
    }
    if (names.length === 1) {
        return names[0].name;
    }
    var ary = [];
    for (var i = 0; i < names.length; i++) {
        ary.push(names[i].name);
    }
    var stringNames = ary.join(", ");
    var idx = stringNames.lastIndexOf(',');
    stringNames = stringNames.substring(0, idx);
    return stringNames + ' & ' + ary[ary.length - 1];
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));