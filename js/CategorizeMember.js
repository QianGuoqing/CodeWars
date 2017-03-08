/**
 * Created by qianguoqing on 17/3/8.
 */
/*
* The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

 To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

 Input

 Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
* */

function openOrSenior(data){
    var ary = [];
    for (var i = 0; i < data.length; i++) {
        var cur = data[i];
        if (cur[0] >= 55 && cur[1] > 7) {
            ary[ary.length] = "Senior";
        } else {
            ary[ary.length] = "Open";
        }
    }
    console.log(ary);
    return ary;
}

openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]);