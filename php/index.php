<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Css DosyalarÄ±/Login.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />

    <title>Login Form</title>
    <style>
        body {
            height: 100vh;
            background: #131034 !important;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .card {
            overflow: hidden;
            border: 0 !important;
            border-radius: 20px !important;
            box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
        }

        .img-left {
            width: 45%;
            background: url('https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?cs=srgb&dl=pexels-benjamin-suter-3617500.jpg&fm=jpg');
            background-size: cover;
        }

        .card-body {
            padding: 2rem;

        }

        .title {
            margin-bottom: 2rem;
        }

        .form-input {
            position: relative;
        }

        .form-input input {
            width: 100%;
            height: 45px;
            padding-left: 40px;
            margin-bottom: 20px;
            box-sizing: border-box;
            box-shadow: none;
            border: 1px solid #00000020;
            border-radius: 50px;
            outline: none;
            background: transparent;
        }

        .form-input span {
            position: absolute;
            top: 10px;
            padding-left: 15px;
            color: #007bff;
        }

        .form-input input::placeholder {
            color: black;
            padding-left: 0px;

        }

        .form-input input:focus,
        .form-input input:valid {
            border: 2px solid;
        }

        .form-input input:focus::placeholder {
            color: #454b69;
        }

        .custom-checkbox .custom-control-input:checked~.custom-control-label::before {
            background-color: #007bff !important;
            border: 0px;

        }

        .form-box button[type="submit"] {
            margin-top: 10px;
            border: none;
            cursor: pointer;
            border-radius: 50px;
            background: #007bff;
            color: #fff;
            font-size: 90%;
            font-weight: bold;
            letter-spacing: .1rem;
            transition: 0.5s;
            padding-left: 220px;
            padding-right: 220px;
            padding-top: 12px;
            padding-bottom: 12px;


        }

        .form-box button[type="submit"]:hover {
            background: #0069d9;
        }
    </style>

</head>

<body onload="getcookiedata()">
    <div class="container">
        <div class="row px-3">
            <div class="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
                <div class="img-left d-none d-md-flex"></div>


                <div class="card-body">
                    <h4 class="title tex-center mt-4">
                        Login Into Account
                    </h4>
                    <form class="form-box px-3" method="post" action="<?php echo htmlspecialchars("result.php"); ?> ">
                        <div class="form-input">
                            <span><i class="fa-solid fa-envelope"></i></span>
                            <input type="email" placeholder="Email Address" name="email" tabindex="10" id="username" required>
                        </div>

                        <div class="form-input">
                            <span><i class="fa fa-key"></i></span>
                            <input type="password" placeholder="Password" name="password" id="password" required>
                        </div>
                        <div class="mb-3">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="cb1" onclick="setcookie()">
                                <label class="custom-control-label" for="cb1">Remember Me</label>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button type="submit" class="btn btn-block text-uppercase">Login</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>

    </div>

    <script>
        function setcookie() {
            var u = document.getElementById('username').value;
            var p = document.getElementById('password').value;
            document.cookie = "myusrname=" + u + ";path=http://localhost/PHP/WEB%20Proje/";
            document.cookie = "mypswd=" + p + ";path=http://localhost/PHP/WEB%20Proje/";
        }

        function getcookiedata() {
            var user = getCookie('myusrname');
            var pswd = getCookie('mypswd');
            document.getElementById('username').value = user;
            document.getElementById('password').value = pswd;
        }

        // function getCookie(cname) {
        //     var name = cname + "=";
        //     var decodedCookie = decodeURIComponent(document.cookie);
        //     var ca = decodedCookie.split(';');
        //     for (var i = 0; i < ca.length; i++) {
        //         var c = ca[i];
        //         while (c.charAt(0) == ' ') {
        //             c = c.substring(1);
        //         }
        //         if (c.indexOf(name) == 0) {
        //             return c.substring(name.length, c.length);
        //         }
        //     }
        //     return "";
        // }
    </script>




    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>

</html>