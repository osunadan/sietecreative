var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

function stopVideo() {
  videoPlayer.style.display = "none";
  vid.play(pauses);
}

function playVideo(file) {
  myVideo.src = file;
  videoPlayer.style.display = "inline-block";
  vid.volume = 0.0;
}
