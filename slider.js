const Slider = document.querySelector('.slides')
const Images = document.querySelectorAll('.slides .slide')

// btn
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
// progress
 var elem = document.getElementById("myBar");
var cover = document.getElementById("myProgress");

//list-text
const listText = document.querySelectorAll('.list-text li');
let counter = 0;
const size = Images[0].clientWidth;
//width for the progress bar
var width = 0;

//for the title
let t1 = document.querySelector('.t1');
let t2 = document.querySelector('.t2');



function Forward(){
    Images[0].style.animation = "changeBgForward 1s 1";
    Images[0].style.animationFillMode = "forwards";
    Images[0].animationTimingFunction = "ease-in-out";
}
function Backward(){
    Images[0].style.animation = "changeBgBackward 1s 1";
    Images[0].style.animationFillMode = "forwards";
    Images[0].animationTimingFunction = "ease-in-out";
}
function titleMove(lag){  
    t1.style.animation = "movingAwayLeft 0.5s 1"
    t1.style.animationFillMode  = "forward"
    t2.style.animation = "movingAwayRight 0.5s 1"
    t2.style.animationFillMode  = "forward"
    t1.addEventListener('animationend',function(){
        t1.style.animation = "comingBackLeft 0.5s 1 "
        t1.style.animationFillMode  = "forward"
    })
     t2.addEventListener('animationend',function(){
        t2.style.animation = "comingBackRight 0.5s 1"
        t2.style.animationFillMode  = "forward"
    })  
}
function movingUp(){
    listText[0].style.animation = "movingUp 1s 1";
    listText[1].style.animation = "movingUp 1.5s 1";
    listText[2].style.animation = "movingUp 1.5s 1";
}

nextBtn.addEventListener('click',()=>{
    width = -10;
    movingUp();
    titleMove();
    if(counter==0){
        Forward();
        counter++;
    }
    else if(counter==1){
        Backward();
        counter--;
    }
    for(var i = 0;i<listText.length;i++){
        listText[i].addEventListener('animationend',function(){
            this.removeAttribute("style");
      })
    }   
    
})
prevBtn.addEventListener('click',()=>{
    width = -10;
    movingUp();
    titleMove();
    if(counter==0){
        Forward();
        counter++;
    }
    else if(counter==1){
        Backward();
        counter--;
    }
   for(var i = 0;i<listText.length;i++){
        listText[i].addEventListener('animationend',function(){
            this.removeAttribute("style");
      })
    }       

})


function move() {
  if (true) {
    var id = setInterval(frame, 200);
    function frame() {
        width+=1;
        elem.style.width =  width+"%";
       if(width>=100){
         elem.style.width = "0px";
         width=-5;
          movingUp();
          titleMove();
        if(counter==0){
            Forward();
            counter++;
        }
        else if(counter==1){
            Backward();
            counter--;
        }
        for(var i = 0;i<listText.length;i++){
            listText[i].addEventListener('animationend',function(){
                this.removeAttribute("style");
            })
        }   
       }    
    }
  }
}
move();

//view-more

let view = document.querySelectorAll(".View-more");
for(var i = 0;i<view.length;i++){
    switch(i){
        case 0:
            view[i].style.background = "#42BC9D"
            break;
        case 1:
            view[i].style.background = "#f88379";
            break;
        case 2:
            view[i].style.background = "#00bfff";
            break;
        case 3:
            view[i].style.background = "#Ffa368";
            break;
        case 4:
            view[i].style.background = "#df73ff";
            break;
        case 5:
            view[i].style.background = "#f88379";
            break;
    }
}
let details = document.querySelectorAll(".details");
let price = document.querySelectorAll(".price-span")
for(var i = 0;i<details.length;i++){
    if(i==0){
        details[i].style.background = "#eee01d";
        price[i].style.background = "#eee01d";
    }
    else if(i==1){
        details[i].style.background="#f88379";
        price[i].style.background="#f88379";
    }
}

let content = document.querySelectorAll(".content-btn");
let contentRight = document.querySelectorAll(".content-right");
let contentP = document.querySelectorAll(".content-right p");
let contentH2 = document.querySelectorAll(".content-right h2");
let contentH1 = document.querySelectorAll(".content-right h1");
for(var i = 0; i<content.length;i++){
    if(i==0){
        content[i].style.background = "#df73ff"
    }
    else if(i==1){  
        content[i].style.background = "white"
        content[i].style.color="#42BC9D"
        contentRight[i].style.background = "#42BC9D";
        contentP[i].style.color = "white";
        contentH2[i].style.color ="white"
        contentH1[i].style.color="white";
    }
    else if(i==2){
        content[i].style.background = "white"
        content[i].style.color="#3ABBD8"
        contentRight[i].style.background = "#3ABBD8";
        contentP[i].style.color = "white";
        contentH2[i].style.color ="white"
        contentH1[i].style.color="white";
    }
    else if(i==3){
           content[i].style.background ="#f88379";
    }
}


// Reveal OnScroll
window.addEventListener('scroll',reveal);


function reveal(){
    var reveals = document.querySelectorAll(".reveal");
    for(var i =  0;i<reveals.length;i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint =150;

        if(revealTop<windowHeight-revealPoint){
            reveals[i].classList.add('active');
        }
        //optional
        else{
            reveals[i].classList.remove('active');
        }
    }
}

//Count Down
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const currentYear = new Date().getFullYear();

const newYearTime  = new Date(`January 1 ${currentYear+1} 00:00:00`);

function updateCountTime(){
    const currentTime = new Date();
    const diff = newYearTime - currentTime;
    
    //get Time And date out of diff
    var d  = Math.floor(diff / 1000 / 60 / 60 / 24);
    var h = Math.floor(diff / 1000 / 60 / 60) % 24;
    var m = Math.floor(diff / 1000 / 60) % 60
    var s = Math.floor(diff / 1000 ) % 60 
    
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m; 
    seconds.innerHTML = s < 10 ? '0' + s : s; 

}
setInterval(updateCountTime,1000);


