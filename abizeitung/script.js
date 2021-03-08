const {jsPDF} = window.jspdf;

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
    event.preventDefault();
    console.log("PDF-Datei wird erstellt")
    const doc = new jsPDF();
    let pageHeight = doc.getPageHeight(0);
    let pageWidth = doc.getPageWidth(0);
    doc.addImage("background.png", 'PNG', 0, 0, pageWidth, pageHeight);
    doc.text("Name: " + document.getElementById("fname").value, 37, 120);
    doc.text("Lieblingsfach: " + document.getElementById("fach").value, 37, 130)
    doc.text("Was ich vermissen werde: " + document.getElementById("fvermissen").value, 37, 140);
    let url = URL.createObjectURL(document.getElementById("fimageold").files[0]);
    crop(url, 1).then((canvas) => {
        doc.addImage(canvas, "PNG", 25, 25, 60, 60)
        url = URL.createObjectURL(document.getElementById("fimagenew").files[0]);
        crop(url, 1).then((canvas) => {
            doc.addImage(canvas, "PNG", 100, 25, 60, 60)
            doc.addImage("haengedinger.png", 'PNG', 0, 0, pageWidth, pageHeight);
            doc.setProperties({
                title: document.getElementById("fname").value
            });
            window.open(doc.output('bloburl'));
        });
    });
    //doc.addImage(crop(URL.createObjectURL(document.getElementById("fimageold").files[0]), 1), "JPEG", 100, 100, 100, 100);
})

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
