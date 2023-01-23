function carregar(){
    var msg= document.getElementById('msg')
    var img= document.getElementById('img')
    var data= new Date();
    // var horas=data.getHours();
    var horas= 0;
    var min= data.getMinutes();
    var sec=data.getSeconds();
    msg.innerHTML= `horas atual ${horas}:${min}:${sec}`
    if(horas > 4 && horas < 12){
        //bom dia
        document.querySelector('.testo').innerHTML='A rendação vem do arrependimento';
        img.src= "img/clerigo-rpg-removebg-preview.png"
        document.getElementById('container').style.backgroundColor='#B5A642';
    }else if(horas >=12 && horas <= 18){
        //boa tarde
        img.src="img/paladino-rpg.png"
        document.body.style.color= 'yellow';
        document.body.style.backgroundColor= '#9370DB';
        document.getElementById('container').style.backgroundColor='blue';
        // document.getElementById('img').style.backgroundColor='yellow';
        document.querySelector('.testo').innerHTML='A benção vem da força';
    }else{
        //boa noite
        img.src="img/lobisome.rpg.png"
        document.querySelector('.testo').innerHTML='A noite segue o sangue';
        document.body.style.backgroundColor= '#000000';
        document.body.style.color= 'red';
        document.getElementById('container').style.backgroundColor='gray';
        // document.getElementById('img').style.backgroundColor='black';


    }
};
// setInterval(carregar());