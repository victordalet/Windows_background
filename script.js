const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const playBtn = document.querySelector('.circle__btn');
const wave1 = document.querySelector('.circle__back-1');
const wave2 = document.querySelector('.circle__back-2');
const container = document.querySelector('.slider__box');
const btn = document.querySelector('.slider__btn');
const color = document.querySelector('.slider__color');
const tooltip = document.querySelector('.slider__tooltip');

clock = () => {
  let today = new Date();
  let h = (today.getHours() % 12) + today.getMinutes() / 59; // 22 % 12 = 10pm
  let m = today.getMinutes(); 
  let s = today.getSeconds(); 

  h *= 30; 
  m *= 6;
  s *= 6; 

  rotation(hours, h);
  rotation(minutes, m);
  rotation(seconds, s);

  setTimeout(clock, 500);
}

rotation = (target, val) => {
  target.style.transform =  `rotate(${val}deg)`;
}

window.onload = clock();



/******************************************/
playBtn.addEventListener('click', function(e) {
  e.preventDefault();
  pause.classList.toggle('visibility');
  play.classList.toggle('visibility');
  playBtn.classList.toggle('shadow');
  wave1.classList.toggle('paused');
  wave2.classList.toggle('paused');
});