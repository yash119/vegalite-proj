function checkNumber() {
    var x=document.getElementById("no").value;
    if(x<11 && x>0){
        var y=document.getElementById("demo").innerHTML;
        document.getElementById("demo").innerHTML = "lessthan 10";
    }
    else{
    
        document.getElementById("demo").innerHTML = "greterthan 10"
    }
    }