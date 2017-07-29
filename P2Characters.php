<div class="row"> 
    <div id="CountDownTimer2" style="width: 300px; height: 75px;"></div> 
    <div class="panel panel-info">
        <div class="panel-heading"> 
            <center><h3> PLAYER 2 </h3></center>
        </div>
        <div class="panel-body">
                <center>
                    <div class="row">
                        <audio id="beep1" preload="auto"><source src="audio/beep.mp3"> </source></audio>
                        <div class="c s" ondrop="drop(event)" ondragover="allowDrop(event)">
                          <span style="cursor:pointer"><font size="5px"ondragstart="dragStart(event); getFontID(this);" draggable="true" id="dragtarget7"></font></span>
                        </div>
                        <div class="c s" ondrop="drop(event)" ondragover="allowDrop(event)">
                          <span style="cursor:pointer"><font size="5px" ondragstart="dragStart(event); getFontID(this);" draggable="true" id="dragtarget8"></font></span>
                        </div>
                        <div class="c s" ondrop="drop(event)" ondragover="allowDrop(event)">
                          <span style="cursor:pointer"><font size="5px" ondragstart="dragStart(event); getFontID(this);" draggable="true" id="dragtarget9"></font></span>
                        </div>
                        <div class="c s" ondrop="drop(event)" ondragover="allowDrop(event)">
                          <span style="cursor:pointer"><font size="5px" ondragstart="dragStart(event); getFontID(this);" draggable="true" id="dragtarget10"></font></span>
                        </div>
                        <div class="c s" ondrop="drop(event)" ondragover="allowDrop(event)">
                          <span style="cursor:pointer"><font size="5px" ondragstart="dragStart(event); getFontID(this);" draggable="true" id="dragtarget11"></font></span>
                        </div>
                        <div class="c s" ondrop="drop(event)" ondragover="allowDrop(event)">
                          <span style="cursor:pointer"><font size="5px" ondragstart="dragStart(event); getFontID(this);" draggable="true" id="dragtarget12"></font></span>
                        </div>
                    </div>
                    <div class="row">
                        <p></p>
                        <button type="submit" class="btn btn-default s" onclick="p2_ok_btnAction();">OK</button>
                        <button type="submit" class="btn btn-default s" onclick="p1_timer_when_p2_pass(); p2_pass();">PASS</button>
                    </div>
                </center> 
        </div>
    </div>
</div>
<br></br>

<div class="row">
    <div class="panel panel-info">
        <div class="panel-heading">
            <center><h3> YOUR SCORE </h3></center>
        </div>
        <div class="panel-body">
            <center><input id="P2lakunu" value="" disabled></center>
        </div>
    </div>
</div>
<script>
var beepSound = $("#beep1")[0];
$(".s").mouseenter(function(){
    beepSound.play();
});
</script>