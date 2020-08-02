let cursor;
let text;
let overItem = false;

function main() {
    cursor = document.getElementById("cursor");
    text = document.getElementById("text");

    document.addEventListener("mousemove", function (e) {
        if (!overItem) {
            const x = e.clientX;
            const y = e.clientY;
            cursor.style.left = x + "px";
            cursor.style.top = y + "px";
        }
    });

    text.addEventListener("mouseenter", function () {
        overItem = true;
        cursor.style.backgroundSize = "20px 20px"
        cursor.style.setProperty("--strokewidth", "4px");
        cursor.style.height = text.offsetHeight+"px";
        cursor.style.width = text.offsetWidth+"px";
        cursor.style.top = text.offsetTop+"px";
        cursor.style.left = text.offsetLeft+"px";
        cursor.style.transform = "none";
    });

    text.addEventListener("mouseleave", function () {
        overItem = false;
        cursor.style.backgroundSize = "5px 5px"
        cursor.style.setProperty("--strokewidth", "2px");
        cursor.style.width = "20px";
        cursor.style.height = "20px";
        cursor.style.transform = "translate(-50%, -50%)";
    });
}


