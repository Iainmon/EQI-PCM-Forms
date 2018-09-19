<?php
/**
 * Created by Iain Monciref.
 * User: iainmoncrief
 * Date: 8/14/18
 * Time: 1:34 PM
 */

// function getIpAddress() {
//     if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
//         $ipAddresses = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
//         return trim(end($ipAddresses));
//     }
//     else {
//         return $_SERVER['REMOTE_ADDR'];
//     }
// }

// if ($_COOKIE['privatekey'] == file_get_contents("../privatekey.txt")) {
//     echo getIpAddress();
//     die(" 🚫You donot have access to this page.🚫");
// }
// //else
//     if (true) { //debug
// ?>
<html>
<head>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <script src="https://unpkg.com/jspdf@latest/dist/jspdf.min.js"></script>

    <script src="./main.js"></script>
    <script src="./constants.js"></script>
    <link rel="stylesheet" href="./stylesheet.css">
</head>

<body>
    <div class="row">
        <div class="col-3 mx-auto">
            <div id="headerInfo" class="card card-block bg-faded" style="margin: 2px; margin-left: -150px; padding:8px; width:600px;">
                    <label>New Project</label>
                    <input placeholder="Project Number" style="" type="text" class="form-control" id="projectNumber" required>
                    <input placeholder="Project Name" style="" type="text" class="form-control" id="projectName" required>
                    <input placeholder="Client" style="" type="text" class="form-control" id="client" required>
                    <input placeholder="Date" style="" type="date" class="form-control" id="date" required>
                    <form class="form-inline">
                        <input placeholder="Sample prefix" style="" type="text" class="form-control" id="samplePrefix" required>
                        <h2>      -      </h2>
                        <input value="0" placeholder="0" style="width: 50px;" type="text" class="form-control" id="startingSampleNumber" required>
                    </form>
            </div>

            <div id="preInput">
                <div class="form-group">
                    <form class="form-inline">
                        <label for="usr">Enter number of data inputs: </label>
                        <input style="width:50px" type="text" class="form-control" id="inputNumber">
                    </form>
                </div>
                <button type="button" class="btn btn-info" onClick="generateInputs()">Generate Inputs</button>
            </div>
            <div id="inputs">
                <!-- <div id="input0" class="card card-block bg-faded" style="margin: 2px; padding:2px; width:400px;">
                    <b>22401</b>
                    <div id="input0" class="card card-block bg-faded" style="margin: 8px; padding:4px;">
                        <label for="description0">Project Description</label>
                        <input placeholder="Description" style="" type="text" class="form-control" id="description0">
                        <input placeholder="Area" style="" type="text" class="form-control" id="area0">
                        <br>

                        <label for="startTime0">Time (not exceeding 4 hours)</label>
                        <input placeholder="Start (Example: 530am)" style="" type="text" class="form-control" id="startTime0">
                        <input placeholder="End (Example: 600pm)" style="" type="text" class="form-control" id="endTime0">
                        <br>

                        <label for="startCalibration0">Calibration (lpm)</label>
                        <input placeholder="Pre" style="width:60px" type="text" class="form-control" id="preCalibration0">
                        <input placeholder="Post" style="width:60px" type="text" class="form-control" id="postCalibration0">
                        <br>

                        <label for="volumeCollected0">Volume (liters)</label>
                        <input placeholder="Example: 325" style="" type="text" class="form-control" id="volumeCollected0">
                        <br>

                        <label for="fibersFound0">Fibers/100</label>
                        <input placeholder="Example: 6" style="" type="text" class="form-control" id="fibersFound0">
                    </div>
                </div> -->
            </div>
            <div id="submit">
            </div>
        </div>
    </div>
    <script> let privateKey = "<?php echo file_get_contents("../privateKey.txt")?>";</script>
    <script>
        <?php
            echo "const HeaderModel = '".file_get_contents("./Models/Header_Image_Data.txt")."';";
            echo "const FooterModel = '".file_get_contents("./Models/Footer_Image_Data.txt")."';";
        ?>
    </script>
</body>
</html>
<?php

    ?>