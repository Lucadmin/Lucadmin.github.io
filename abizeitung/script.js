const {jsPDF} = window.jspdf;

document.getElementById("submit-button").addEventListener("click", function () {
    console.log("PDF-Datei wird erstellt")
    const doc = new jsPDF();
    let pageHeight = doc.getPageHeight(0);
    let pageWidth = doc.getPageWidth(0);
    doc.addImage("background.jpeg", 'JPEG', 0, 0, pageWidth, pageHeight);
    doc.text("Name: " + document.getElementById("fname").value, 37, 120);
    //doc.save(document.getElementById("fname").value + ".pdf");
    doc.output('dataurlnewwindow');
})
