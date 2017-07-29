function TimeOut_Sound(){
  var audio3 = document.getElementById('sound3');
  audio3.play();

}

$("#PageOpenTimer").TimeCircles({ time: { Days: { show: false } }});
var timer1;
function myfun1(){

    $("#CountDownTimer1").attr("data-timer", 60);
    $("#CountDownTimer1").TimeCircles({ time: { Days: { show: false }, Hours: { show: false }, Minutes: { show: false } }});
    $("#DateCountdown").TimeCircles();
    
    
    var updateTime = function(){
        var date = $("#date").val();
        var time = $("#time").val();
        var datetime = date + ' ' + time + ':00';
        $("#DateCountdown").data('date', datetime).TimeCircles().start();
    }
    $("#date").change(updateTime).keyup(updateTime);
    $("#time").change(updateTime).keyup(updateTime);

    timer1 = setTimeout(function() {
        $("#CountDownTimer1").TimeCircles().stop();
        p1_pass();
    },60000);
}
function myfun11(){

    $("#CountDownTimer1").attr("data-timer", 60);
    $("#CountDownTimer1").TimeCircles({ time: { Days: { show: false }, Hours: { show: false }, Minutes: { show: false } }});
    $("#DateCountdown").TimeCircles();
    
    
    var updateTime = function(){
        var date = $("#date").val();
        var time = $("#time").val();
        var datetime = date + ' ' + time + ':00';
        $("#DateCountdown").data('date', datetime).TimeCircles().start();
    }
    $("#date").change(updateTime).keyup(updateTime);
    $("#time").change(updateTime).keyup(updateTime);

}

var timer2;
function myfun2() {

    $("#CountDownTimer2").attr("data-timer", 60);
    $("#CountDownTimer2").TimeCircles({ time: { Days: { show: false }, Hours: { show: false }, Minutes: { show: false } }});
    $("#DateCountdown").TimeCircles();
    
    
    var updateTime = function(){
        var date = $("#date").val();
        var time = $("#time").val();
        var datetime = date + ' ' + time + ':00';
        $("#DateCountdown").data('date', datetime).TimeCircles().start();
    }
    $("#date").change(updateTime).keyup(updateTime);
    $("#time").change(updateTime).keyup(updateTime);

    timer2 = setTimeout(function() {
        $("#CountDownTimer2").TimeCircles().stop();
        p2_pass();
    },60000);
}

function myfun22() {

    $("#CountDownTimer2").attr("data-timer", 60);
    $("#CountDownTimer2").TimeCircles({ time: { Days: { show: false }, Hours: { show: false }, Minutes: { show: false } }});
    $("#DateCountdown").TimeCircles();
    
    
    var updateTime = function(){
        var date = $("#date").val();
        var time = $("#time").val();
        var datetime = date + ' ' + time + ':00';
        $("#DateCountdown").data('date', datetime).TimeCircles().start();
    }
    $("#date").change(updateTime).keyup(updateTime);
    $("#time").change(updateTime).keyup(updateTime);

}

var p1timerl;
function p1_timer_onload(){
  myfun1();
  myfun22();
  $("#CountDownTimer2").TimeCircles().stop();
  p1timerl = setTimeout(function(){
    p2_timer_on();
    TimeOut_Sound();
  },60000);
  
}

var p2timer;
function p2_timer_on() {
  $("#CountDownTimer2").TimeCircles().start();
  $("#CountDownTimer2").TimeCircles().restart();
  myfun2(); 
  //myfun11();
  $("#CountDownTimer1").TimeCircles().stop();
  p2timer = setTimeout(function(){
    p1_timer_on();
    TimeOut_Sound();
  },60000);
}

var p1timer;
function p1_timer_on() {
  $("#CountDownTimer1").TimeCircles().start();
  $("#CountDownTimer1").TimeCircles().restart();
  myfun1();
  //myfun22();
  $("#CountDownTimer2").TimeCircles().stop();
  p1timer = setTimeout(function(){
    p2_timer_on();
    TimeOut_Sound();
  },60000);
}

function p2_timer_when_p1_pass() {
    $("#CountDownTimer1").TimeCircles().restart();//awl nm ainkaranna
    $("#CountDownTimer1").TimeCircles().stop();//awl nm ainkaranna
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(p1timerl);
    clearTimeout(p1timer);
    clearTimeout(p2timer);
    p2_timer_on(); 
}  

function p1_timer_when_p2_pass() {
    $("#CountDownTimer2").TimeCircles().restart();//awl nm ainkaranna
    $("#CountDownTimer2").TimeCircles().stop();//awl nm ainkaranna
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(p1timerl);
    clearTimeout(p1timer);
    clearTimeout(p2timer);
    p1_timer_on(); 
}      
