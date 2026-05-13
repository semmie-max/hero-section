const videoFiles = ['fun.mp4', 'bumbum.mp4', 'zino.mp4'];
const folderPath = 'video/';

const videoElement = document.getElementById('hero-video');
const soundToggle = document.getElementById('sound-toggle');
const soundIcon = document.getElementById('sound-icon');

document.addEventListener('DOMContentLoaded', () => {
  const randomVideo = videoFiles[Math.floor(Math.random() * videoFiles.length)];
  videoElement.src = folderPath + randomVideo;
  videoElement.load();
});

soundToggle.addEventListener('click', () => {
  if (videoElement.muted) {
    videoElement.muted = false;
    soundIcon.innerText = "Mute On";
  } else {
    videoElement.muted = true;
    soundIcon.innerText = "Mute Off";
  }
});