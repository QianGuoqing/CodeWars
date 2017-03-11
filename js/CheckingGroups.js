/**
 * Created by qianguoqing on 17/3/11.
 */
/*
*In English and programming, groups can be made using symbols such as "()" and "{}" that change meaning. However, these groups must be closed in the correct order to maintain correct syntax.

 Your job in this kata will be to make a program that checks a string for correct grouping. For instance, the following groups are done correctly:
 ({})
 [[]()]
 [{()}]
* */

function groupCheck(s){
    if (s.length === 0)
        return true;
    var ary = s.split('');
    var stack = [];

    if (ary[0] === ')' || ary[0] === ']' || ary[0] === '}') {
        return false;
    }
    stack.push(ary[0]);
    var index = 0;

    for (var i = 1; i < ary.length; i++) {
        if (ary[i] === '(' || ary[i] === '[' || ary[i] === '{') {
            stack.push(ary[i]);
            index++;
        }
        if (ary[i] === ')') {
            if (stack[index] === '(') {
                stack.pop();
                index--;
            } else
                return false;
        }
        if (ary[i] === ']') {
            if (stack[index] === '[') {
                stack.pop();
                index--;
            } else
                return false;
        }
        if (ary[i] === '}') {
            if (stack[index] === '{') {
                stack.pop();
                index--;
            } else
                return false;
        }
    }
    if (stack.length === 0) {
        return true;
    }
    return false;
}

console.log(groupCheck('()'));
console.log(groupCheck('[[]()]'));