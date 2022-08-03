const btnPlay = document.querySelector(".btn");
let minute1 = document.querySelector(".minute-1");
let minute2 = document.querySelector(".minute-2");
let separator = document.querySelector(".separator");
let seconds1 = document.querySelector(".seconds-1");
let seconds2 = document.querySelector(".seconds-2");
    
let   counterMin1 = 2;
let   counterMin2 = 5;
let   counterSec1 = 5;
let   counterSec2 = 9;
let click = new Audio("sounds/click.wav")

// MODIFICA EL PROGRESO DEL CRONÓMETRO

btnPlay.addEventListener("click",()=>{
    progressBar()
    counterMin2--;
    click.play();
    
    
    setInterval(()=>{
        
        minute1.innerHTML = counterMin1;
        minute2.innerHTML = counterMin2;
        seconds1.innerHTML = counterSec1;
        seconds2.innerHTML = counterSec2;
        counterSec2--

        if(counterSec2 < 0){
            counterSec2 = 9;
        }
 

    },1000)

    setInterval(()=>{
        counterSec1--
        
        if(counterSec1 < 0){
            counterSec1 = 5
        }

    },10000)

    setInterval(()=>{
        counterMin2--;

        if(counterMin2 <0){
            counterMin1--
            counterMin2 = 9;
            if(counterMin1 < 0){
                alert("Time is up")
            }
        }
    },60000)

})

function progressBar(){
let progressBar =document.querySelector(".bar");
let progressCounter = 0;
//progressBar.setAttribute("max",)

    setInterval(()=>{
        progressCounter++;
        progressBar.setAttribute("value",progressCounter)
    },5000)




}



