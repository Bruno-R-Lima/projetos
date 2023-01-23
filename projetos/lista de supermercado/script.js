var itens= [];
var soma=0;

var listaProduto=document.querySelector('.lista-produtos');

document.querySelector('button.ação').addEventListener('click',()=>{
    
    let nomeProduto= document.querySelector('input.input-np').value;
    let nomePreço=document.querySelector('input.input-nv').value;
    
    itens.push({
        nome: nomeProduto,
        valor: nomePreço
    });

    itens.map((val)=>{
        soma+=parseFloat(val.valor);
        listaProduto.innerHTML+=` <div class="lista-produtos-single">
        <h3>${val.nome}</h3>
        <span>${val.valor}</span>
    </div>`;
    })
    
    document.querySelector('.soma-produto h1').innerHTML=` valor total: R$ ${soma.toFixed(2)}`;
    limp();
})

var limpar= document.querySelector('.limpar').addEventListener('click', ()=>{
    itens=[];
    document.querySelector('.lista-produtos').innerHTML="";
    document.querySelector('.soma-produto h1').innerHTML="R$: 0";
    limp();
    
})
function limp(){
    document.querySelector('input.input-np').value="";
    document.querySelector('input.input-nv').value="";
}