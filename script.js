let audio = document.getElementById("audio");
let progress = document.getElementById("bar");

// To play/pause/replay song
function toogle() {
  if (document.getElementById("play").style.display == "block") {
    console.log("pause");

    document.getElementById("play").style.display = "none";
    document.getElementById("pause").style.display = "block";
    audio.play();
  } else {
    if (document.getElementById("pause").style.display == "block") {
      console.log("play");

      document.getElementById("play").style.display = "block";
      document.getElementById("pause").style.display = "none";
      audio.pause();
    } else {
      console.log("hiii");

      document.getElementById("replay").style.display = "none";
      document.getElementById("play").style.display = "none";
      document.getElementById("pause").style.display = "block";
      audio.currentTime = 0;
      audio.play();
    }
  }
}

//convert seconds to formated time xx:xx
function formatTime(seconds) {
  // Calculate minutes and remaining seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // Format minutes and seconds to always have two digits
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

// to update progress bar
function progressUpdate() {
  progress.max = audio.duration;
  progress.value = audio.currentTime;
}

// to update audio form change of progress bar
progress.onchange = function () {
  audio.currentTime = progress.value;
};

//to show replay button when song is completed
function replay() {
  document.getElementById("play").style.display = "none";
  document.getElementById("pause").style.display = "none";
  document.getElementById("replay").style.display = "block";
}

//show final time and check for replay
function formattedTime() {
  let audioTime = Math.floor(audio.currentTime);
  let finalTime = formatTime(audioTime);
  document.getElementById("time").innerHTML = finalTime;
  if (audio.currentTime == audio.duration) {
    replay();
  }
}

setInterval(progressUpdate, 500);
setInterval(formattedTime, 1000);
