var videoPlayer = document.getElementById("videoPlayer1");
var videoPlayer2 = document.getElementById("videoPlayer2");
var videoPlayer3 = document.getElementById("videoPlayer3");
var videoPlayer4 = document.getElementById("videoPlayer4");
var videoPlayer5 = document.getElementById("videoPlayer5");
var videoPlayer6 = document.getElementById("videoPlayer6");

function stopVideo() {
  videoPlayer.style.display = "none";
  vid.play();
}

function stopVideo2() {
  videoPlayer2.style.display = "none";
  vid.play(pauses);
}

function stopVideo3() {
  videoPlayer3.style.display = "none";
  vid.play(pauses);
}

function stopVideo4() {
  videoPlayer4.style.display = "none";
  vid.play(pauses);
}

function stopVideo5() {
  videoPlayer5.style.display = "none";
  vid.play(pauses);
}

function stopVideo6() {
  videoPlayer6.style.display = "none";
  vid.play(pauses);
}

function playVideo1() {
  videoPlayer.style.display = "inline-block";
  vid.volume = 0.0;
}

function playVideo2() {
  videoPlayer2.style.display = "inline-block";
  vid.volume = 0.0;
}

function playVideo3() {
  videoPlayer3.style.display = "inline-block";
  vid.volume = 0.0;
}

function playVideo4() {
  videoPlayer4.style.display = "inline-block";
  vid.volume = 0.0;
}

function playVideo5() {
  videoPlayer5.style.display = "inline-block";
  vid.volume = 0.0;
}

function playVideo6() {
  videoPlayer6.style.display = "inline-block";
  vid.volume = 0.0;
}
