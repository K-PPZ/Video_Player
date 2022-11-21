let back = document.getElementById("back");
let skip = document.getElementById("skip");
let reset = document.getElementById("reset");
let barre_move = document.getElementById("barre_move");
let video = document.getElementById("video");
let duration;

video.addEventListener("loadedmetadata", () => {
    duration = video.duration;
    console.log(duration);
});

skip.addEventListener("click", () => {
    video.currentTime += 10;
});

back.addEventListener("click", () => {
    video.currentTime -= 10;
});

reset.addEventListener("click", () => {
    video.currentTime = 0;
});

setInterval(() => {
    barre_move.style.width = `${video.currentTime / duration * 100}%`;
}, 200);