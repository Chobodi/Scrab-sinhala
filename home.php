<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/frank.css" rel="stylesheet">
   
<!--nsh -->
     <link href="css/w3school.css" rel="stylesheet">
	<!--     Fonts and icons     -->
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.css" rel="stylesheet">

	<!-- CSS Files -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
	<link href="assets/css/gsdk-bootstrap-wizard.css" rel="stylesheet" />

	<!-- CSS Just for demo purpose, don't include it in your project -->
	<link href="assets/css/demo.css" rel="stylesheet" />

<!--nsh -->
<!-- BEGIN Letter Color when mouse enter-->
	<script src="jquery-2.2.4.min.js">  </script>
	<script src="js/jquery.js"></script>
	<script src="js/frank.js"></script>

    <script type="text/javascript" src="js/TimeCircles.js"></script>
    <link rel="stylesheet" href="css/TimeCircles.css" />
    <script src="dist/sweetalert-dev.js"></script>
  	<link rel="stylesheet" href="dist/sweetalert.css">

</head>

<body >
	<div class="container">
        <div class="page-header col-md-12"><!--Page Header  -->
            <div class="header">
                <div class="row">
                    <div class="col-md-3">
                        <button class="btn btn-default" id="Ply1" onclick="newGame()">PLAY NOW</button>
                    </div>
                    <div class="col-md-1">
                    <img src="images/two.png" width="75px" height="100px">
                    </div>
                    <div class="col-md-4">
                    <center><h2>SCRABBLE GAME</h2> </center>
                    </div>
                    <div class="col-md-1">
                    <img src="images/three.png" width="75px" height="100px">
                    </div>
                    <div class="col-md-3">
                    	<!--div id="PageOpenTimer" style="width: 350px; height: 87px; float: left"></div-->
                    </div>
                </div>
            </div>
        </div>
		
		<div class="raw">
			<div class="col-md-3"><!-- PLAYER ONE PART -->
				one
                <div class="round-button">
    <a href="http://example.com">
        <img src="images/two.png" alt="Home" />
    </a>
</div>
			</div>

			<div class="col-md-6">
						
						<img src="images/three.png" width="75px" height="100px">

						<div class="col-md-12">
						<!--.btn-default:active,
.btn-primary:active,
.btn-success:active,
.btn-info:active,
.btn-warning:active,
.btn-danger:active,
.btn-default.active,
.btn-primary.active,
.btn-success.active,
.btn-info.active,
.btn-warning.active,
.btn-danger.active-->
                        <button class="btn btn-primary" id="Grade 1" onclick="newGame()">Grade 1</button>
                        <button class="btn btn-info" id="Grade 1" onclick="newGame()">Grade 2</button>
                        <button class="btn btn-warning" id="Grade 1" onclick="newGame()">Grade 3</button>
                         <button class="btn btn-success" id="Grade 1" onclick="newGame()">Grade 3</button>
                         
    <div class="container">
        <div class="row">
        <div class="col-sm-8 col-sm-offset-2">

            <!--      Wizard container        -->
            <div class="wizard-container">

                <div class="card wizard-card" data-color="orange" id="wizardProfile">
                    <form action="" method="">
                <!--        You can switch ' data-color="orange" '  with one of the next bright colors: "blue", "green", "orange", "red"          -->

                    
						<div class="wizard-navigation">
							<ul>
	                            <li><a href="#about" data-toggle="tab">About</a></li>
	                            <li><a href="#account" data-toggle="tab">Account</a></li>
	                            <li><a href="#address" data-toggle="tab">Address</a></li>
	                        </ul>

						</div>

                        <div class="tab-content">
                           
                            <div class="tab-pane" id="About">
                                
                                <div class="row">

                                    <div class="col-sm-10 col-sm-offset-1">
                                        <div class="col-sm-4">
                                            <div class="choice" data-toggle="wizard-checkbox">
                                                <input type="checkbox" name="jobb" value="Design">
                                                <div class="icon">
                                                    <i class="fa fa-pencil"></i>
                                                </div>
                                                <h6>Design</h6>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="choice" data-toggle="wizard-checkbox">
                                                <input type="checkbox" name="jobb" value="Code">
                                                <div class="icon">
                                                    <i class="fa fa-terminal"></i>
                                                </div>
                                                <h6>Code</h6>
                                            </div>

                                        </div>
                                        <div class="col-sm-4">
                                            <div class="choice" data-toggle="wizard-checkbox">
                                                <input type="checkbox" name="jobb" value="Develop">
                                                <div class="icon">
                                                    <i class="fa fa-laptop"></i>
                                                </div>
                                                <h6>Develop</h6>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            </div>
    					</form>
    					</div>
    					</div>
    					</div>
    					</div>
    					</div>
                         
                    </div>
                    </div>
			</div>

			<div class="col-md-3"><!-- PLAYER TWO PART -->
					three
				<table id="demo"></table>
		        <div id="my">my</div>
		        <div id="temp1">temp1</div>
		        <div id="temp2">temp2</div>
		        <div id="temp3" value=""></div>
		        <div id="out"></div>
		        <p id="word"></p>

		        <p id="ccc"></p>
		        <p id="ddd"></p>
		        <p id="eee"></p>
		        <p id="fff"></p>
		        <p id="ggg"></p>
		        <p id="hhh"></p>
		        <p id="qqq"></p>
		        <audio id="sound1" src="audio/buttonok.mp3"></audio>
		        <audio id="sound2" src="audio/error.mp3"></audio>
		        <audio id="sound3" src="audio/timeout.mp3"></audio>
			</div>
		</div>
	</div>
    <script src="js/Timer_frank.js"></script>
    <!--nsh -->

	<!--   Core JS Files   -->
	<script src="assets/js/jquery-2.2.4.min.js" type="text/javascript"></script>
	<script src="assets/js/bootstrap.min.js" type="text/javascript"></script>
	<script src="assets/js/jquery.bootstrap.wizard.js" type="text/javascript"></script>

	<!--  Plugin for the Wizard -->
	<script src="assets/js/gsdk-bootstrap-wizard.js"></script>

	<!--  More information about jquery.validate here: http://jqueryvalidation.org/	 -->
	<script src="assets/js/jquery.validate.min.js"></script>
<!--nsh -->
</body>



</html>