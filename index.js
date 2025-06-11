let clickCount = 0;
const maxImageCount = 19;

const counter = document.createElement('div');
counter.id = "floatingNumber";
counter.style.position = "absolute";
counter.style.fontSize = "40px";
counter.style.color = "#ff1493";
counter.style.fontWeight = "bold";
counter.textContent = "";
document.body.appendChild(counter);

document.getElementById("myButton").addEventListener("click", () => {
    clickCount++;

    if (clickCount <= maxImageCount) {
        document.getElementById("mainImage").src = `${clickCount}.jpg`;
    }

    const maxX = window.innerWidth - 50;
    const maxY = window.innerHeight - 50;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    counter.style.left = `${randomX}px`;
    counter.style.top = `${randomY}px`;
    counter.textContent = clickCount;

    if (clickCount === 19) {
        window.location.href = "success.html";
    }
});