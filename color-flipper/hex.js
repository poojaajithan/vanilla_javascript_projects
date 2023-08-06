const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const button = document.getElementById("btn1");
const color = document.querySelector(".color");

button.addEventListener("click", function(){
    let hexColor = "#";
    for(let i=0;i<6;i++){
        hexColor+=hex[getRandomNumber()];
        console.log("hex : " , hexColor);
    }
    
    document.body.style.background = hexColor;
    color.textContent = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}
