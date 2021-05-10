var ball = document.getElementById('ball');

var xVelo = 5;
var yVelo = 10;

var ballTop = parseInt(window.getComputedStyle(ball).top);
var ballLeft = parseInt(window.getComputedStyle(ball).left);

function move() {


    ballTop += xVelo;
    ball.style.top = ballTop + xVelo + 'px';

    ballLeft += yVelo;
    ball.style.left = ballLeft + yVelo + 'px';


    if (ballTop < 25 || ballTop > 425) {
        xVelo = xVelo * -1;
    }

    if (ballLeft < 25 || ballLeft > 425) {
        yVelo = yVelo * -1;
    }

    requestAnimationFrame(move);

}

window.requestAnimationFrame(move);