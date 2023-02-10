function oddOrEven(){
    var a;
    a=parseInt(document.getElementById("num").value);
    if(a%2==0){
       // document.write("even number");
       document.getElementById("result").innerHTML="Even Number";
    }else{
//document.write("odd number");
document.getElementById("result").innerHTML="Odd Number";
    }
}