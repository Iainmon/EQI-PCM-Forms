<?php

$privateKey = file_get_contents("../privateKey.txt"); //prevents debug
$password = file_get_contents("../password.txt"); //prevents debug

if ($_COOKIE['privateKey'] == $privateKey) {
    header('Location: '.'index.php');
    die();
}
if ($_POST['password'] == $password) {
    setcookie('privateKey', $privateKey, time() + (86400 * 30), "/", $_SERVER['SERVER_NAME'], true, true); // 86400 = 1 day
    header('Location: '.'index.php');
    die();
}
$correctPass = ($_POST['password'] != $password) ? true : false;
?>
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <style>
        html,
        body {
            height: 100%;
        }

        body {
            display: -ms-flexbox;
            display: -webkit-box;
            display: flex;
            -ms-flex-align: center;
            -ms-flex-pack: center;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            padding-top: 40px;
            padding-bottom: 40px;
            background-color: #f5f5f5;
        }

        .form-signin {
            width: 100%;
            max-width: 330px;
            padding: 15px;
            margin: 0 auto;
        }
        .form-signin .checkbox {
            font-weight: 400;
        }
        .form-signin .form-control {
            position: relative;
            box-sizing: border-box;
            height: auto;
            padding: 10px;
            font-size: 16px;
        }
        .form-signin .form-control:focus {
            z-index: 2;
        }
        .form-signin input[type="email"] {
            margin-bottom: -1px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
        }
        .form-signin input[type="password"] {
            margin-bottom: 10px;
        }

    </style>
</head>
<body class="text-center">
    <form action="#" class="form-signin">
        <img class="mb-4" src="https://www.enviroquestinc.com/wp-content/uploads/EQlogotypex150.png" alt="" width="110" height="72">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputPassword" class="sr-only">Password</label>
        <input name="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted">© 2018-2020</p>
    </form>


</body>
