var doc;
class PDF {}

fontReset = function (size, bold) {
    doc.setFont("helvetica");
        doc.setFontType("normal");
    if (bold) {
        doc.setFontType("bold");
    } else {
        doc.setFontType("normal");
    }
    doc.setFontSize(size);
};
//
// PDF.start = function () {
//     doc = new jsPDF();
//
//         fontReset(13, true);
//         doc.text(85, 15, "PCM Lab Report");
//
//         fontReset(13);
//         doc.text(90, 22, "Jan 7, 2018");
//         //address and other client ID's
//         fontReset(12, true);
//         doc.text(10, 40, "Attention:");
//         doc.text(17, 50, "Client:");
//         doc.text(11, 60, "Address:");
//         fontReset(13, true);
//         doc.text(19, 75, "Site:");
//         //report type desciption
//         fontReset(8);
//         doc.text(10, 85, "Analysis: Airborne Fiber Concentration Determination by Phase Contrast Microscopy");
//         doc.text(10, 90, "Method: NIOSH 7400 (4th Edition 8/15/94)");
//         doc.text(10, 95, "Reporting Limit: 7.0 fibers/mm2");
//         doc.text(10, 100, "Analyst: Leon Organista");
//         //report data
//         fontReset(12, true);
//         doc.text(115, 40, "Report number:");
//         doc.text(114, 46, "Project Number:");
//         doc.text(117, 52, "Date Sampled:");
//         doc.text(116, 58, "Date Analyzed:");
//         //signature region
//         fontReset(13);
//         doc.text(130, 100, "Jim Cardenas, QC Manager");
//         doc.rect(125, 95, 70, 0);
//
//         //data header
//         doc.rect(10, 103, 185, 10);
//         fontReset(11, true);
//         doc.text(15, 110, "Client ID");
//         doc.text(40, 110, "Lab ID");
//         doc.text(60, 110, "Fibers");
//         doc.text(75, 110, "Fields");
//         doc.text(90, 107, "Air Volume");
//         fontReset(9, true);
//         doc.text(96, 111, "(liters)");
//         fontReset(11, true);
//         doc.text(120, 107, "Reporting Limit");
//         fontReset(9, true);
//         doc.text(129, 111, "(fiber/cc)");
//         fontReset(11, true);
//         doc.text(157, 107, "Fiber Concentration");
//         fontReset(9, true);
//         doc.text(170, 111, "(liters)");
//         fontReset(12, true);
//
//         //Logo
//         doc.addImage(logoData, 'JPEG', 5, 5);
//
// };

PDF.start = function (input) {

    doc = new jsPDF();

    doc.addImage(HeaderModel, 'JPEG', 0, 0, 217, 101); //Adding Header.
    doc.addImage(FooterModel, 'JPEG', 0, 287, 225, 8); //Adding Footer.

    for (var i = 0; i < input.samples.length; i++) {

    }
};

PDF.createDataBox = function (offset) {
    let startY = 100;
    let startX = 10;
    var boxSize = 30;
    let dataSpacingOffset = 10;
    let lineSpacingOffest = 5;
    let boldData = true;


    offset = (offset < 1) ? startY : (offset * boxSize) + startY;
    let textOffset = offset + 8;

    fontReset(11);
    doc.text(startX, textOffset, "EQI-18-2003");

    var splitTitle = doc.splitTextToSize("Inseide Work Area/ 12th floor/outside Lani/concreet", 40);
    doc.text(startX, textOffset + 8, splitTitle);

    fontReset(11, boldData);

    doc.text(startX + 38, textOffset + dataSpacingOffset, "92743");

    doc.text(startX + 62, textOffset + dataSpacingOffset, "1.5");

    doc.text(startX + 74, textOffset + dataSpacingOffset, "100");

    doc.text(startX + 97, textOffset + dataSpacingOffset, "468");

    doc.text(startX + 128, textOffset + dataSpacingOffset, "0.006");

    doc.text(startX + 165, textOffset + dataSpacingOffset, ">");

    doc.text(startX + 170, textOffset + dataSpacingOffset, "0.006");

    doc.setLineWidth(0.5);
    doc.line(startX - 5, offset + boxSize, 216 - startX, offset + boxSize);
};

PDF.save = function () {
    doc.save();
};