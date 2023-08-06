const colors = ["green", "red", "rgba(133,122,200)","#f15025"];
const button = document.getElementById("btn1");
const color = document.querySelector(".color");

button.addEventListener("click", function(){
    const randomNum = getRandomNumber();
    document.body.style.background = colors[randomNum];
    color.textContent = colors[randomNum];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}