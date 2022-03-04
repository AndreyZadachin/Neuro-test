import './pages/index.css';

const playbtn = document.querySelector('.play');
const video = document.querySelector('.video');

playbtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

function settime() {
  if (video.play()) {
    setInterval(function () {
      document.querySelector('.time').innerHTML = video.currentTime;
    }, 1000);
  }
}

settime();
