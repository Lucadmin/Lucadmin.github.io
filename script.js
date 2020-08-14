let cursor;
let text;
let leftArea;
let body;
let turningSquare;
let overItem = false;
let subtext;

let originalTexts = {};
let running = {};
let section = ["section-null", "section-one", "section-two"];
let currentSection = 0;

var testing = true;

function main() {
    cursor = document.getElementById("cursor");
    text = document.getElementById("text");
    leftArea = document.getElementById("left-area");
    turningSquare = document.getElementById("turning-square");
    body = document.getElementById("body");
    subtext = document.getElementById("subtext");

    window.addEventListener("wheel", function (event) {
        if (event.deltaY > 0) {
            jumpToSection(currentSection + 1);
        }
        if (event.deltaY < 0) {
            jumpToSection(currentSection - 1);
        }
    });

    var st = document.getElementById("section-two");
    var oc1 = document.getElementById("octagon-1");
    oc1.style.strokeDasharray = (st.clientWidth*2.7)*0.8+"";
    var oc2 = document.getElementById("octagon-2");
    oc2.style.strokeDasharray = (st.scrollWidth*1.8)*0.8+"";
    var oc3 = document.getElementById("octagon-3");
    oc3.style.strokeDasharray = (st.scrollWidth*0.9)*0.8+"";

    window.addEventListener("resize", function () {
        setTimeout(function () {
            oc1.style.strokeDasharray = (st.scrollWidth*2.6)*0.8+"";
        }, 1000);
    });

    turningSquare.addEventListener("click", function () {
        turningSquare.classList.remove("turn");
        if (currentSection !== 0) {
            jumpToSection(0);
        }
    });

    leftArea.addEventListener("click", function () {
        if (currentSection !== 0) {
            jumpToSection(0);
        }
    });

    document.querySelectorAll('.focusable').forEach(item => {
        item.addEventListener("mouseenter", function () {
            overItem = true;
            cursor.style.backgroundSize = "10px 10px";
            cursor.style.setProperty("--strokewidth", "4px");
            cursor.style.height = item.offsetHeight + "px";
            cursor.style.width = item.offsetWidth + "px";
            cursor.style.top = offset(item).top + "px";
            cursor.style.left = offset(item).left + "px";
            cursor.style.transform = "none";
            //cursor.style.opacity = "100";
        });
        item.addEventListener("mouseleave", function () {
            overItem = false;
            cursor.style.backgroundSize = "5px 5px";
            cursor.style.setProperty("--strokewidth", "2px");
            cursor.style.width = "20px";
            cursor.style.height = "20px";
            cursor.style.transform = "translate(-50%, -50%)";
            //cursor.style.opacity = "0";
        });
    });

    document.addEventListener("keypress", (event) => {
        console.log(event.key);
        if (event.key === "o"){
            testing = !testing;
            octagonTesting(false);
        }
        if (event.key === "a"){
            testing = !testing;
            octagonTesting(true);
        }
    });

    document.querySelectorAll('.glitch').forEach(item => {
        originalTexts[item.id] = item.innerHTML;
        item.addEventListener("mouseenter", function () {
            glitchText(item, originalTexts[item.id]);
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
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    function randomString(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    function textrecover(originalText, newText, item) {
        var gleich = 0;
        for (let i = 0; i < originalText.length; i++) {
            if (originalText.charAt(i) !== item.innerHTML.charAt(i) && gleich === 0) {
                gleich++;
                newText = originalText.substring(0, i + 1) + randomString(originalText.length - i - 1);
                item.innerHTML = newText;
            }
        }
        if (originalText !== newText) {
            running[item.id] = setTimeout(textrecover, 40, originalText, newText, item);
        } else {
            originalTexts[item.id] = newText;
            clearTimeout(running[item.id]);
            delete running[item.id];
        }
    }

    function jumpToSection(target) {
        if (target < section.length && target > -1) {
            document.getElementById(section[currentSection]).style.visibility = "hidden";

            if (currentSection === 0) {
                turningSquare.classList.add('turn');
            }
            currentSection = target;
            if (currentSection === 0) {
                turningSquare.classList.remove('turn');
            }
            turningSquare.style.setProperty("--square-rotation", (currentSection + 3) * 45 + "deg");
            document.getElementById(section[currentSection]).style.visibility = "visible";
            glitchText(subtext, "System.out.println(\"" + section[currentSection] + "\");")
        }
    }

    function glitchText(item, newText) {
        const originalText = newText;
        const textLength = originalText.length;
        newText = randomString(textLength);
        item.innerHTML = newText;
        if (item.id in running) {
            clearTimeout(running[item.id]);
            delete running[item.id];
        }
        running[item.id] = setTimeout(textrecover, 100, originalText, newText, item);
    }

    var timer;
    var offsetOc = 10;
    var offsetAc = 0;
    function octagonTesting(offset){
        console.log("running");

        if (testing === false){
            timer = setTimeout(addStrokeDashArray, 10, offset);
        }else{
            clearTimeout(timer);
            console.log("DashArray: " + offsetOc);
            console.log("DashOffset: " + offsetAc);
            console.log("Size " + st.clientWidth);
        }
    }

    function addStrokeDashArray(offset){
        if (offset) {
            offsetOc++;
            oc1.style.strokeDasharray = offsetOc + "";
        }else{
            offsetAc++;
            oc1.style.strokeDashoffset = offsetAc + "";
        }
        timer = setTimeout(addStrokeDashArray, 10, offset);
    }
}


