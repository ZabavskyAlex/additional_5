module.exports = function check(str, bracketsConfig) {

    var dict_rev = {};
    var arr_op = [];
    var arr_cl = [];
    var dict_close_open = {};
    var similar = [];
    var stack = [];
    flag = true;

    bracketsConfig.forEach(function (value2) {
        arr_op.push(value2[0].toString());
        arr_cl.push(value2[1].toString());
        dict_rev[value2[0]] = value2[1].toString();
        dict_close_open[value2[1]] = value2[0].toString();
        if(value2[0]==value2[1]){
            similar.push(value2[0]);
        }
    });

    for(var i=0; i<str.length;i++){
        val = str[i];
        flag_p = true;
        if(arr_op.indexOf(val) != -1){
            if (similar!= null && similar.indexOf(val) != -1 && i!=0) {
                if(stack[stack.length - 1] == val){
                    stack.pop();
                }
                else{
                    stack.push(val);
                }
            }
            else {
                stack.push(val);
            }
        }
        else if(arr_cl.indexOf(val) != -1 && i!=0) {
            if(stack[stack.length - 1] == dict_close_open[val] ){
                stack.pop();
            }
            else {
                flag = false;
                break;
            };
        };

    };

    if(stack.length>0){
        flag = false;
    }

    return flag;
};

