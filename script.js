function add(){
    var num1=document.querySelector("#a").value;
    var num2=document.querySelector("#b").value;

    if(!num2){
        alert("Enter Max-Value First");
        document.querySelector("#a").value="";
    }
    if(num1>num2){
        alert("Input-Value can't be greater than Max-Value");
        document.querySelector("#a").value="";
    }
    if(num1 && num2){
        parseInt(num1);
        parseInt(num2);
        var percent=100-((num1/num2)*100.0);
        var fillTop=document.querySelector(".bar-fill");
        var fill=percent.toString();
        fillTop.style.height=fill+"%";
    }

}