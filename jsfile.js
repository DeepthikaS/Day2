function display(val){
    document.getElementById("dis").value+=val;
}

function calculate(){
    var a=document.getElementById("dis").value;
    var b=eval(a);
    if(b==undefined){
        b=null;
    }
    document.getElementById("dis").value=b;
}
