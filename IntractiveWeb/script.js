const greeting = document.getElementById("greeting");
const clock = document.getElementById("clock");
const date = document.getElementById("date");

function updateDateTime(){
    const now = new Date();

    clock.textContent=now.toLocaleTimeString();

    date.textContent = now.toDateString();

    const hour = now.getHours();
    if(hour<12){
       greeting.innerHTML="Good Morning🌞"; 
    }

    else if(hour<17){
        greeting.innerHTML="Good Afternoon🌓";
    }

    else{
        greeting.innerHTML="Good Evening🌚";
    }
}

updateDateTime();
setInterval(updateDateTime,1000);

const darkBtn = document.getElementById("darkMode");
darkBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        darkBtn.innerHTML="Light Mode";
    }

    else{
        darkBtn.innerHTML="Dark Mode";
    }
});


const quotes = [
    "Push yourself because no one else will do it for you.",
    "Success begins with self discipline.",
    "Study now,shine later.",
    "Dream big.Work hard.Stay focused.",
    "Consistency beats motivation.",
    "Small progress is still progress.",
    "Every expert was once a beginner.",
    "One page today is one chapter tomorrow.",
    "your future is created by today's efforts.",
    "Never stop learning."
];

const quote=document.getElementById("quote");
const newQuote=document.getElementById("newQuote");

newQuote.addEventListener("click", () => {
    let random=Math.floor(Math.random() * quotes.length);
    quote.textContent =quotes [random];
});

const purple=document.querySelector(".purple");
const blue=document.querySelector(".blue");
const green=document.querySelector(".green");
const orange=document.querySelector(".orange");

purple.addEventListener("click",()=>{
    document.body.style.background="linear-gradient(135deg,#7C3AED,#9333EA)";
});

blue.addEventListener("click",()=>{
    document.body.style.background="linear-gradient(135deg,#2563EB,#38BDF8)";
});

green.addEventListener("click",()=>{
    document.body.style.background="linear-gradient(135deg,#10B981,#22C55E)";
});

orange.addEventListener("click",()=>{
    document.body.style.background="linear-gradient(135deg,#F97316,#FB923C)";
});

const moods=document.querySelectorAll(".moods button");
moods.forEach((button)=>{
    button.addEventListener("click", () => {
        alert("Mood saved:"+button.innerHTML);
    });
});

let time = 1500;
let timer;
const timerDisplay=document.getElementById("timer");
const startBtn=document.getElementById("startBtn");
const pauseBtn=document.getElementById("pauseBtn");
const resetBtn=document.getElementById("resetBtn");

function updateTimer(){
    let minutes=Math.floor(time/60);
    let seconds=time%60;
    timerDisplay.textContent =
    `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`
}

updateTimer();
startBtn.addEventListener("click",()=>{
    clearInterval(timer);
    timer=setInterval(()=>{
        if(time > 0){
            time--;
            updateTimer();
         }
         else{
            clearInterval(timer);
            alert("Time's Up!\nTake a 5Minutes break.");
         }
    }, 1000);
});

pauseBtn.addEventListener("click",()=>{
    clearInterval(timer);
});

resetBtn.addEventListener("click",()=>{
    clearInterval(timer);
    time=1500;
    updateTimer();
});


const cards=document.querySelectorAll(".card");
cards.forEach((card)=>{
    card.addEventListener("mouseenter",()=>{
        card.style.transform="translateY(-10px)scale(1.02)";
    });
    card.addEventListener("mouseleave",()=>{
        card.style.transform="translateY(0px)";
    });
    });

    const task=document.getElementById("tasks");
    const hours=document.getElementById("hours");
    let taskCount=0;
    let hourCount=0;
    const taskTarget=18;
    const hourTarget=42;
    const counter=setInterval(()=>{
        if(taskCount<taskTarget){
            taskCount++;
            task.innerHTML=taskCount;
        }
        if(hourCount<hourTarget){
            hourCount++;
            hours.innerHTML = hourCount + "hrs";
        }
        if(taskCount>=taskTarget&&hourCount>=hourTarget){
            clearInterval(counter);
        }
    },80);

    console.log("StudySphere Loaded Successfully");
