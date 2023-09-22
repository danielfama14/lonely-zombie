import Ball from "./Ball.js";

// get the canvas element from the HTML
const canvas = document.getElementById('zombieCanvas');
//Extract the context that is available on the Canvas
const ctx = canvas.getContext('2d');

const ball = new Ball(ctx, 50, 40, 10, 3)


const startButton= document.getElementById("startButton")

startButton.addEventListener("click", ()=>{
    console.log ("hi")
    tick()
})


// global variable to stop animation frame
let myAnimation;

const tick = function() {
    ctx.clearRect(0, 0, 500, 500)
    ball.moveRight();
    myAnimation = requestAnimationFrame(tick)
    if (ball.detectBorder() === true) {
        cancelAnimationFrame(myAnimation)
    }
}

