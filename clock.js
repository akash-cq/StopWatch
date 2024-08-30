let start=document.querySelector(".start");
let lap=document.querySelector(".lap")
let timer=document.querySelector(".timer")
let list=document.querySelector(".notes")
let startNote=false
let i=0,b=0,m=0,h=0;
let func;
start.addEventListener("click",()=>{
        console.log("start")
        // let i=0;
        startFunc()    
})
lap.addEventListener("click",()=>{
   lapHandle()
})
function startFunc(){
    if(startNote===false){
        func= setInterval(()=>{
            timer.innerHTML=`${h}:${m}:${b}:${i}`;

            if(i>=120){
                 b+=i/120;
                 i%=120
                }
                
                if(b>=60){
                    m+=b/60;
                    b%=60;
                }
                if(m>=60){
                    h+=m/60;
                    m%=60;   

                }
            

            i++;
                startNote=true
        },0.1)
        start.innerHTML="Stop"
        lap.innerHTML="Lap"
        
    }else{
    clearInterval(func)
    start.innerHTML="Start"
    lap.innerHTML="Reset";
    startNote=false;
    }
}
function lapHandle(){
    console.log("lap")
    if(timer.innerHTML==="00:00:00:00"){
       alert("please start the watch");
    }else if(lap.innerHTML==="Reset"){
        console.log("nothing")
        lap.innerHTML="Lap";
        list.innerHTML="";
        i=0,b=0,m=0,h=0;
        timer.innerHTML=`00:00:00:00`
    }
    else{
    list.innerHTML+=`<li>${timer.innerHTML}</li>`
    }
}