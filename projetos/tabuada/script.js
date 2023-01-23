function gerar(){
    var saida=document.getElementById('saida');
    var entrada=document.getElementById('entrada');
    var en= Number(entrada.value);
    if(en <= 0){
        alert('[HERRO!] digite um número para gerar a tabuada');
    }else{
        sai.innerHTML= "";
        for(let i=1; i <= 10; i++){
            // saida.innerHTML+= `${en} x ${i} = ${en*i} <br>`;
            const select = document.querySelector('#sai');
            select.options[select.options.length] = new Option(`${en} x ${i} = ${en*i}`);
        }

    }
};