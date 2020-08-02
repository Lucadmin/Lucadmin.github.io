let cursor;
let text;
let overItem = false;

function main() {
    cursor = document.getElementById("cursor");
    text = document.getElementById("text");

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
            cursor.style.opacity = "100";
        });
        item.addEventListener("mouseleave", function () {
            overItem = false;
            cursor.style.backgroundSize = "5px 5px"
            cursor.style.setProperty("--strokewidth", "2px");
            cursor.style.width = "20px";
            cursor.style.height = "20px";
            cursor.style.transform = "translate(-50%, -50%)";
            cursor.style.opacity = "0";
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
}


