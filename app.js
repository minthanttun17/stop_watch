const startBtn = document.querySelector(".startBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const continueBtn = document.querySelector(".continueBtn");
const resetBtn = document.querySelector(".resetBtn");
const restartBtn = document.querySelector(".restartBtn");
const stopWatch = document.querySelector(".stopwatch")




let miliseconds = 0, seconds = 0, minutes = 0, hours = 0;

const textFormat = (miliseconds, seconds, minutes, hours) => {
    const milisecondText = miliseconds < 10 ? "0" + miliseconds.toString() : miliseconds;
    const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
    const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const hourText = hours < 10 ? "0" + hours.toString() : hours;
    
    stopWatch.textContent = hourText + ":" + minuteText + ":" + secondText + "." + milisecondText
}


let start = false;
let pause = false;
const showBtns = () => {
    if(start){
        pauseBtn.classList.remove("removed");
        startBtn.classList.add("removed");
        resetBtn.classList.remove("removed");
        restartBtn.classList.remove("removed");
    } else {
        pauseBtn.classList.add("removed");
        startBtn.classList.remove("removed");
        resetBtn.classList.add("removed");
        restartBtn.classList.add("removed");
    }


    if(pause){
        continueBtn.classList.remove("removed");
        pauseBtn.classList.add("removed")
    } else {
        continueBtn.classList.add("removed")
    }
}

const startTimer = () =>{
    miliseconds += 1;
    if (miliseconds === 100) {
        miliseconds = 0;
        seconds += 1;
    }
    if(seconds === 60){
        seconds = 0;
        minutes += 1;
    }
    if(minutes === 60){
        minutes = 0
        hours += 1
    }

    textFormat(miliseconds, seconds, minutes, hours);
    // console.log(hours, minutes, seconds, miliseconds);
}

let running;
startBtn.addEventListener("click", ()=>{
    running = setInterval(startTimer, 10);

    //show btn
    start = true;
    showBtns()
});

pauseBtn.addEventListener("click", ()=>{
    clearInterval(running);
    pause = true;
    showBtns()
});

continueBtn.addEventListener("click", () =>{
    running = setInterval(startTimer, 10);
    pause = false;
    showBtns()
});

restartBtn.addEventListener("click", () => {
    clearInterval(running);
    miliseconds = 0, seconds = 0,  minutes = 0, hours = 0
    textFormat(miliseconds, seconds, minutes, hours);
    running = setInterval(startTimer, 10);
    pause = false;
    showBtns()
})

resetBtn.addEventListener("click", ()=>{
    clearInterval(running);
    miliseconds = 0, seconds = 0,  minutes = 0, hours = 0
    textFormat(miliseconds, seconds, minutes, hours);
    pause = false;
    start = false;
    showBtns()
})