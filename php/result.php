<?php
session_start();
// require "safe.php";
require "routing.php";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = ($_POST["email"]);
    $password = ($_POST["password"]);
    $databaseUser = 'b201210037@sakarya.edu.tr';
    $databasePass = 'b201210037';

    if ($databaseUser != $username || $databasePass != $password) {
        echo ("<h2>Girmiş Olduğunuz E-mail veya Şifreniz yanlış Giriş Sayfasına Yönlendiriliyorsunuz...");
        comeBack(3);
    } else {
        $_SESSION["LogedIn"] = true;
        $_SESSION["email"] = $username;
        $_SESSION["LoginIP"] = $_SERVER["REMOTE_ADDR"];
        $_SESSION["userAgent"] = $_SERVER["HTTP_USER_AGENT"];
        echo ("<h1>Hoşgeldiniz b201210037");
        // header("refresh:3;url= https://venerable-starlight-1d3f97.netlify.app/html%20dosyalar%C4%B1/homepage%22");
    }
}


?>

    