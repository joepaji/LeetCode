/*Given a 32-bit signed integer, reverse digits of an integer.*/

var reverse = function(x) {

    let y;
    
    if(x<0){
        y = x.toString().split('').reverse();
        y.unshift('-');
        y.pop();
        y = parseInt(y.join(''));       
        if(y<Math.pow(-2,31)) return 0;
    }

    else{
        y = x.toString().split('').reverse();
        y = parseInt(y.join(''));
        if(y>Math.pow(2,31)) return 0;
    }

    return y;
   
};

console.log(Math.pow(2,31));
console.log( reverse(1534236469));
