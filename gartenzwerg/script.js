function randomColor() {
    return Math.floor(Math.random() * 255);
}

function faerben(item, red, green, blue) {
    if (item.id === "svg-path-schuh-rechts" || item.id === "svg-path-schuh-links") {
        document.getElementById("svg-path-schuh-links").style.fill = "rgba(" + red + "," + green + "," + blue + ")";
        document.getElementById("svg-path-schuh-rechts").style.fill = "rgba(" + red + "," + green + "," + blue + ")";
    } else {
        item.style.fill = "rgba(" + randomColor() + "," + randomColor() + "," + randomColor() + ")"
    }
}

button1 = document.getElementById("random-button");

document.querySelectorAll('.svg-path').forEach(item => {
    item.addEventListener("click", () => {
        faerben(item, randomColor(), randomColor(), randomColor())
    })
});

button1.addEventListener("click", () => {
    document.querySelectorAll('.svg-path').forEach(item => {
        faerben(item, randomColor(), randomColor(), randomColor())
    });
})
