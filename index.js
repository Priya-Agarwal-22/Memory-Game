const cards=document.querySelectorAll('.memory-card');
let hasflippedcard=false;
let first,second;
let lockboard=false;
let score=document.getElementById('score');
score.innerHTML=0;

let min=1;
let sec=30;
let time=document.getElementById('time');


function reset(){
    score.innerHTML=0;
    min=0;
    sec=60;
    cards.forEach(card=>{
        card.classList.remove('flip');
    })
}
function timer(){
    sec-=1;
    if(sec==0){
        min-=1;
        sec=60;
    }
    if(min==-1 && sec==60){
        // clearInterval(myvar);
        alert("YOU LOST!!TIME OVER!!\nYOUR SCORE:"+score.innerHTML)
        reset();
    }
    time.innerHTML=min+" minutes "+sec+" seconds"
}

// let myvar=setInterval(timer,1000);

function flipcard(){
    if(lockboard){
        return;
    }
    if(this===first){
        return;
    }
    this.classList.add('flip');

    if(!hasflippedcard){
        hasflippedcard=true;
        first=this;
        return;
    }

    second=this;
    lockboard=true;

    matchcards();
}

function matchcards(){
    if(first.dataset.food===second.dataset.food){
       
        disablecards();
        score.innerHTML++;

        if(score.innerHTML==10){
            alert("Congratulations!! You won!!");
            reset();
        }
    }else{
    unflipcards();
    }

}
 function disablecards(){
     first.removeEventListener('click',flipcard);
     second.removeEventListener('click',flipcard);

     resetboard();
 }
 function unflipcards(){
     lockboard=true;
     setTimeout(()=>{
         first.classList.remove('flip');
         second.classList.remove('flip');

         resetboard();

     },700);
 }

 function resetboard(){
     [hasflippedcard,lockboard]=[false,false];
     [first,second]=[null,null];
 }

 (function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 30);
      card.style.order = ramdomPos;
    });
  })();

// cards.forEach(card => card.addEventListener('click',flipcard));

function playgame(){
    let myvar=setInterval(timer,1000);
    cards.forEach(card => card.addEventListener('click',flipcard));

}
document.getElementById(play).addEventListener('click',console.log("playyyyyyy"));
