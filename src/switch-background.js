const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    body: document.querySelector("body"),
    startBtn: document.querySelector("[data-action = start]"),
    stopBtn: document.querySelector("[data-action = stop]"),
};

refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop);

let colorId;

function onStart() {
    colorId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
    }, 1000);
    refs.startBtn.disabled = true;
}

function onStop() {
    clearInterval(colorId);
    refs.startBtn.disabled = false;
}