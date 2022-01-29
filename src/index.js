const playPauseButton = document.querySelector('button');
const audio = document.querySelector('#my_audio');

let playing = false;

function handleToggle() {
  if (!playing) {
    audio.play();
    playPauseButton.setAttribute('class', 'playing');
    playing = true;
  } else {
    audio.pause();
    audio.currentTime = 0;
    playPauseButton.removeAttribute('class', 'playing');
    playing = false;
  }
}

playPauseButton.addEventListener('click', handleToggle);
