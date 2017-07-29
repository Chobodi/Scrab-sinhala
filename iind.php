<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/frank.css" rel="stylesheet">


<!-- BEGIN Letter Color when mouse enter-->
	<script src="jquery-2.2.4.min.js">  </script>
	<script src="js/jquery.js"></script>
	<script src="js/frank.js"></script>

    <script type="text/javascript" src="js/TimeCircles.js"></script>
    <link rel="stylesheet" href="css/TimeCircles.css" />
    <script src="dist/sweetalert-dev.js"></script>
  	<link rel="stylesheet" href="dist/sweetalert.css">

    <script type="text/javascript" src="jquery-2.0.3.js"></script>
    <script type="text/javascript" src="jquery.countdownTimer.js"></script>
    <link rel="stylesheet" type="text/css" href="jquery.countdownTimer.css" />
</head>

<body onload="checkWord_p1(); player1_alert(); p1_timer_onload();">
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
                    	<div id="PageOpenTimer" style="width: 350px; height: 87px; float: left"></div>
					    <table style="border:0px;">
					        <tr>
					            <td style="width:60px;text-align:center;">Days</td>
					            <td style="width:70px;text-align:center;">Hours</td>
					            <td style="width:60px;text-align:center;">Minutes</td>
					            <td style="width:70px;text-align:center;">Seconds</td>
					        </tr>
					        <tr>
					            <td colspan="4"><span id="given_date"></span></td>
					        </tr>
					    </table>
					    <script>
					        $(function(){
					            $('#given_date').countdowntimer({
					                startDate : "2014/10/01 00:00:00",
					                dateAndTime : "2015/01/01 00:00:00",
					                size : "lg"
					            });
					        });
					    </script>
                    </div>
                </div>
            </div>
        </div>
		
		<div class="raw">
			<div class="col-md-3"><!-- PLAYER ONE PART -->
				<?php include 'P1Characters.php'; ?>
			</div>

			<div class="col-md-6">
				<?php include 'gameBoard.php'; ?>			
			</div>

			<div class="col-md-3"><!-- PLAYER TWO PART -->
				<?php include 'P2Characters.php'; ?>	
				<table id="demo"></table>
		        <div id="my"></div>
		        <div id="temp1"></div>
		        <div id="temp2"></div>
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
</body>
</html>