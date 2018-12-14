<?php
$oldPass = file_get_contents("../password.txt");
if ($_GET['oldpass'] == $oldPass) {

    $characters = 'abcdefghijklmnopqrstuvwxyz0123456789';//all possible chars
    $newPass = '';
    $max = strlen($characters) - 1;

    for ($i = 0; $i < 15; $i++) {
        $newPass .= $characters[mt_rand(0, $max)];
    }

    $passFile = fopen("../password.txt", "w");
    fwrite($passFile, $newPass);
    fclose($passFile);
    mail("eqiiain@gmail.com", "Password has been updated for the PCM form application: ".getenv(DOMAIN_NAME), "The application exists in ".$_SERVER['QUERY_STRING']."   \n New Password: ".$newPass."   \n Old Password: ".$oldPass);
    //mail("stanaka@enviroquestinc.com", "Password has been updated for the PCM form application: ".getenv(DOMAIN_NAME), "The application exists in ".$_SERVER['QUERY_STRING']."   \n New Password: ".$newPass."   \n Old Password: ".$oldPass);
    //mail("rtakemoto@enviroquestinc.com", "Password has been updated for the PCM form application: ".getenv(DOMAIN_NAME), "The application exists in ".$_SERVER['QUERY_STRING']."   \n New Password: ".$newPass."   \n Old Password: ".$oldPass);
    echo "Password has been updated and emailed to the appropriate people.";
}
if ($_GET['forgot']) {
    mail("eqiiain@gmail.com", "Forgot password for the PCM form application: ".getenv(DOMAIN_NAME), "The application exists in ".$_SERVER['QUERY_STRING']."   \n Old Password: ".$oldPass);
//    mail("stanaka@enviroquestinc.com", "Forgot password for the PCM form application: ".getenv(DOMAIN_NAME), "The application exists in ".$_SERVER['QUERY_STRING']."   \n Old Password: ".$oldPass);
//    mail("rtakemoto@enviroquestinc.com", "Forgot password for the PCM form application: ".getenv(DOMAIN_NAME), "The application exists in ".$_SERVER['QUERY_STRING']."   \n Old Password: ".$oldPass);
    echo "Password has been emailed to the appropriate people.";
}

if ($_GET['updatekey'] && $_GET['pass'] == $oldPass) {
    $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';//all possible chars
    $newKey = '';
    $max = strlen($characters) - 1;
    for ($i = 0; $i < 256; $i++) {
        $newKey .= $characters[mt_rand(0, $max)];
    }
    $keyFile = fopen("../privateKey.txt", "w");
    fwrite($keyFile, $newKey);
    fclose($keyFile);
    echo "Key has been changed. Only the server has access to it.<br>";
    echo $newKey;
}

sleep(5);