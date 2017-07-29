
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    

    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />

    <!--     Fonts and icons     -->
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.css" rel="stylesheet">

    <!-- CSS Files -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
    <link href="assets/css/gsdk-bootstrap-wizard.css" rel="stylesheet" />

    <!-- CSS Just for demo purpose, don't include it in your project -->
    <link href="assets/css/demo.css" rel="stylesheet" />
    <link href="assets/css/w3school.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">

<script src="https://use.fontawesome.com/710c522def.js"></script>
<link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">


      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
      <style type="text/css">
          #btn_dic{
            margin-top: 3%;
          }
      </style>
</head>

<body>
<div class="image-container set-full-height" style="background-image: url('assets/img/scrab.jpg')">
    <!--   Creative Tim Branding   -->
    
    <!--  Made With Get Shit Done Kit  -->
        
    <!--   Big container   -->
    <div class="container">
        <div class="row">
        <div class="col-sm-8 col-sm-offset-2">

            <!--      Wizard container        -->
            <div class="wizard-container">

                <div class="card wizard-card" data-color="red" id="wizardProfile">
                    <form action="userregister.php" method="post">
                <!--   colors: "blue", "green", "orange", "red"   -->

                        <div class="wizard-header">
                            <h5 class="center">
                               Registration Form <br>
                               <small></small>
                            </h5>
                        </div>

                        <div class="wizard-navigation">
                            <ul>
                                <li><a href="#about" data-toggle="tab"></a></li>
                               
                            </ul>

                        </div>

                        <div class="tab-content">
                             <div class="tab-pane" id="about">
                                
                                <div class="row">
                                        <!--change index1.php-->
                                    <div class="col-sm-10 col-sm-offset-1">

                                     
                                     
                                     <div class="form-group">
                                        <label>Name</label>
                                        <input  id="name" name="name" type="text" class="form-control"/>
                                      </div>
                                      <div class="form-group">
                                        <label>Username</label>
                                        <input  id="username" name="username" type="text" class="form-control"/>
                                      </div>
                                      <div class="form-group">
                                        <label>Password</label>
                                        <input  id="password" name="password" type="password" class="form-control"/>
                                      </div>
                                      <div class="form-group">
                                        <label>Confirm Password</label>
                                        <input id="cpassword" name="cpassword" type="password" class="form-control"/>
                                      </div>
                                      
                                       
                                    </div>
                                    <div class="pull-right">
                                    <button class="waves-effect reject waves-light btn " name="register" type="submit"/>Register</button>

                                    </div>
                                
                                </div>
                            </div>                            
                        </div>
                    </form>
                </div>
            </div> <!-- wizard container -->
        </div>
        </div><!-- end row -->
    </div> <!--  big container -->

    

</div>



    <!--   Core JS Files   -->
    <script src="assets/js/jquery-2.2.4.min.js" type="text/javascript"></script>
    <script src="assets/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="assets/js/jquery.bootstrap.wizard.js" type="text/javascript"></script>

    <!--  Plugin for the Wizard -->
    <script src="assets/js/gsdk-bootstrap-wizard.js"></script>

    <!--  More information about jquery.validate here: http://jqueryvalidation.org/  -->
    <script src="assets/js/jquery.validate.min.js"></script>
</body>
</html>



