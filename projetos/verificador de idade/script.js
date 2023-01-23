function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('anoNascimento');
    var result=document.getElementById('result');
    var idade = ano - Number(fano.value); // Converte fano.value para um número antes da subtração
    var res = document.getElementById('result')
    if(fano.value == 0 || fano.value > ano){
    alert('[erro!] por favor verifique as informações novamente');
   
    }else{
        var sex=document.getElementsByName('sexo');
        var genero='';
        var img=document.createElement('img');
        img.setAttribute('id', 'foto');

        if(sex[0].checked){
            genero= 'homem';
            if(idade <= 10){
                //crinça
                genero='criança'
                result.innerHTML=` Detectamos uma ${genero} com idade de ${idade} anos`;
                img.setAttribute('src','imagem/menino.jpg');
                
            }else if(idade <= 21){
                //jovem
                genero='jovem'
                result.innerHTML=` Detectamos um ${genero} com idade de ${idade} anos`;
                img.setAttribute('src','imagem/rapaz.jpg');
                
            }else if(idade <= 51){
                //adulto
                genero='adulto'
                result.innerHTML=` Detectamos um ${genero} com idade de ${idade} anos`;
                
                img.setAttribute('src','imagem/homem.webp');
            }else{
                //idosol
                genero='idoso'
                result.innerHTML=` Detectamos um ${genero} com idade de ${idade} anos`;
               
                img.setAttribute('src','imagem/idoso.jpg');
            };
        }else{
            genero= 'mulher';
            if(idade <= 10){
                //crinça
                genero='criança'
                result.innerHTML=` Detectamos uma ${genero} com idade de ${idade} anos`;
                img.setAttribute('src','imagem/menina.jpg')
            }else if(idade <= 21){
                //jovem
                genero='jovem'
                result.innerHTML=` Detectamos uma ${genero} com idade de ${idade} anos`;
                img.setAttribute('src','imagem/moça.webp')
            }else if(idade <= 51){
                //adulto
                genero='mulher'
                result.innerHTML=` Detectamos uma ${genero} com idade de ${idade} anos`;
                img.setAttribute('src','imagem/mulher.jpg')
            }else{
                //idosol
                genero='idoso'
                result.innerHTML=` Detectamos uma ${genero} com idade de ${idade} anos`;
                img.setAttribute('src','imagem/idosa.jpg')
            };
        }
        result.style.textAlign='center';
        result.appendChild(img);
        
    }
   };
   