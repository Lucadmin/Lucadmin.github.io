let cursor;
let text;
let leftArea;
let body;
let turningSquare;
let overItem = false;

function main() {
    cursor = document.getElementById("cursor");
    text = document.getElementById("text");
    leftArea = document.getElementById("left-area");
    turningSquare = document.getElementById("turning-square");
    body = document.getElementById("body");

    window.addEventListener("wheel", function (event) {
        if (event.deltaY > 0){
            moveToNextSection();
        }
        if (event.deltaY < 0){
            moveToPreviousSection();
        }
    });

    turningSquare.addEventListener("click", function () {
        text.innerHTML = "";
        turningSquare.classList.remove("turn");
    });

    leftArea.addEventListener("click", function () {
        text.innerHTML = "Hello World";
        turningSquare.style.setProperty("--square-rotation", 180+"deg");
        turningSquare.classList.add('turn');
    });

    document.querySelectorAll('.focusable').forEach(item => {
        item.addEventListener("mouseenter", function () {
            overItem = true;
            cursor.style.backgroundSize = "10px 10px";
            cursor.style.setProperty("--strokewidth", "4px");
            cursor.style.height = item.offsetHeight+"px";
            cursor.style.width = item.offsetWidth+"px";
            cursor.style.top = offset(item).top+"px";
            cursor.style.left = offset(item).left+"px";
            cursor.style.transform = "none";
            //cursor.style.opacity = "100";
        });
        item.addEventListener("mouseleave", function () {
            overItem = false;
            cursor.style.backgroundSize = "5px 5px"
            cursor.style.setProperty("--strokewidth", "2px");
            cursor.style.width = "20px";
            cursor.style.height = "20px";
            cursor.style.transform = "translate(-50%, -50%)";
            //cursor.style.opacity = "0";
        });
    });

    document.querySelectorAll('.glitch').forEach(item => {
        addEventListenerOnce(item, "mouseenter", function (event) {
            var originalText = item.innerHTML;
            var textLength = originalText.length;
            var newText = randomString(textLength);
            item.innerHTML = newText;
            setTimeout(textrecover, 100, originalText, newText, item);
        });
    });

    document.addEventListener("mousemove", function (e) {
        if (!overItem) {
            const x = e.clientX;
            const y = e.clientY;
            cursor.style.left = x + "px";
            cursor.style.top = y + "px";
        }
    });

    /*var options = {
        "animate": true,
        "patternWidth": 420.64,
        "patternHeight": 37.02,
        "grainOpacity": 0.1,
        "grainDensity": 10,
        "grainWidth": 1.6,
        "grainHeight": 1.6
    };

    grained("#grain-effect", options);*/

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    function randomString(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    function textrecover(originalText, newText, item) {
        var gleich = 0;
        for (let i = 0; i < originalText.length; i++ ) {
            if (originalText.charAt(i) !== item.innerHTML.charAt(i) && gleich === 0){
                gleich++;
                newText = originalText.substring(0, i+1) + randomString(originalText.length-i-1);
                item.innerHTML = newText;
            }
        }
        if (originalText !== newText) {
            setTimeout(textrecover, 40, originalText, newText, item);
        }else{
            addEventListenerOnce(item, "mouseenter", function (event) {
                var originalText = item.innerHTML;
                var textLength = originalText.length;
                var newText = randomString(textLength);
                item.innerHTML = newText;
                setTimeout(textrecover, 100, originalText, newText, item);
            });
        }
    }

    function addEventListenerOnce(target, type, listener, addOptions, removeOptions) {
        target.addEventListener(type, function fn(event) {
            target.removeEventListener(type, fn, removeOptions);
            listener.apply(this, arguments);
        }, addOptions);
    }

    let section = ["Section 1", "Section 2", "Section 3"];
    let currentSection = -1;


    function moveToNextSection() {
        if (currentSection === -1){
            turningSquare.classList.add('turn');
        }if (currentSection < section.length-1) {
            currentSection++;
            turningSquare.style.setProperty("--square-rotation", (currentSection+2)*90+"deg");
            text.innerHTML = section[currentSection];
        }
    }

    function moveToPreviousSection() {
        if (currentSection > 0) {
            currentSection--;
            turningSquare.style.setProperty("--square-rotation", (currentSection+2)*90+"deg");
            text.innerHTML = section[currentSection];
        }else if(currentSection === 0){
            turningSquare.classList.remove("turn");
            currentSection--;
            text.innerHTML = "";
        }
    }

}


