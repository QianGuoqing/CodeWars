/**
 * Created by qianguoqing on 17/3/10.
 */
/*
* The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.
* */
function rgb(r, g, b){
    if (r > 255) r = 255;
    if (g > 255) g = 255;
    if (b > 255) b = 255;
    if (r < 0) r = 0;
    if (g < 0) g = 0;
    if (b < 0) b = 0;
    if (r < 10) r = "0" + r;
    if (g < 10) g = "0" + g;
    if (b < 10) b = "0" + b;
    var rStr = r.toString(16).toUpperCase();
    var gStr = g.toString(16).toUpperCase();
    var bStr = b.toString(16).toUpperCase();
    return rStr + gStr + bStr;
}