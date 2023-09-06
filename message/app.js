function fun(){
    let k=document.getElementById('input');
    if (k.value==''){

    document.getElementById("lamsg").innerHTML='HELLO WORLD';

    document.getElementById('err').style.display="block";
    setTimeout(function(){
            document.getElementById('err').style.display="none";

    },1500)
    }
    else if (k.value!=''){
        document.getElementById('lamsg').innerHTML=k.value;}
    
    else{
    }
}


