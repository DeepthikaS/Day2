console.log("Swapping two numbers");
console.log("-------------------------");
console.log("Pass by value:");
function pass_by_value(a,b){
    let temp=a;
    a=b;
    b=temp;
    console.log("Inside pass by value function => a="+a+", b="+b);
}

var a=3;
var b=8;
console.log("Before calling pass by value function=> a="+a+", b="+b);
pass_by_value(a,b);
console.log("After calling pass by value function=>a="+a+", b="+b);

console.log("-------------------------");
console.log("Pass by reference:");
function pass_by_reference(obj){
    temp=obj.a;
    obj.a=obj.b;
    obj.b=temp;
    console.log("Inside pass by reference function => a="+obj.a+", b="+obj.b);
}

var obj={a:3,b:8};
console.log("Before calling pass by reference function=> a="+obj.a+", b="+obj.b);
pass_by_reference(obj);
console.log("After calling pass by reference function=>a="+obj.a+", b="+obj.b);
