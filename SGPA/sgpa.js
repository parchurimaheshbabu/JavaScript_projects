
function gpa(){
var eng=document.getElementById('a1');
var eng1=eng.value*3;

var db=document.getElementById('a2');
var db1=db.value*3;

var fl=document.getElementById('a3');
var fl1=fl.value*3;

var se=document.getElementById('a4');
var se1=se.value*3;

var ang=document.getElementById('a9')
var ang1=ang.value*3;


var dla=document.getElementById('a5');
var dla1=dla.value*(1.5);

var sel=document.getElementById('a6');
var sel1=sel.value*1.5;

var madl=document.getElementById('a7');
var madl1=madl.value*1.5;

var ai=document.getElementById('a8');
var ai1=ai.value*2;

var grades=eng1+db1+fl1+se1+dla1+sel1+madl1+ai1+ang1;
let gp=grades/21.5;

document.getElementById('res').innerHTML=`secured gpa is ${gp}`;
alert(`secured gpa is ${gp}`);

}
