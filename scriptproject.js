let buttons=document.querySelectorAll("button")
console.log(buttons)
let div=document.querySelector(".play")
let computerres=document.querySelector(".computer")
let scoreres=document.querySelector(".scorenumb")
let winnerElement = document.querySelector(".winer"); // Get the <p> element with class "winner"



let buttonImgMap = {
    'Rock': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QAfS5_1j1YH5LIQE6Ujiv8fIOD8Pa-8BXg&s',
    'scissors': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrvtkqUU2CC9otSoCKIeP687oKj4V5hxv7g&s',
    'paper': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMWsuw8I3fOLm425J7Dn5hNd48wOtYHsPMVg&s'
};
let computer = {
    '1': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QAfS5_1j1YH5LIQE6Ujiv8fIOD8Pa-8BXg&s',
     '2': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrvtkqUU2CC9otSoCKIeP687oKj4V5hxv7g&s',
     '3': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMWsuw8I3fOLm425J7Dn5hNd48wOtYHsPMVg&s'
};
buttons.forEach(element => {
    let div2=document.createElement("div")
    let div3=document.createElement("button")
    element.addEventListener("click",function(){
      div.style.display="none"
      let button=document.createElement("button")
      
      let image=document.createElement("img")
      let classnamevalue=element.className

     image.src=buttonImgMap[classnamevalue]
     button.classList.add(`newbutton${classnamevalue}`)
     image.classList.add("newimg")
     div2.classList.add("newdiv")
   
    

     button.appendChild(image)
     div2.appendChild(button)
     computerres.appendChild(div2)
     let rend=Math.floor(Math.random() * (3 -1 + 1)) + 1;
     
     div3.classList.add("z")

 

        let image2=document.createElement("img")
        image2.classList.add("img3")
        image2.src=computer[rend]
        div3.appendChild(image2)
        console.log(rend)
        if(rend===1){
            div3.style.backgroundColor='hsl(228, 45%, 44%)';

        } else if(rend===2){
            div3.style.backgroundColor= 'hsl(39, 89%, 49%)';
        }else{
            div3.style.backgroundColor='hsl(349, 71%, 52%)';

        }

       winner(rend,classnamevalue)
        
        computerres.appendChild(div3)
        console.log(computer[rend])
        setTimeout(() => {
            div2.remove();
            div3.remove();
            button.remove()
            image.remove()
            image2.remove()
            div.style.display = "block";
        winnerElement.textContent = "";

           
        }, 5000);

  
    
    })
    
});
let counter=0
function winner(arg1, arg2) {
    let resultText = ""; // Variable to hold the result message

    if (arg1 === 1 && arg2 === "Rock") {
        resultText = "Draw!";
    } else if (arg1 === 1 && arg2 === "scissors") {
        resultText = "Rock beats scissors. You lose.";
        if(counter===0){
            counter=0
        }else{
            counter--
        }
        
    } else if (arg1 === 1 && arg2 === "paper") {
        resultText = "Paper beats Rock. You win!";
        counter++
    } else if (arg1 === 2 && arg2 === "Rock") {
        resultText = "Rock beats scissors. You win.";
        counter++
    } else if (arg1 === 2 && arg2 === "scissors") {
        resultText = "Draw!";
    } else if (arg1 === 2 && arg2 === "paper") {
        resultText = "Scissors beats paper. You lose.";
        if(counter===0){
            counter=0
        }else{
            counter--
        }
    } else if (arg1 === 3 && arg2 === "Rock") {
        resultText = "Paper beats Rock. You lose.";
        if(counter===0){
            counter=0
        }else{
            counter--
        }
    } else if (arg1 === 3 && arg2 === "scissors") {
        resultText = "Scissors beats paper. You win.";
        counter++
    } else if (arg1 === 3 && arg2 === "paper") {
        resultText = "Draw!";
    }

    if (winnerElement) {
        winnerElement.textContent = resultText;
        scoreres.textContent=""
        scoreres.textContent=counter
 

     // Update the content of the <p> element
    }
}