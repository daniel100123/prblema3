let boton=document.getElementById('boton');

let res=document.getElementById('res');
boton.addEventListener('click',dividir);

function dividir(){

let n1=parseFloat(document.getElementById('n1').value);
let n2=parseFloat(document.getElementById('n2').value);
let r=n1/n2;

res.innerHTML=`la divicion es ${r}`;



}




