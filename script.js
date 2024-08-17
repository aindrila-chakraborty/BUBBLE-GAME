var timer=60;
var score=0;
var hitrn=0;



function  increaseScore(){
  score +=10;
  document.querySelector("#scoreVal").textContent =score;
}



function makeBubble(){

var clutter="";
for(var i= 1; i<=147;i++){
   rn =Math.floor(Math.random()*10);
  clutter += `<div class="bubble">${rn}</div>`

}
document.querySelector("#pbtm").innerHTML=clutter;
}


function makeTimer(){
  var timerint =setInterval(function(){
    if(timer>0){
    timer--;
    
    document.querySelector("#timerValue").textContent=timer;
    }
    else{
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHtml="";
    }
  },1000);
}

function getNewHit(){
 hitrn=Math.floor(Math.random()*10);
  document.querySelector("#hitVal").textContent=hitrn;
}

document.querySelector("#pbtm").addEventListener("click",function(details){
 var clickednum=(Number(details.target.textContent));
 if(clickednum === hitrn){
  increaseScore();
  makeBubble();
  getNewHit();
 }

});


makeTimer();
makeBubble();
getNewHit();
// increaseScore();