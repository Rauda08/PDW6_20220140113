// Autoplay the video when page loads
window.onload = function() {
    var video = document.querySelector('video');
    video.play();
};

// Control audio and video playback
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.querySelector('audio');
    var video = document.querySelector('video');

    // Play audio and video when clicked
    audio.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }); n

    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});
