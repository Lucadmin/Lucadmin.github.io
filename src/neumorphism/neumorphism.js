button1 = document.getElementById("button1")

button1.addEventListener("click", function () {
    if (button1.className === "test1") {
        button1.className = "test1 test1--pressed"
    } else {
        button1.className = "test1"
    }
})
