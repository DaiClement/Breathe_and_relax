// https://www.youtube.com/watch?v=l-1ZrU6avzI
// Traversy Media
const container = document.getElementsByClassName('container')[0];
const test = document.getElementById('text');
const start = document.getElementsByClassName('start')[0];
const pointer = document.getElementsByClassName('pointer-container')[0];

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
var refreshInterval;
var breatheAnimationInterval;

function breatheAnimation() {
    text.innerHTML = 'Breath in!';
    container.className = 'container grow';
    breatheAnimationInterval = setTimeout(() => {
        text.innerText = 'Hold';
        breatheAnimationInterval = setTimeout(() => {
            text.innerText = 'Breathe Out!';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

function stopAnimation() {
    start.addEventListener('click', startAnimation);
    start.removeEventListener('click', stopAnimation);
    start.innerHTML = 'Start';
    pointer.className = 'pointer-container';
    // pointer.classList.remove('started');
    text.innerHTML = 'Breath in!';
    container.className = 'container';
    clearInterval(refreshInterval);
    clearInterval(breatheAnimationInterval);
}

function startAnimation() {
    start.addEventListener('click', stopAnimation);
    start.removeEventListener('click', startAnimation);
    start.innerHTML = 'Stop';
    pointer.className = 'pointer-container started';
    breatheAnimation();
    refreshInterval = setInterval(breatheAnimation, totalTime);
}

start.addEventListener('click', startAnimation);
start.removeEventListener('click', stopAnimation);
