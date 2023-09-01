let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".computer");
let triangle = document.querySelector(".triangle");
let user = document.querySelector(".user");
let machine = document.querySelector(".machine");
let win_modal = document.querySelector(".win-modal");
let winner = document.querySelector(".winner");
let play = document.querySelector(".play");
let score = JSON.parse(localStorage.getItem("score"));
let point = document.getElementById("point");
let cscore = JSON.parse(localStorage.getItem("cscore"));
let cpoint = document.getElementById("cpoint");
let close = document.getElementById("closed");
let popup = document.getElementById("myPopup");
let count = 0;
let ccount = 0;
let random = Math.floor(Math.random()*3);

if(score)
{
    point.innerText = score;
}
if(cscore)
{
    cpoint.innerText = cscore;
}

con.forEach((element,index) =>
{
    element.addEventListener("click",()=>{
        user.style.opacity = "1";
        triangle.style.display = "none";
        con.forEach(item =>
        {
            item.style.display = "none";
        });
        element.style.display = "block";
        element.classList.add("show");

        setTimeout(() =>{
            machine.style.opacity = "1";
            setTimeout(() =>{
                computer[random].style.display = "block";
                computer[random].classList.add("right");
            },150);

            setTimeout(() =>{
                if(index==0 && random ==1 || index==1 && random == 2|| index == 2 && random == 0)
                {
                    win_modal.style.display = "grid";
                    winner.innerText = "YOU WIN \n AGAINST PC";
                    count = score;
                    count++;
                    point.innerText = count;
                    localStorage.setItem("score",JSON.stringify(count));
                    let next = document.querySelector(".next");
                    next.style.display="grid"
                }
                else if(random == index)
                {
                    win_modal.style.display = "grid";
                    winner.innerText = "TIE UP";
                    play.innerHTML = 'REPLAY';
                }
                else
                {
                    win_modal.style.display = "grid";
                    winner.innerText = "YOU LOST \n AGAINST PC";
                    ccount = cscore;
                    ccount++;
                    cpoint.innerText = ccount;
                    localStorage.setItem("cscore",JSON.stringify(ccount));
                }
            },800);
            
        },200);
    });
});

play.addEventListener("click",() =>{
    window.location.reload();
});

close.addEventListener("click",() =>{
    popup.style.display="none";
})

function myFunction() {
    if(popup.style.display ="none"){
      popup.style.display="grid";
    } 
}

function next() {
    window.location="index1.html";
}


