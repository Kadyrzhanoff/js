function checkEmail() {
    let input = document.getElementById('gmail_input');
    let resultSpan = document.getElementById('gmail_result');
    let regex = /@gmail\.com$/;
  
    if (regex.test(input.value)) {
      resultSpan.textContent = 'Correct email';
    } else {
      resultSpan.textContent = 'Incorrect email';
    }
  }

function moveElement() {
    const childBlock = document.getElementById('animatedBlock');
    const parentBlock = document.querySelector('.parent_block');
    const parentWidth = parentBlock.offsetWidth;
    const parentHeight = parentBlock.offsetHeight;
    const childWidth = childBlock.offsetWidth;
    const childHeight = childBlock.offsetHeight;

    let top = (parentHeight - childHeight) / 2; // начальное положение top для центрирования блока
    let left = (parentWidth - childWidth) / 2; // начальное положение left для центрирования блока

    const moveInterval = setInterval(() => {
        if (left + childWidth < parentWidth) {
            left += 5;
        } else if (top + childHeight < parentHeight) {
            top += 5;
        } else {
            clearInterval(moveInterval); // остановка движения блока
        }

        childBlock.style.top = top + 'px';
        childBlock.style.left = left + 'px';
    }, 30);
}

moveElement();

let timer;
let startTime;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startTime = new Date().getTime();
        timer = setInterval(updateTimer, 10);
    }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
}

function resetTimer() {
    stopTimer();
    document.getElementById('timer').innerHTML = '0:000';
}

function updateTimer() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;

    const seconds = Math.floor(elapsedTime / 1000);
    const milliseconds = elapsedTime % 1000;

    const timerDisplay = `${seconds}:${String(milliseconds).padStart(3, '0')}`;
    document.getElementById('timer').innerHTML = timerDisplay;
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
