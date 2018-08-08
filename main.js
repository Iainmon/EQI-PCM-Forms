const fiberLimit = 0.006;
const formulaOne = function () {

};
const formulaTwo = function () {

};

function generateInputs() {
    alert("A project's time may not excede 24 hours!");

    var startingSampleNumber = 80;//document.getElementById("startingSampleNumber").value;
    var askBox = document.getElementById("preInput");
    //var inputNumber = document.getElementById("inputNumber").value;
    var inputGenerateBox = document.getElementById("inputs");

    var newContent = "";
    var thisSampleNumber;
    for (var i = 0; i < 6; i++) {
        thisSampleNumber = i + startingSampleNumber;
        newContent = "<div id='input"+i+"' class='card card-block bg-faded' style='margin: 2px; padding:2px; width:400px;'><b>"+thisSampleNumber+"</b><div id='input"+i+"' class='card card-block bg-faded' style='margin: 8px; padding:4px;'><label for='description"+i+"'>Project Description</label><input placeholder='Description' style='' type='text' class='form-control' id='description"+i+"'><input placeholder='Area' style='' type='text' class='form-control' id='area"+i+"'><br><label for='startTime"+i+"'>Time (not exceeding 4 hours)</label><input placeholder='Start (Example: 530am)' style='' type='text' class='form-control' id='startTime"+i+"'><input placeholder='End (Example: 600pm)' style='' type='text' class='form-control' id='endTime"+i+"'><br><label for='startCalibration"+i+"'>Calibration (lpm)</label><input placeholder='Pre' style='width:60px' type='text' class='form-control' id='preCalibration"+i+"'><input placeholder='Post' style='width:60px' type='text' class='form-control' id='postCalibration"+i+"'><br><label for='volume"+i+"'>Volume (liters)</label><input placeholder='Example: 325' style='' type='text' class='form-control' id='volume"+i+"'><br><label for='fibers"+i+"'>Fibers/100</label><input placeholder='Example: 6' style='' type='text' class='form-control' id='fibers"+i+"'></div></div>";
        inputGenerateBox.innerHTML += newContent;
    }
}