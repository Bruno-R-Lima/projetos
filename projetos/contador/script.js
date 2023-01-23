const n1=document.getElementById('n1');
const n2=document.getElementById('n2');
const passos=document.getElementById('passo');
const resultado=document.getElementById('resultado');

function contar(){
resultado.innerHTML="";

if(n1.value == 0 || n2.value == 0  || passos.value == 0){
    alert('{HERRO!} preencha todos os campos!!!');
}else{
    let i= Number(n1.value)
    let f= Number(n2.value)
    let p= Number(passos.value)

    for(let c=i; c <= f; c+= p)
    resultado.innerHTML+='👉'+`${c}` ;

   }
};

function limpar(){
    
    resultado.innerHTML="";
    n1.value= "";
    n2.value= "";
    passos.value="";
    
};