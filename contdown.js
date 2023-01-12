
const days = document.getElementById("dias");
const hours = document.getElementById("horas");
const mins = document.getElementById("minutos");
const seconds = document.getElementById("segundos");

const endBootcamp = '10 Mar 2023 16:00';

function countTimer(){
    const endBootcampDate = new Date(endBootcamp);
    const currentDate = new Date();

    const totalSeconds = (endBootcampDate - currentDate) / 1000;

    const daysCalc = Math.floor(totalSeconds / 3600 / 24);
    const hoursCalc = Math.floor(totalSeconds / 3600) % 24;
    const minsCalc = Math.floor(totalSeconds / 60) % 60;
    const secondsCalc = Math.floor(totalSeconds % 60);
    
    days.innerHTML = daysCalc;
    hours.innerHTML = hoursCalc;
    mins.innerHTML = minsCalc;
    seconds.innerHTML = secondsCalc;
     
}

countTimer();

setInterval(countTimer, 1000);























/*let dias = 61;
let horas = 7;
let minutos = 0;
let segundos = 0;
cargarSegundos();
//definir y ejecutar los segundos

function cargarSegundos(){
    let txtSegundos;
    if(segundos < 0){
        segundos = 59;
    }
    //mostrar los segundos en la pantalla
    if(segundos < 10){
        txtSegundos = `0${segundos}`;
    }else{
       txtSegundos = segundos;
    }
    document.getElementById("segundos").innerHTML = txtSegundos;
    segundos--;
    cargarMinutos(segundos);
}

//definir y ejecutar los minutos

function cargarMinutos(segundos){
let txtMinutos;
if(segundos == -1 && minutos !== 0){
    setTimeout(()=>{
        minutos--;
    },500)
}else if(segundos == -1 && minutos == 0){
setTimeout(()=>{
    minutos = 59;
},500)
}
  

//mostrar minutos en pantalla
  if(minutos < 10){
    txtMinutos = `${minutos}`;
  }else{
    txtMinutos= minutos;
  }
  document.getElementById("minutos").innerHTML= txtMinutos;
  cargarHoras(segundos, minutos);
}

//definimos y ejecutamos las horas

function cargarHoras(segundos, minutos){
  let txtHoras;

  if(segundos == -1 && minutos == 0 && horas !== 0 ){
    setTimeout(()=>{
        horas--;
    },500)
  }else if(segundos == -1 && minutos == 0 && horas == 0){
    setTimeout(()=>{
        horas = 2;
    },500)
  }
  if(horas < 10){
    txtHoras = `0${horas}`;
  }else{
    txtHoras = horas;
  }
  document.getElementById("horas").innerHTML = txtHoras;
  cargarDias(segundos, minutos, horas)
}

function cargarDias(segundos, minutos, horas){
 let txtDias;

 if(segundos == -1 && minutos == 0 && horas == 0 && dias !== 0){
    setTimeout(()=>{
        dias--;
    },500)
 }else if(segundos == -1 && minutos == 0 && horas == 0 && dias == 0){
    setTimeout(()=>{
        dias = 2;
    },500)
 }
 if(dias < 10){
    txtDias = `0${dias}`;
  }else{
    txtDias = dias;
  }
  document.getElementById("dias").innerHTML = txtDias;
}

setInterval(cargarSegundos, 1000);*/