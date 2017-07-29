<div class="row">   
<div id="CountDownTimer1" style="width: 300px; height: 75px;"></div>
    <div class="panel panel-danger">
        <div class="panel-heading"> 
            <center><h3> PLAYER 1 </h3></center>
        </div>
        <div class="panel-body">
                <center>
                    <div class="row">
                        <audio id="beep1" preload="auto"><source src="audio/beep.mp3"> </source></audio>
                        <div class="c s" ondrop="drop(event)" ondragover="allowDrop(event)">
                          <span style="cursor:pointer"><font size="5px"ondragstart="dragStart(event); getFontID(this);" draggable="true" id="dragtarget1"></font>
                        </div>
                        <div 
                        class="c s" ondrop="drop(event)" ondragover="allowDrop(event)">
                          <span style="cursor:pointer"><font size="5px" ondragstart="dragStart(event); getFontID(this);" draggable="true" id="dragtarget2"></font></span>
                        </div>
                        <div class="c s" ondrop="drop(event)" ondragover="allowDrop(event)">
                          <span style="cursor:pointer"><font size="5px" ondragstart="dragStart(event); getFontID(this);" draggable="true" id="dragtarget3"></font></span>
                        </div>
                        <div class="c s" ondrop="drop(event)" ondragover="allowDrop(event)">
                          <span style="cursor:pointer"><font size="5px" ondragstart="dragStart(event); getFontID(this);" draggable="true" id="dragtarget4"></font></span>
                        </div>
                        <div class="c s" ondrop="drop(event)" ondragover="allowDrop(event)">
                          <span style="cursor:pointer"><font size="5px" ondragstart="dragStart(event); getFontID(this);" draggable="true" id="dragtarget5"></font></span>
                        </div>
                        <div class="c s" ondrop="drop(event)" ondragover="allowDrop(event)">
                          <span style="cursor:pointer"><font size="5px" ondragstart="dragStart(event); getFontID(this);" draggable="true" id="dragtarget6"></font></span>
                        </div>
                    </div>
                    <div class="row">
                        <p></p>
                        
                        <button type="submit" class="btn btn-default s" onclick="p1_ok_btnAction();">OK</button>
                        <button type="submit" class="btn btn-default s" onclick="p2_timer_when_p1_pass(); p1_pass();">PASS</button>
                    </div>
                </center> 
        </div>
    </div>
</div>
<br></br>

<div class="row">
    <div class="panel panel-danger">
        <div class="panel-heading">
            <center><h3> YOUR SCORE </h3></center>
        </div>
        <div class="panel-body">
            <center><input  id="P1lakunu" value="" disabled></center>
        </div>
    </div>
</div>
<script>
var beepSound = $("#beep1")[0];
$(".s").mouseenter(function(){
    beepSound.play();
});
</script>