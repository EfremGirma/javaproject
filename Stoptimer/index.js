let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let refrence = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});
