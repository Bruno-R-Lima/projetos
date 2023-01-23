var sec=0;
var min=0;
var hr=0;
var pauseint;

function singre(numero){
    if(numero < 10){
        return( '0'+ numero);
    }else{
        return(numero);
    };
};

function start(){
   pauseint= setInterval(time,1000)
};

function pause(){
    clearInterval(pauseint);
};

function parrar(){
    clearInterval(pauseint);
    sec=0;
    min=0;
    hr=0;
    document.getElementById('crono').innerText='00:00:00'
};

function time(){
    sec++
    if(sec == 60){
        min++
        sec=0;
    }else if(min == 60){
        hr++
        min=0;
    }
    document.getElementById('crono').innerText= singre(hr)+':'+singre( min) +':'+ singre(sec);
};