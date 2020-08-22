//HTML Elements
let cursor;
let oc3;
let oc2;
let oc1;
let st;
let indexStorage;
let cursorStorage;
let subtext;
let turningSquare;
let leftArea;
let text;
let body;
let nav;

//Boolean
let effectsActive = true;
let overItem = false;

//Arrays
let originalTexts = {};
let running = {};
let section = ["section-null", "section-hello-world", "section-me", "section-programming-languages", "section-projects"];
let sectionTitles = ["null", "Hello World", "About me", "Programming languages", "Projects"];

//Integer
let currentSection = 0;

function main() {
    cursor = document.getElementById("cursor");
    text = document.getElementById("text");
    leftArea = document.getElementById("left-area");
    body = document.getElementById("body");
    turningSquare = document.getElementById("turning-square");
    subtext = document.getElementById("subtext");
    cursorStorage = document.getElementById("cursor-storage");
    indexStorage = document.getElementById("progress-index");
    st = document.getElementById("section-programming-languages");
    oc1 = document.getElementById("octagon-1");
    oc2 = document.getElementById("octagon-2");
    oc3 = document.getElementById("octagon-3");
    nav = document.getElementById("nav-bar-list");

    window.addEventListener("wheel", function (event) {
        if (event.deltaY > 0) {
            jumpToSection(currentSection + 1);
        }
        if (event.deltaY < 0) {
            jumpToSection(currentSection - 1);
        }
    });

    fitOctagon();

    window.addEventListener("resize", function () {
        setTimeout(fitOctagon, 1000);
    });

    for (let i = 1; i < section.length; i++) {
        let content = document.createElement('div');
        content.classList.add('index-circle');
        content.style.cursor = "pointer";
        content.addEventListener("click", function () {
            jumpToSection(i);
        });

        indexStorage.appendChild(content);

        content = document.createElement("li");
        content.id = "nav-" + section[i];
        content.classList.add("focusable");
        content.classList.add("glitch");
        content.innerHTML = sectionTitles[i];
        content.addEventListener("click", function () {
            jumpToSection(i);
        });

        nav.appendChild(content);
    }

    function fitOctagon() {
        oc1.style.strokeDasharray = (st.clientWidth * 2.6) * 0.8 + ", " + (st.clientWidth * 2.6);
        oc2.style.strokeDasharray = (st.clientWidth * 1.8) * 0.7 + ", " + (st.clientWidth * 1.8);
        oc3.style.strokeDasharray = (st.clientWidth * 0.9) * 0.3 + ", " + (st.clientWidth * 0.9);
    }

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

    cursorStorage.addEventListener("mouseenter", function () {
        if (effectsActive) {
            overItem = true;
            effectsActive = false;
            cursor.style.top = offset(cursorStorage).top + 3.5 + "px";
            cursor.style.left = offset(cursorStorage).left + 3.5 + "px";
            cursor.style.transform = "none";
        } else {
            overItem = false;
            effectsActive = true;
            cursor.style.transform = "translate(-50%, -50%)";
        }
    });

    document.querySelectorAll('.focusable').forEach(item => {
        item.style.cursor = "pointer";
        item.addEventListener("mouseenter", function () {
            if (effectsActive) {
                overItem = true;
                cursor.style.backgroundSize = "10px 10px";
                cursor.style.setProperty("--strokewidth", "4px");
                cursor.style.height = item.offsetHeight + "px";
                cursor.style.width = item.offsetWidth + "px";
                cursor.style.top = offset(item).top + "px";
                cursor.style.left = offset(item).left + "px";
                cursor.style.transform = "none";
            }
        });
        item.addEventListener("mouseleave", function () {
            if (effectsActive) {
                overItem = false;
                cursor.style.backgroundSize = "5px 5px";
                cursor.style.setProperty("--strokewidth", "2px");
                cursor.style.width = "20px";
                cursor.style.height = "20px";
                cursor.style.transform = "translate(-50%, -50%)";
            }
        });
    });

    document.querySelectorAll('.glitch').forEach(item => {
        originalTexts[item.id] = item.innerHTML;
        item.addEventListener("mouseenter", function () {
            if (effectsActive) {
                glitchText(item, originalTexts[item.id]);
            }
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

    /*const nodes = Array.prototype.slice.call(document.getElementById('progress-index').children);

    document.querySelectorAll("#progress-index div").forEach(item => {
        item.addEventListener("click", function () {
            jumpToSection(nodes.indexOf(item) + 1);
        })
    });*/

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
        turningSquare.style.setProperty("--square-rotation", (currentSection + 2) * 45 + "deg");
        document.getElementById(section[currentSection]).style.visibility = "visible";
        setIndex();
        glitchText(subtext, "System.out.println(\"" + sectionTitles[currentSection] + "\");");
    }
}

function setIndex() {
    let index = 0;
    document.querySelectorAll("#progress-index div").forEach(item => {
        if (index < currentSection) {
            index++;
            item.style.backgroundColor = "white";
        } else {
            item.style.backgroundColor = "transparent";
        }
    });
}

function glitchText(item, newText) {
    const originalText = newText;
    const textLength = originalText.length;
    if (effectsActive) {
        newText = randomString(textLength);
        item.innerHTML = newText;
        if (item.id in running) {
            clearTimeout(running[item.id]);
            delete running[item.id];
        }
        running[item.id] = setTimeout(textrecover, 100, originalText, newText, item);
    } else {
        item.innerHTML = newText;
    }
}

function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

function randomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function textrecover(originalText, newText, item) {
    let gleich = 0;
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


