<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <link rel="apple-touch-icon" sizes="76x76" href="images/logo3.png">
  <link rel="icon" type="image/png" href="images/logo3.png">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title></title>

  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />

  <!--     Fonts and icons     -->
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.css" rel="stylesheet">

  <!-- CSS Files -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
  <link href="assets/css/gsdk-bootstrap-wizard.css" rel="stylesheet" />
<script src="sweetalert/sweetalert2-master/dist/sweetalert2.min.js"></script>
    <link rel="stylesheet" type="text/css" href="sweetalert/sweetalert2-master/dist/sweetalert2.css">
  
</head>

<body>
<div class="image-container set-full-height" style="background-image: url('Images/scrabble.PNG')">
    <!--   Creative Tim Branding   -->
    <a href="">
         <div class="logo-container">
            <div class="logo">
                <img src="images/logo3.png">
            </div>
            
        </div>
    </a>

  <!--  Made With Get Shit Done Kit  -->
   

    <!--   Big container   -->
    <div class="container">
        <div class="row">
        <div class="col-sm-8 col-sm-offset-2">

            <!--      Wizard container        -->
            <div class="wizard-container">

                <div class="card wizard-card" data-color="black" id="wizardProfile">
                    <form action="index.php" method="POST">
                <!--        You can switch ' data-color="orange" '  with one of the next bright colors: "blue", "green", "orange", "red"          -->

                      <div class="wizard-header">
                          <h3>
                             <center><img src="Images/logo.png"></center>
                             <center><b>Please Login to the system</b></center>
                          </h3>
                      </div>

            <div class="wizard-navigation" id="navi">
              <ul>
                              <li><a href="#about" data-toggle="tab"></a></li>
                              
                              <!--li><a href="#address" data-toggle="tab"></a></li-->
                          </ul>

            </div>

                        <div class="tab-content">
                            <div class="tab-pane" id="about">
                              <div class="row">
                                  <h4 class="info-text"></h4>
                                  <div class="col-sm-4 col-sm-offset-1">
                                     <div class="picture-container">
                                         
                                      </div>
                                  </div>
                                  <div class="col-sm-12">
                                  
                                  <form action="loginAction.php" method="post">
                                      <div class="form-group">
                                        <label>username<small></small></label>
                                        <input name="username" type="text" class="form-control" placeholder="Andrew...">
                                      </div>
                                      <div class="form-group">
                                        <label>password <small></small></label>
                                        <input name="password" type="password" class="form-control" placeholder="">
                                      </div>
                                      <div class="pull-right">
                                        <input type='submit' class='btn btn-finish btn-fill btn-default btn-wd btn-sm' name='login' value='Login'/>
                                      </div>
                                  </form>
                                  </div>
                                  
      
                              </div>
                            </div>
                            
                            

                            <br>
                            <br>
                            <div>
                               <center><i>Still don't have an account</i><b><a href="register.php"> Register </b></a></center>
                            </div>

                        </div>
                        <div class="wizard-footer height-wizard">
                           

                            
                            <div class="clearfix"></div>
                        </div>

                    </form>
                </div>
            </div> <!-- wizard container -->
        </div>
        </div><!-- end row -->
    </div> <!--  big container -->

   

</div>

</body>


  <!--   Core JS Files   -->
  <script src="assets/js/jquery-2.2.4.min.js" type="text/javascript"></script>
  <script src="assets/js/bootstrap.min.js" type="text/javascript"></script>
  <script src="assets/js/jquery.bootstrap.wizard.js" type="text/javascript"></script>

  <!--  Plugin for the Wizard -->
  <script src="assets/js/gsdk-bootstrap-wizard.js"></script>

  <!--  More information about jquery.validate here: http://jqueryvalidation.org/  -->
  <script src="assets/js/jquery.validate.min.js"></script>

</html>

<?php


require_once './db/dbConnection.php';

session_start();
// checking the user

if (isset($_POST['login'])) {

    $username = mysqli_real_escape_string($conn, $_POST['username']);

    $password = mysqli_real_escape_string($conn, $_POST['password']);

    //search user

    $sel_user = "select * from user where username='$username' AND password='$password'";

    $run_user = mysqli_query($conn, $sel_user);

    $check_user = mysqli_num_rows($run_user);

    

    //check user

    if ($check_user==1) {

        echo "<script>alert('Login Success!')</script>";
        echo '<script type="text/javascript">window.location="user_home.php";</script>';
    }

    elseif($username == 'admin' && $password == 'admin'){

        echo "<script>alert('Login Success!')</script>";
        echo '<script type="text/javascript">window.location="admin.php";</script>';
    }

    else {
            echo "<script>alert('Email or password is not correct, try again!')</script>";
        }
}


?>
        

       
