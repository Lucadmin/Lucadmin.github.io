//const {jsPDF} = window.jspdf;


/*
-Foto von früher & Foto von jetzt
-Name
-Geburtstag
-Lieblingsfach
-Bester Lehrer
-Meine Schullaufbahn als Filmtitel
-Das werde ich vermissen
-Häufigster Abwesenheitsgrund
-Was ich nach dem Abi machen werde
-Lebensmotto
-Absturzgetränk Nr°1
 */

document.getElementById("submit-button").addEventListener("click", function (event) {
    if (document.getElementById("form").checkValidity()) {
        document.getElementById("loadingcircle").style.visibility = "visible";
        event.preventDefault();
        console.log("PDF-Datei wird erstellt")
        const doc = new jsPDF({compress: true});
        doc.setFont("Montserrat-SemiBoldItalic", "bolditalic")
        doc.setTextColor("#e0e0e0");
        doc.setFontSize(15);
        let pageHeight = doc.getPageHeight(0);
        let pageWidth = doc.getPageWidth(0);
        doc.addImage("hintergrund.png", 'PNG', 0, 0, pageWidth, pageHeight, "", "FAST");
        doc.text("Geburtstag: ", 30, 130)
        doc.text("Lieblingsfach: ", 30, 140)
        doc.text("Bester Lehrer: ", 30, 150)
        if (document.getElementById("fdrink").value === "") {
            doc.text("Meine Schullaufbahn als Filmtitel: ", 30, 160)
            doc.text("Häufigster Abwesenheitsgrund: ", 30, 180)
            doc.text("Was ich nach dem Abi machen werde: ", 30, 200)
            doc.text("Lebensmotto: ", 30, 220)
            doc.text("Was ich vermissen werde: ", 30, 240);
        } else {
            doc.text("Absturzgetränk Nr°1: ", 30, 160)
            doc.text("Meine Schullaufbahn als Filmtitel: ", 30, 170)
            doc.text("Häufigster Abwesenheitsgrund: ", 30, 190)
            doc.text("Was ich nach dem Abi machen werde: ", 30, 210)
            doc.text("Lebensmotto: ", 30, 230)
            doc.text("Was ich vermissen werde: ", 30, 250);
        }
        //Handwriting
        doc.setFont("Handlee", "normal")
        doc.setFontSize(18);
        doc.text(document.getElementById("fbday").value, 73, 130)
        doc.text(document.getElementById("fach").value, 80, 140)
        doc.text(document.getElementById("gender").value + " " + document.getElementById("fteachername").value, 80, 150)
        if (document.getElementById("fdrink").value === "") {
            doc.text(document.getElementById("ffilmtitel").value, 30, 170)
            doc.text(document.getElementById("fabwesenheit").value, 30, 190)
            doc.text(document.getElementById("fnachdemabi").value, 30, 210)
            doc.text(document.getElementById("fmotto").value, 30, 230)
            doc.text(document.getElementById("fvermissen").value, 30, 250);
        } else {
            doc.text(document.getElementById("fdrink").value, 100, 160)
            doc.text(document.getElementById("ffilmtitel").value, 30, 180)
            doc.text(document.getElementById("fabwesenheit").value, 30, 200)
            doc.text(document.getElementById("fnachdemabi").value, 30, 220)
            doc.text(document.getElementById("fmotto").value, 30, 240)
            doc.text(document.getElementById("fvermissen").value, 30, 260);
        }
        doc.setFont("Montserrat-SemiBoldItalic", "bolditalic")
        if (document.getElementById("fimagenew").files[0] !== undefined) {
            let url = URL.createObjectURL(document.getElementById("fimageold").files[0]);
            crop(url, 1).then((canvas) => {
                doc.addImage(canvas, "PNG", 25, 25, 70, 70, "", "FAST")
                url = URL.createObjectURL(document.getElementById("fimagenew").files[0]);
                crop(url, 1).then((canvas) => {
                    doc.addImage(canvas, "PNG", 120, 25, 70, 70, "", "FAST")
                    finishDocument(doc, pageWidth, pageHeight);
                });
            });
        } else {
            finishDocument(doc, pageWidth, pageHeight);
        }
    }
})

function finishDocument(doc, pageWidth, pageHeight) {
    doc.addImage("haengedinger.png", 'PNG', 0, 0, pageWidth, pageHeight, "", "FAST");
    doc.setFontSize(45);
    doc.text(document.getElementById("fvorname").value, 25, 100);
    doc.text(document.getElementById("fnachname").value, 30, 115);
    doc.setProperties({
        title: document.getElementById("fvorname").value + " " + document.getElementById("fnachname").value
    });
    doc.output('save', document.getElementById("fvorname").value + " " + document.getElementById("fnachname").value + '.pdf');
}

/**
 * @param {string} url - The source image
 * @param {number} aspectRatio - The aspect ratio
 * @return {Promise<HTMLCanvasElement>} A Promise that resolves with the resulting image as a canvas element
 */
function crop(url, aspectRatio) {
    // we return a Promise that gets resolved with our canvas element
    return new Promise((resolve) => {
        // this image will hold our source image data
        const inputImage = new Image();

        // we want to wait for our image to load
        inputImage.onload = () => {
            // let's store the width and height of our image
            const inputWidth = inputImage.naturalWidth;
            const inputHeight = inputImage.naturalHeight;

            // get the aspect ratio of the input image
            const inputImageAspectRatio = inputWidth / inputHeight;

            // if it's bigger than our target aspect ratio
            let outputWidth = inputWidth;
            let outputHeight = inputHeight;
            if (inputImageAspectRatio > aspectRatio) {
                outputWidth = inputHeight * aspectRatio;
            } else if (inputImageAspectRatio < aspectRatio) {
                outputHeight = inputWidth / aspectRatio;
            }

            // calculate the position to draw the image at
            const outputX = (outputWidth - inputWidth) * 0.5;
            const outputY = (outputHeight - inputHeight) * 0.5;

            // create a canvas that will present the output image
            const outputImage = document.createElement("canvas");

            // set it to the same size as the image
            outputImage.width = outputWidth;
            outputImage.height = outputHeight;

            // draw our image at position 0, 0 on the canvas
            const ctx = outputImage.getContext("2d");
            ctx.drawImage(inputImage, outputX, outputY);
            resolve(outputImage.toDataURL());

        };
        //return(outputImage.toDataURL())
        // start loading our image
        inputImage.src = url;
    });
}
