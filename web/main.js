var inputCount = 0;
var sampleData = [];
var arbitraryNumberList = [];
var globalSamplePrefix;
let preData = {};
var keyChangers = [];
function generateInputs() {

    //alert('A project's time may not excede 24 hours!');

    let startingSampleNumber = (!!document.getElementById('startingSampleNumber').value) ? parseInt(document.getElementById('startingSampleNumber').value) : 0;
    var projectNumber = document.getElementById('projectNumber');
    var askBox = document.getElementById('preInput');
    let inputNumber = document.getElementById('inputNumber').value;
    var inputGenerateBox = document.getElementById('inputs');
    let samplePrefix = (isNaN(document.getElementById('samplePrefix').value)) ? document.getElementById('samplePrefix').value : parseInt(document.getElementById('samplePrefix').value);

    if (!(!!samplePrefix || !!inputNumber || !!projectNumber.value)) {
        alert('You are missing something! Please try again.');
        return;
    }

    if (UsedReportNumbers.includes(projectNumber.value)) {
        alert('That project number has already been used.');
        projectNumber.classList.add('is-invalid');
        return;
    }

    globalSamplePrefix = samplePrefix;

    inputGenerateBox.innerHTML = '<h2><i>Data</i></h2>';

    var newContent = '';
    var thisSampleNumber;


    for (var i = 0; i < inputNumber; i++) {
        thisSampleNumber = i + startingSampleNumber;
        newContent = `
                    <div id='input${i}' class='card card-block bg-faded' style='margin: 2px; padding:2px; width:400px;'>
                        <b>${samplePrefix} - <div class='d-inline' id='iterSampleValue${i}'>${thisSampleNumber}</div></b>
                        <br>
                          <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" value="" id="checkbox${i}" onclick="checked(this)">
                            Blank?
                          </label>
                        <div id='input${i}' class='card card-block bg-faded' style='margin: 8px; padding:4px;'>
                            <label for='description${i}'>Sample Description</label>
                            <input placeholder='Sample Description' style='' type='text' class='form-control' id='description${i}'>
                            // <input placeholder='Area' style='' type='text' class='form-control' id='area${i}'>
                            <br>
                            <label for='startTime${i}'>Time (not exceeding 4 hours)</label>
                            <input placeholder='Start (Example: 530am)' style='' type='datetime-local' class='form-control' id='startTime${i}'>
                            <input placeholder='End (Example: 600pm)' style='' type='datetime-local' class='form-control' id='endTime${i}'>
                            <br>
                            <label for='startCalibration${i}'>Calibration (lpm)</label>
                            <input placeholder='Pre' style='width:60px' type='text' class='form-control' id='preCalibration${i}'>
                            <input placeholder='Post' style='width:60px' type='text' class='form-control' id='postCalibration${i}'>
                            <br>
                            <label for='volumeCollected${i}'>Volume (liters)</label>
                            <input placeholder='Example: 325' style='' type='text' class='form-control' id='volumeCollected${i}'>
                            <br>
                            <label for='fibersFound${i}'>Fibers</label>
                            <input placeholder='' style='width:60px' type='text' class='form-control' value='0' id='fibersFound${i}'>/<input placeholder='100' style='width:60px' type='text' class='form-control' value='100' id='fiberField${i}'>
                        </div>
                    </div>
`;
        inputGenerateBox.innerHTML += newContent;
    }
    //deletes box for pre inputs.
    askBox.innerHTML = '';
    //makes submit button avalible
    document.getElementById('submit').innerHTML = '<button type="button" class="btn btn-info" onClick="submit()">Submit and Create PDF</button>';


}

