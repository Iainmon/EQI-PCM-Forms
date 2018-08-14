var inputCount;
var sampleData = [];
var arbitraryNumberList = [];
var globalSamplePrefix;

function formulaOne() {

}

function formulaTwo() {

}

function generateInputs() {
    //alert("A project's time may not excede 24 hours!");

    var startingSampleNumber = document.getElementById("startingSampleNumber").value;
    var askBox = document.getElementById("preInput");
    var inputNumber = document.getElementById("inputNumber").value;
    var inputGenerateBox = document.getElementById("inputs");
    var samplePrefix = document.getElementById("samplePrefix").value;
    
    if (startingSampleNumber == "") {startingSampleNumber = "0"};

    if (samplePrefix == "" || inputNumber == "") {
        alert("You are missing something! Please try again.");
        return;
    }
    samplePrefix = parseInt(samplePrefix);
    globalSamplePrefix = samplePrefix;

    startingSampleNumber = parseInt(startingSampleNumber);

    inputGenerateBox.innerHTML = "<h3><i>Data</i></h3>";

    var newContent = "";
    var thisSampleNumber;


    for (var i = 0; i < inputNumber; i++) {
        thisSampleNumber = i + startingSampleNumber;
        newContent = "<div id='input"+i+"' class='card card-block bg-faded' style='margin: 2px; padding:2px; width:400px;'><b>"+samplePrefix+" - <div id='iterSampleValue"+i+"'>"+thisSampleNumber +"</div></b><div id='input"+i+"' class='card card-block bg-faded' style='margin: 8px; padding:4px;'><label for='description"+i+"'>Project Description</label><input placeholder='Description' style='' type='text' class='form-control' id='description"+i+"'><input placeholder='Area' style='' type='text' class='form-control' id='area"+i+"'><br><label for='startTime"+i+"'>Time (not exceeding 4 hours)</label><input placeholder='Start (Example: 530am)' style='' type='datetime-local' class='form-control' id='startTime"+i+"'><input placeholder='End (Example: 600pm)' style='' type='datetime-local' class='form-control' id='endTime"+i+"'><br><label for='startCalibration"+i+"'>Calibration (lpm)</label><input placeholder='Pre' style='width:60px' type='text' class='form-control' id='preCalibration"+i+"'><input placeholder='Post' style='width:60px' type='text' class='form-control' id='postCalibration"+i+"'><br><label for='volumeCollected"+i+"'>Volume (liters)</label><input placeholder='Example: 325' style='' type='text' class='form-control' id='volumeCollected"+i+"'><br><label for='fibersFound"+i+"'>Fibers</label><input placeholder='' style='width:60px' type='text' class='form-control' value='0' id='fibersFound"+i+"'>/<input placeholder='100' style='width:60px' type='text' class='form-control' value='100' id='fiberField"+i+"'></div></div>";
        inputGenerateBox.innerHTML += newContent;
    }
    //deletes box for pre inputs.
    askBox.innerHTML = "";

    //makes submit button avalible
    document.getElementById("submit").innerHTML = '<button type="button" class="btn btn-info" onClick="submit()">Submit and Create PDF</button>';

    inputCount = inputNumber;
}

function submit() {

    var dom = document;

    var thisSampleNumber;

    var description;
    var area;

    var startTime;
    var endTime;
    var totalTime;

    var preCalibration;
    var postCalibration;

    var volumeCollected;
    var fibersFound;
    var fcc;

    for (var i = 0; i < inputCount; i++) {

        thisSampleNumber = dom.getElementById("iterSampleValue" + i).innerHTML;
        description = dom.getElementById("description" + i).value;
        area = dom.getElementById("area" + i).value;
        startTime = dom.getElementById("startTime" + i).value;
        endTime = dom.getElementById("endTime" + i).value;
        preCalibration = dom.getElementById("preCalibration" + i).value;
        postCalibration = dom.getElementById("postCalibration" + i).value;
        volumeCollected = dom.getElementById("volumeCollected" + i).value;
        fibersFound = dom.getElementById("fibersFound" + i).value;
        fiberField = dom.getElementById("fiberField" + i).value;
        fcc = calculateFiberOverCC(i);
        
        var ifBlank = volumeCollected.toLowerCase();
        if (ifBlank == "b" || ifBlank == "blank") {
            isBlank = true;
        }

        sampleData.push(
            {   
                sampleNumber: thisSampleNumber,
                description: description,
                area: area,
                startTime: startTime,
                endTime: endTime,
                totalTime: (endTime - startTime),
                preCalibration: preCalibration,
                postCalibration: postCalibration,
                volumeCollected: volumeCollected,
                fibersFound: fibersFound,
                fiberField: fiberField,
                isBlank: isBlank,
                fcc: fcc
            }
        );
    }

    generatePDF();
}

function generateTESTPDF() {
    var doc = new jsPDF();
    doc.setFontSize(40);
    doc.text(35, 25, "Octonyan loves jsPDF");
    doc.addImage(imgData, 'JPEG', 15, 40, 180, 180);
    





}