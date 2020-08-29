/*Given a 32-bit signed integer, reverse digits of an integer.*/


/*
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
   
};*/


//Reverse integer using reduce function

var reverse = function(x) {
    var negative = x<0; 
    if(negative)x=Math.abs(x);

    let y = x.toString().split('');

    y = y.reduce((rev, char)=>
    char + rev, '');
    
    if(y>Math.pow(2,31)) return 0;
    else if(negative) return y*(-1);
    else return y;
}


console.log( reverse(-469));