function appendInputs() {
    inputCount++;

    let startingSampleNumber = (!!document.getElementById('startingSampleNumber').value) ? parseInt(document.getElementById('startingSampleNumber').value) : 0;

    let i = inputCount;
    let thisSampleNumber = i + startingSampleNumber;

    let newContent = `
                    <div id='input${i}' class='card card-block bg-faded' style='margin: 2px; padding:2px; width:400px;'>
                        <input type="text" placeholder="{{startingSamplePrefix}}">
                        <b><div class='d-inline' id='iterSampleValue${i}'>${thisSampleNumber}</div></b>
                        <br>
                          <label class="form-check-label">

                        <div id='input${i}' class='card card-block bg-faded' style='margin: 8px; padding:4px;'>
                            <input type="checkbox" class="form-check-input" value="" style="margin-left: 10px;" id="checkbox${i}" onclick="checked(this)"><p style="margin-left: 30px;">Blank?</p></label>
                            <label for='description${i}'>Sample Description</label>
                            <input placeholder='Sample Description' style='' type='text' class='form-control' id='description${i}'>
                            // <input placeholder='Area' style='' type='text' class='form-control' id='area${i}'>
                            <br>
                            <label for='startTime${i}'>Time (not exceeding 4 hours)</label>
                            <input placeholder='Start (Example: 530am)' style='' type='datetime-local' class='form-control' id='startTime${i}'>
                            <input placeholder='End (Example: 600pm)' style='' type='datetime-local' class='form-control' id='endTime${i}'>
                            <br>
                            <label for='startCalibration${i}'>Calibration (lpm)</label>
                            <input placeholder='Pre' style='width:60px' type='text' class='form-control' id='preCalibration${i}'>
                            <input placeholder='Post' style='width:60px' type='text' class='form-control' id='postCalibration${i}'>
                            <br>
                            <label for='volumeCollected${i}'>Volume (liters)</label>
                            <input placeholder='Example: 325' style='' type='text' class='form-control' id='volumeCollected${i}'>
                            <br>
                            <label for='fibersFound${i}'>Fibers</label>
                            <input placeholder='' style='width:60px' type='text' class='form-control' value='0' id='fibersFound${i}'>/<input placeholder='100' style='width:60px' type='text' class='form-control' value='100' id='fiberField${i}'>
                        </div>
                    </div>
`;
    document.getElementById('inputs').innerHTML += newContent;

    keyChangers.push(new RTData(i));
}

function submit() {

    var dom = document;

    var thisSampleNumber;

    var description;
    var area;

    var startTime;
    var endTime;
    var totalTimeMins;

    var preCalibration;
    var postCalibration;

    var volumeCollected;
    var fibersFound;
    var fcc;

    for (var i = 0; i < inputCount; i++) {

        thisSampleNumber = dom.getElementById('iterSampleValue' + i).innerHTML;
        description = dom.getElementById('description' + i).value;
        area = dom.getElementById('area' + i).value;

        startTime = new Date(dom.getElementById('startTime' + i).value);
        endTime = new Date(dom.getElementById('endTime' + i).value);
        totalTimeMins = calcDiffMins(startTime, endTime);

        preCalibration = dom.getElementById('preCalibration' + i).value;
        postCalibration = dom.getElementById('postCalibration' + i).value;
        volumeCollected = dom.getElementById('volumeCollected' + i).value;

        fibersFound = dom.getElementById('fibersFound' + i).value;
        fiberField = dom.getElementById('fiberField' + i).value;
        fcc = calculateFiberOverCC(i);
        
        var ifBlank = document.getElementById('isBlank' + i).checked;
        if (!!ifBlank) isBlank = true;

        sampleData.push(
            {   
                sampleNumber: thisSampleNumber,
                description: description,
                area: area,
                startTime: startTime,
                endTime: endTime,
                totalTime: totalTimeMins,
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

function checked(sender) {
    if (sender.checked) {
        setToBlank(sender.id.slice(7));
    } else {
        unSetBlank(sender.id.slice(7));
    }
}
function setToBlank(id) {
    let i = id;
    dom.getElementById('description' + i).setAttribute('disabled', '');
    dom.getElementById('startTime' + i).setAttribute('disabled', '');
    dom.getElementById('endTime' + i).setAttribute('disabled', '');

    dom.getElementById('preCalibration' + i).setAttribute('disabled', '');
    dom.getElementById('postCalibration' + i).setAttribute('disabled', '');
    dom.getElementById('volumeCollected' + i).setAttribute('disabled', '');
}

function unSetBlank(id) {
    let i = id;
    dom.getElementById('description' + i).removeAttribute('disabled');
    dom.getElementById('startTime' + i).removeAttribute('disabled');
    dom.getElementById('endTime' + i).removeAttribute('disabled');
    dom.getElementById('preCalibration' + i).removeAttribute('disabled');
    dom.getElementById('postCalibration' + i).removeAttribute('disabled');
    dom.getElementById('volumeCollected' + i).removeAttribute('disabled');
}

function generateTESTPDF() {
    var doc = new jsPDF();
    doc.setFontSize(40);
    doc.text(35, 25, 'Octonyan loves jsPDF');
    doc.addImage(imgData, 'JPEG', 15, 40, 180, 180);
}

function calcDiffMins(start, end) { // Date objects
    let diffMs = (end - start); // milliseconds
    return Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
}