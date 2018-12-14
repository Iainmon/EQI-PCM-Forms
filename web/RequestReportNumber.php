<?php

if ($_POST['privateKey'] != file_get_contents("../privateKey.txt") || !$_GET['indexcount']) {
    error("Invalid private key.");
}

$fileToOpen = "ReportNumbers.xml";
$xmlString = simplexml_load_file($fileToOpen);
$elementCount = count($xmlString->reportNumber);

if ($_GET['indexcount']) {
    error($elementCount . " Report Numbers exist in the file: " . $fileToOpen);
}

$elementCount = array_push($xmlString->reportNumber, ($xmlString->reportNumber[$elementCount-1]++));
$yearNum = date("Y") - 2000;

$newReportNumber = "EQI-".$yearNum."-".$xmlString->reportNumber[$elementCount-1];
for ($i = 0; $i < $elementCount; $i++) {
    if ($newReportNumber == $xmlString[$i] && $_GET['overrideNumber']) {
        error("This number has already been taken.");
    }
}

function error($str) {
    die('
    {
     "error": true,
     "message": "'.$str.'"
     }
    ');
}