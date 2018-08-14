var doc;
class PDF {
    static start() {
        doc = new jsPDF();

        fontReset(13, true);
        doc.text(85, 15, "PCM Lab Report");

        fontReset(13);
        doc.text(90, 22, "Jan 7, 2018");
        //address and other client ID's
        fontReset(12, true);
        doc.text(10, 40, "Attention:");
        doc.text(17, 50, "Client:");
        doc.text(11, 60, "Address:");
        fontReset(13, true);
        doc.text(19, 75, "Site:");
        //report type desciption
        fontReset(8);
        doc.text(10, 85, "Analysis: Airborne Fiber Concentration Determination by Phase Contrast Microscopy");
        doc.text(10, 90, "Method: NIOSH 7400 (4th Edition 8/15/94)");
        doc.text(10, 95, "Reporting Limit: 7.0 fibers/mm2");
        doc.text(10, 100, "Analyst: Leon Organista");
        //report data
        fontReset(12, true);
        doc.text(115, 40, "Report number:");
        doc.text(114, 46, "Project Number:");
        doc.text(117, 52, "Date Sampled:");
        doc.text(116, 58, "Date Analyzed:");
        //signature region
        fontReset(13);
        doc.text(130, 100, "Jim Cardenas, QC Manager");
        doc.rect(125, 95, 70, 0);

        //data header
        doc.rect(10, 103, 185, 10);
        fontReset(11, true);
        doc.text(15, 110, "Client ID");
        doc.text(40, 110, "Lab ID");
        doc.text(60, 110, "Fibers");
        doc.text(75, 110, "Fields");
        doc.text(90, 107, "Air Volume");
        fontReset(9, true);
        doc.text(96, 111, "(liters)");
        fontReset(11, true);
        doc.text(120, 107, "Reporting Limit");
        fontReset(9, true);
        doc.text(129, 111, "(fiber/cc)");
        fontReset(11, true);
        doc.text(157, 107, "Fiber Concentration");
        fontReset(9, true);
        doc.text(170, 111, "(liters)");
        fontReset(12, true);

        //Logo
        doc.addImage(logoData, 'JPEG', 5, 5);

    }
    static save() {
        doc.save();
    }

    static fontReset(size, bold) {
        doc.setFont("helvetica");
            doc.setFontType("normal");
        if (bold) {
            doc.setFontType("bold");
        } else {
            doc.setFontType("normal");
        }
        doc.setFontSize(size);
    }
}

