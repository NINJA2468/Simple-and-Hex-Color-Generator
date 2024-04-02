const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // Get random number between 0 and 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    // Set background color of body
    document.body.style.backgroundColor = colors[randomNumber];

    // Set text content of .color element
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
