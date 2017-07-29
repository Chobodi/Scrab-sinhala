  $(document).ready(function(){
    $(".c").on({
      mouseenter: function(){
        $(this).css("background-color","#fe3ef7");
      },
      mouseleave: function(){
        $(this).css("background-color","white");
      }
      
    });
  });

  //Sound Function Start
function correct_Word_Sound(arrayC){
  var audio1 = document.getElementById('sound1');
  audio1.play();
  swal("සාර්ථකයි", "ඔබ ඇතුලත් කල '"+arrayC +"' වචනය නිවැරදි. ", "success");
}
function wrong_Word_Sound(arrayW){
  var audio2 = document.getElementById('sound2');
  audio2.play();
  swal("කණගාටුයි", "ඔබ ඇතුලත් කල  '"+ arrayW + "' නිවැරදි නොවේ. ", "error");
}

//Sound Function End
      /* Event fired on the drag target */
    function dragStart(event) {
        event.dataTransfer.setData("Text", event.target.id);
        //document.getElementById("demo").innerHTML = "Started to drag the letter";
        $("#demo").attr("value", event.target.id); //pass id as demo value, to check font value when drop
    }

    /* Events fired on the drop target */
    function allowDrop(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
    }

    function getFontID(event) {
        var y = $(event).attr("id");//set font id
        $("#out").attr("value", y);//change value of div=out
    }
    function setValueToPuzzel(event) { //WHEN DROP FONT TO PUZZEL  
        var t = $(event).attr("id");//t=1_2|1_1....
        var r = document.getElementById("out").getAttribute('value');//set div=out value to r, r=dragtarget1|dragtarget1....
        document.getElementById(t).value = document.getElementById(r).getAttribute('value');//set value to puzzzel squre
        var x = document.getElementById(t).value;//set puzzel squre value to var x
        //document.getElementById("my").innerHTML = t;//set x value to div=my
        $("#my").attr("value", t);
        var u = '#'.concat(t);// set like #p1
        $(u).attr("value", x);// x= A/B/C Then set puzzel value to x
        document.getElementById(t).innerHTML = x;

        if (r == document.getElementById("demo").getAttribute('value')) {
          document.getElementById(r).innerHTML = null;
          document.getElementById(r).value = null;  //if have any problem ->$(u).attr("value", x);    
        }
        //puzzel position tika save kireema
        var temp = document.getElementById("temp1").getAttribute('value');

        if(temp == null){
          $("#temp1").attr("value", t);
        }else{
          var tt = temp.concat("@"+t);
          $("#temp1").attr("value", tt);
        }

        //document.getElementById("eee").innerHTML = document.getElementById("temp1").getAttribute('value');
        //var possible_place_array = [];
        //possible_place_array.push(t);

        //font id tika save kireema
        var temp2 = document.getElementById("temp2").getAttribute('value');

        if(temp2 == null){
          $("#temp2").attr("value", r);
        }else{
          var rr = temp2.concat("@"+r);
          $("#temp2").attr("value", rr);
        }
    }



    function p1_pass(){
      
      document.getElementById("dragtarget1").innerHTML = null;
      $("#dragtarget1").attr("value", null);
      document.getElementById("dragtarget2").innerHTML = null;
      $("#dragtarget2").attr("value", null);
      document.getElementById("dragtarget3").innerHTML = null;
      $("#dragtarget3").attr("value", null);
      document.getElementById("dragtarget4").innerHTML = null;
      $("#dragtarget4").attr("value", null);
      document.getElementById("dragtarget5").innerHTML = null;
      $("#dragtarget5").attr("value", null);
      document.getElementById("dragtarget6").innerHTML = null;
      $("#dragtarget6").attr("value", null);    
      checkWord_p2();

      var placed_position =  document.getElementById("temp1").getAttribute('value');
      var placed_position_array = placed_position.split("@");

      for (var i = 0; i < placed_position_array.length; i++) {
        document.getElementById(placed_position_array[i]).innerHTML = null;
        $("#"+placed_position_array[i]).attr("value", "");     
      }

      $("#temp1").attr("value", null);
      $("#temp2").attr("value", null);
    }
    function p2_pass(){

      document.getElementById("dragtarget7").innerHTML = null;
      $("#dragtarget7").attr("value", null);
      document.getElementById("dragtarget8").innerHTML = null;
      $("#dragtarget8").attr("value", null);
      document.getElementById("dragtarget9").innerHTML = null;
      $("#dragtarget9").attr("value", null);
      document.getElementById("dragtarget10").innerHTML = null;
      $("#dragtarget10").attr("value", null);
      document.getElementById("dragtarget11").innerHTML = null;
      $("#dragtarget11").attr("value", null);
      document.getElementById("dragtarget12").innerHTML = null;
      $("#dragtarget12").attr("value", null); 
      checkWord_p1();

      var placed_position =  document.getElementById("temp1").getAttribute('value');
      var placed_position_array = placed_position.split("@");

      for (var i = 0; i < placed_position_array.length; i++) {
        document.getElementById(placed_position_array[i]).innerHTML = null;
        $("#"+placed_position_array[i]).attr("value", "");     
      }

      $("#temp1").attr("value", null);
      $("#temp2").attr("value", null);
    }
    
    function checkWord_p1(){//challenge part
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          myFunction_p1(xmlhttp);
        }
      };
      xmlhttp.open("GET", "all_words.xml", true);
      xmlhttp.send();
    }


    function checkWord_p2(){//challenge part
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          myFunction_p2(xmlhttp);
        }
      };
      xmlhttp.open("GET", "all_words.xml", true);
      xmlhttp.send();
    }

  function isNotInArray(value, array) {//check whether  there is not element in array
      return array.indexOf(value) <= -1;
  }
  function isInArray(value, array) {//check whether  there is element in array
    return array.indexOf(value) > -1;
  }
  function shuffle(a) {//mixing array elements randomly
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
  }
  function concat_4_words(array) {//select 4 different random words from array and concat
    var array1=[];
    var i=0;
    var randomNumber;
    var word_concat="";

    while(array1.length < 4){
      randomNumber = Math.floor((Math.random() * 9909) + 1) - 1;

      if(isNotInArray(randomNumber, array1)){
        array1[i] = randomNumber;
        word_concat += array[randomNumber].childNodes[0].nodeValue;
        i++;
      }
    }
    return word_concat;
  }

  function sinhalaSplit (string, xmldoc) {
    var alphabet = xmldoc.getElementsByTagName("ALPHABET");//open xml ALPHABET tag
        var font_obj = alphabet[0].getElementsByTagName("FONTT");
    var temp_array = string.split("");
    
    var all_fonts = Object.keys(font_obj).map(function(k) { return font_obj[k].childNodes[0].nodeValue });//convert font_obj to an array
    var real_array=[];
    var checkElement = "";
    var k = temp_array.length;
    var l=0;
    while(k>0){
      checkElement = temp_array[k-1]+checkElement;
      if (isInArray(checkElement,all_fonts)){
        real_array[l] = checkElement;
        checkElement = "";
        l++;
      }    
      k--;
    }
    return real_array.reverse();
  }

  function get_font_6 (array) {
    var m=0,n=0;
    var font_6_array = [];
    while(m<6){
      if(!isInArray(array[n],font_6_array)){
        font_6_array[m] = array[n];
        m++;
      }
      n++;
    }
    shuffle(font_6_array);//mix array element
    return font_6_array;
  }

  function myFunction_p1(xml) {
    var i,j;
    var xmlDoc = xml.responseXML;  
    var x = xmlDoc.getElementsByTagName("WORD");//get word tag
    var all_words_array = x[0].getElementsByTagName("COMBINATION");//put all words to an array
    var stringss = concat_4_words(all_words_array);//concat word

    var split_array = sinhalaSplit (stringss, xmlDoc);
    var font_6_array = get_font_6(split_array);

    document.getElementById("dragtarget1").innerHTML = font_6_array[0];
    $("#dragtarget1").attr("value", font_6_array[0]);
    document.getElementById("dragtarget2").innerHTML = font_6_array[1];
    $("#dragtarget2").attr("value", font_6_array[1]);
    document.getElementById("dragtarget3").innerHTML = font_6_array[2];
    $("#dragtarget3").attr("value", font_6_array[2]);
    document.getElementById("dragtarget4").innerHTML = font_6_array[3];
    $("#dragtarget4").attr("value", font_6_array[3]);
    document.getElementById("dragtarget5").innerHTML = font_6_array[4];
    $("#dragtarget5").attr("value", font_6_array[4]);
    document.getElementById("dragtarget6").innerHTML = font_6_array[5];
    $("#dragtarget6").attr("value", font_6_array[5]);

  }
  function myFunction_p2(xml) {
    var i,j;
    var xmlDoc = xml.responseXML;  
    var x = xmlDoc.getElementsByTagName("WORD");//get word tag
    var all_words_array = x[0].getElementsByTagName("COMBINATION");//put all words to an array

    var stringss = concat_4_words(all_words_array);//concat word

    var split_array = sinhalaSplit (stringss, xmlDoc);
    var font_6_array = get_font_6(split_array);

    document.getElementById("dragtarget7").innerHTML = font_6_array[0];
    $("#dragtarget7").attr("value", font_6_array[0]);
    document.getElementById("dragtarget8").innerHTML = font_6_array[1];
    $("#dragtarget8").attr("value", font_6_array[1]);
    document.getElementById("dragtarget9").innerHTML = font_6_array[2];
    $("#dragtarget9").attr("value", font_6_array[2]);
    document.getElementById("dragtarget10").innerHTML = font_6_array[3];
    $("#dragtarget10").attr("value", font_6_array[3]);
    document.getElementById("dragtarget11").innerHTML = font_6_array[4];
    $("#dragtarget11").attr("value", font_6_array[4]);
    document.getElementById("dragtarget12").innerHTML = font_6_array[5];
    $("#dragtarget12").attr("value", font_6_array[5]);

  }
  function newGame() {
      location.reload();
  }
  function player1_alert() {
      swal("Hurry Up. Timer is on", " Player 1 please start the game ... ", "success");
  }

  Array.prototype.allValuesSame = function() {
      for(var i = 1; i < this.length; i++){
          if(this[i] !== this[0])
              return false;
      }
      return true;
  }
  var ttmm = 0;
  var ttmm2 = 0;
  function p1_ok_btnAction(){
    
    var miyuru = true;
    if((ttmm == 0) && (ttmm2 == 0)){
      miruru = true;
    }else{
      miyuru =  empty_check();
    }
    

    var temp1_value = document.getElementById("temp1").getAttribute('value');
    var n = temp1_value.includes("@");
    var arrayX_values = [];
    var arrayY_values = [];

    var temp1_array = [];     
      if(n) {
        temp1_array = temp1_value.split("@");
      }else{
        temp1_array = [temp1_value];
      }
     //document.getElementById("hhh").innerHTML = "aze->"+arrayX_values; 
      
    for (var i = 0; i < temp1_array.length; i++) {
      var point = temp1_array[i].split("_");
      arrayX_values[i] = Number(point[0]);
      arrayY_values[i] = Number(point[1]);  
    }

    arrayX_values.sort(function(a, b){return a-b});
    arrayY_values.sort(function(a, b){return a-b});

    //document.getElementById("fff").innerHTML = "aze->"+arrayX_values;
   

    var possible_words = [];
    var pw = 0;
    for (var i=arrayY_values.length; i>0;i--) {
      var puzzel_font_index = arrayX_values[i-1]+"_"+arrayY_values[i-1];//sa | sa
      var x = arrayX_values[i-1];//2
      var y = arrayY_values[i-1];//3
      
      var LR_x_val = [];
      var LR_y_val = [];

      var l = 1;
      var L_T = true;
      while(L_T){
        if((x-l) == 0){
          break;
        }
        var next_index = (x-l)+"_"+y;               
        var next_value = document.getElementById(next_index).getAttribute('value');
        if(next_value == ""){
          L_T = false;//break daanna
        }else{
          LR_x_val.push(x-l);
          LR_y_val.push(y);
          l++;  
        }
      }

      var r = 1;
      var R_T = true;
      while(R_T){
        if((x+r) == 12){
          break;
        }
        var next_index = (x+r)+"_"+y;       
        var next_value = document.getElementById(next_index).getAttribute('value');
        if(next_value == ""){
          R_T = false;
        }else{
          LR_x_val.push(x+r);
          LR_y_val.push(y);
          r++;
        }
      }

      var UD_x_val = [];
      var UD_y_val = [];

      var u = 1;
      var U_T = true;
      while(U_T){
        if((y-u) == 0){
          break;
        }
        var next_index = x+"_"+(y-u);
        var next_value = document.getElementById(next_index).getAttribute('value');
        if(next_value == ""){
          U_T = false;
        }else{
          UD_x_val.push(x);
          UD_y_val.push(y-u);
          u++;
        }
      }

      var d = 1;
      var D_T = true;
      while(D_T){
        if((y+d) == 12){
          break;
        }
        var next_index = x+"_"+(y+d);
        var next_value = document.getElementById(next_index).getAttribute('value');
        if(next_value == ""){
          D_T = false;
        }else{
          UD_x_val.push(x);
          UD_y_val.push(y+d);
          d++;
        }
      }

      var notPutSingleElement = true;
      if((l != 1) || (r != 1)){
        LR_x_val.push(x);
        LR_y_val.push(y);
        notPutSingleElement = false;
      }
      if((u != 1) || (d != 1)){
        UD_x_val.push(x);
        UD_y_val.push(y);
        notPutSingleElement = false;
      }

      if(notPutSingleElement && (LR_x_val.length==0 || LR_y_val.length==0)){
        LR_x_val.push(x);
        LR_y_val.push(y);
        notPutSingleElement = false;
      }

      if(notPutSingleElement && (UD_x_val.length==0 || UD_y_val.length==0)){
        UD_x_val.push(x);
        UD_y_val.push(y);
        notPutSingleElement = false;
      }

      LR_x_val.sort(function(a, b){return a-b});
      LR_y_val.sort(function(a, b){return a-b});
      UD_x_val.sort(function(a, b){return a-b});
      UD_y_val.sort(function(a, b){return a-b});

      var horizontal_word = "";
      for (var j = 0; j < LR_x_val.length; j++) {
        var hori_font_index = LR_x_val[j]+"_"+LR_y_val[j];
        var hori_value = document.getElementById(hori_font_index).getAttribute('value');  
        horizontal_word += hori_value;      
      }
      if(horizontal_word != ""){
        possible_words[pw] = horizontal_word;
        pw++;
      }
       
      var verticle_word = "";
      for (var k = 0; k < UD_x_val.length; k++) {
        var vert_font_index = UD_x_val[k]+"_"+UD_y_val[k];
        var vert_value = document.getElementById(vert_font_index).getAttribute('value');  
        verticle_word += vert_value;      
      }
      if(verticle_word != ""){
        possible_words[pw] = verticle_word; 
        pw++;
      }   
    }

    function get_uniq_word_array(a) {
        var seen = [];
        return a.filter(function(item) {
            return seen.hasOwnProperty(item) ? false : (seen[item] = true);
        });
    }
    var possible_words_uniq_array = get_uniq_word_array(possible_words);
    //document.getElementById("ddd").innerHTML = possible_words_uniq_array;

    //OPEN XML FILE and MAKE all_word_array
    var all_words_array = [];
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        var i;
        var xmlDoc = xhttp.responseXML;
        var x = xmlDoc.getElementsByTagName("WORD");
        var arro =x[0].getElementsByTagName("COMBINATION");

        for (var i = 0; i < arro.length; i++) {
          all_words_array[i] = arro[i].childNodes[0].nodeValue.toString();
        }

        
        var contain_array = [];
        var not_contain_array = [];
        for (var i = 0; i < possible_words_uniq_array.length; i++) {
          if (isInArray(possible_words_uniq_array[i], all_words_array)) {
            contain_array.push(possible_words_uniq_array[i]);
          }else{
            not_contain_array.push(possible_words_uniq_array[i]);
          }
        }
        //document.getElementById("eee").innerHTML = "contain words="+contain_array;
        //document.getElementById("ddd").innerHTML = LR_x_val; 
        if ((contain_array.length == possible_words_uniq_array.length) && miyuru) {
            ttmm++;
            //we give marks now
            var total;
            var get_current_total = document.getElementById("P1lakunu").getAttribute('value');
            if (get_current_total == "") {
              total = 0;
            }else{
              total = Number(get_current_total);
            }

            for (var i = 0; i < contain_array.length; i++) {
              for (var j = 0; j < contain_array[i].length; j++) {
                total += Math.pow(1, j) * (j+1)*3;
              }
            }
            $("#P1lakunu").attr("value", total);
           

          //started to check possible words that can be come
           // document.getElementById("ddd").innerHTML = contain_array+" is contain";
            //player1's fonts should be null
            document.getElementById("dragtarget1").innerHTML = null;
            $("#dragtarget1").attr("value", null);
            document.getElementById("dragtarget2").innerHTML = null;
            $("#dragtarget2").attr("value", null);
            document.getElementById("dragtarget3").innerHTML = null;
            $("#dragtarget3").attr("value", null);
            document.getElementById("dragtarget4").innerHTML = null;
            $("#dragtarget4").attr("value", null);
            document.getElementById("dragtarget5").innerHTML = null;
            $("#dragtarget5").attr("value", null);
            document.getElementById("dragtarget6").innerHTML = null;
            $("#dragtarget6").attr("value", null);

            p2_timer_when_p1_pass();
            checkWord_p2();//player2's fonts should be value
            correct_Word_Sound(contain_array);
            
            $("#temp1").attr("value", null);
            $("#temp2").attr("value", null);
        }else{
            //document.getElementById("eee").innerHTML = not_contain_array+" is not contain";
            //again set
            var placed_position =  document.getElementById("temp1").getAttribute('value');
            var drag_target =  document.getElementById("temp2").getAttribute('value');
            var drag_target_array = drag_target.split("@");
            var placed_position_array = placed_position.split("@");

            for (var i = 0; i < placed_position_array.length; i++) {
              var tthh = document.getElementById(placed_position_array[i]).getAttribute('value'); 
              document.getElementById(drag_target_array[i]).innerHTML = tthh;
              $("#"+drag_target_array[i]).attr("value", tthh);
              document.getElementById(placed_position_array[i]).innerHTML = null;//ilangata methana "" danna
              $("#"+placed_position_array[i]).attr("value", "");            
            }
            wrong_Word_Sound(not_contain_array);
            $("#temp1").attr("value", null);
            $("#temp2").attr("value", null);
        }
      }
    };
    xhttp.open("GET", "all_words.xml", true);
    xhttp.send();
  }
  
  function p2_ok_btnAction(){

    var miyuru2 = true;
    if((ttmm2 == 0) && (ttmm ==0)){
      miruru2 = true;
    }else{
      miyuru2 =  empty_check();
    }
    //started to check possible words that can be come
    var temp1_value = document.getElementById("temp1").getAttribute('value');
    var n = temp1_value.includes("@");
    var arrayX_values = [];
    var arrayY_values = [];

    var temp1_array = [];     
      if(n) {
        temp1_array = temp1_value.split("@");
      }else{
        temp1_array = [temp1_value];
      }
      //document.getElementById("fff").innerHTML = temp1_array;

    for (var i = 0; i < temp1_array.length; i++) {
      var point = temp1_array[i].split("_");
      arrayX_values[i] = Number(point[0]);
      arrayY_values[i] = Number(point[1]);  
    }
    arrayX_values.sort(function(a, b){return a-b});
    arrayY_values.sort(function(a, b){return a-b});

    //document.getElementById("fff").innerHTML = "aze->"+arrayX_values;    
    var possible_words = [];
    var pw = 0;
    for (var i=arrayY_values.length; i>0 ; i--) {
      var puzzel_font_index = arrayX_values[i-1]+"_"+arrayY_values[i-1];
      var x = arrayX_values[i-1];
      var y = arrayY_values[i-1];

      var LR_x_val = [];
      var LR_y_val = [];

      var l = 1;
      var L_T = true;
      while(L_T){
        if((x-l) == 0){
          break;
        }
        var next_index = (x-l)+"_"+y;               
        var next_value = document.getElementById(next_index).getAttribute('value');
        if(next_value == ""){
          L_T = false;//break daanna
        }else{
          LR_x_val.push(x-l);
          LR_y_val.push(y);
          l++;  
        }
      }

      var r = 1
      var R_T = true;
      while(R_T){
        if((x+r) == 12){
          break;
        }
        var next_index = (x+r)+"_"+y;       
        var next_value = document.getElementById(next_index).getAttribute('value');
        if(next_value == ""){
          R_T = false;
        }else{
          LR_x_val.push(x+r);
          LR_y_val.push(y);
          r++;
        }
      }

      var UD_x_val = [];
      var UD_y_val = [];

      var u = 1;
      var U_T = true;
      while(U_T){
        if((y-u) == 0){
          break;
        }
        var next_index = x+"_"+(y-u);
        var next_value = document.getElementById(next_index).getAttribute('value');
        if(next_value == ""){
          U_T = false;
        }else{
          UD_x_val.push(x);
          UD_y_val.push(y-u);
          u++;
        }
      }

      var d = 1;
      var D_T = true;
      while(D_T){
        if((y+d) == 12){
          break;
        }
        var next_index = x+"_"+(y+d);
        var next_value = document.getElementById(next_index).getAttribute('value');
        if(next_value == ""){
          D_T = false;
        }else{
          UD_x_val.push(x);
          UD_y_val.push(y+d);
          d++;
        }
      }

      var notPutSingleElement = true;
      if((l != 1) || (r != 1)){
        LR_x_val.push(x);
        LR_y_val.push(y);
        notPutSingleElement = false;
      }
      if((u != 1) || (d != 1)){
        UD_x_val.push(x);
        UD_y_val.push(y);
        notPutSingleElement = false;
      }

      if(notPutSingleElement && (LR_x_val.length==0 || LR_y_val.length==0)){
        LR_x_val.push(x);
        LR_y_val.push(y);
        notPutSingleElement = false;
      }

      if(notPutSingleElement && (UD_x_val.length==0 || UD_y_val.length==0)){
        UD_x_val.push(x);
        UD_y_val.push(y);
        notPutSingleElement = false;
      }

      LR_x_val.sort(function(a, b){return a-b});
      LR_y_val.sort(function(a, b){return a-b});
      UD_x_val.sort(function(a, b){return a-b});
      UD_y_val.sort(function(a, b){return a-b});

      var horizontal_word = "";
      for (var j = 0; j < LR_x_val.length; j++) {
        var hori_font_index = LR_x_val[j]+"_"+LR_y_val[j];
        var hori_value = document.getElementById(hori_font_index).getAttribute('value');  
        horizontal_word += hori_value;      
      }
      if(horizontal_word != ""){
        possible_words[pw] = horizontal_word; 
        pw++;
      }
       
      var verticle_word = "";
      for (var k = 0; k < UD_x_val.length; k++) {
        var vert_font_index = UD_x_val[k]+"_"+UD_y_val[k];
        var vert_value = document.getElementById(vert_font_index).getAttribute('value');  
        verticle_word += vert_value;      
      }
      if(verticle_word != ""){
        possible_words[pw] = verticle_word; 
        pw++;
      }   
    }

    function get_uniq_word_array2(a) {
        var seen = [];
        return a.filter(function(item) {
            return seen.hasOwnProperty(item) ? false : (seen[item] = true);
        });
    }
    var possible_words_uniq_array = get_uniq_word_array2(possible_words);
    //document.getElementById("ddd").innerHTML = possible_words_uniq_array;

    //OPEN XML FILE and MAKE all_word_array
    var all_words_array = [];
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        var i;
        var xmlDoc = xhttp.responseXML;
        var x = xmlDoc.getElementsByTagName("WORD");
        var arro =x[0].getElementsByTagName("COMBINATION");

        for (var i = 0; i < arro.length; i++) {
          all_words_array[i] = arro[i].childNodes[0].nodeValue.toString();
        }
        var contain_array = [];
        var not_contain_array = [];
        for (var i = 0; i < possible_words_uniq_array.length; i++) {
          if (isInArray(possible_words_uniq_array[i], all_words_array)) {
            contain_array.push(possible_words_uniq_array[i]);
          }else{
            not_contain_array.push(possible_words_uniq_array[i]);
          }
        }

        if ((contain_array.length == possible_words_uniq_array.length) && miyuru2) {
            ttmm2++;
            var total;
            var get_current_total = document.getElementById("P2lakunu").getAttribute('value');
            if (get_current_total == "") {
              total = 0;
            }else{
              total = Number(get_current_total);
            }

            for (var i = 0; i < contain_array.length; i++) {
              for (var j = 0; j < contain_array[i].length; j++) {
                total += Math.pow(1, j) * (j+1)*3;
              }
            }
            $("#P2lakunu").attr("value", total);
            //document.getElementById("ddd").innerHTML = contain_array+" is contain";

            //player2's fonts should be null
            document.getElementById("dragtarget7").innerHTML = null;
            $("#dragtarget7").attr("value", null);
            document.getElementById("dragtarget8").innerHTML = null;
            $("#dragtarget8").attr("value", null);
            document.getElementById("dragtarget9").innerHTML = null;
            $("#dragtarget9").attr("value", null);
            document.getElementById("dragtarget10").innerHTML = null;
            $("#dragtarget10").attr("value", null);
            document.getElementById("dragtarget11").innerHTML = null;
            $("#dragtarget11").attr("value", null);
            document.getElementById("dragtarget12").innerHTML = null;
            $("#dragtarget12").attr("value", null);
            p1_timer_when_p2_pass();
            checkWord_p1();//player1's fonts should be value
            correct_Word_Sound(contain_array);
            $("#temp1").attr("value", null);
            $("#temp2").attr("value", null);

        }else{
            //document.getElementById("eee").innerHTML = not_contain_array+" is not contain";
            //again set
            var placed_position =  document.getElementById("temp1").getAttribute('value');
            var drag_target =  document.getElementById("temp2").getAttribute('value');
            var drag_target_array = drag_target.split("@");
            var placed_position_array = placed_position.split("@");

            for (var i = 0; i < placed_position_array.length; i++) {

              var tthh = document.getElementById(placed_position_array[i]).getAttribute('value'); 

              document.getElementById(drag_target_array[i]).innerHTML = tthh;
              $("#"+drag_target_array[i]).attr("value", tthh);

              document.getElementById(placed_position_array[i]).innerHTML = null;//ilangata methana "" danna
              $("#"+placed_position_array[i]).attr("value", "");              
            }
            wrong_Word_Sound(not_contain_array);
            $("#temp1").attr("value", null);
            $("#temp2").attr("value", null);
        }
      }
    };
    xhttp.open("GET", "all_words.xml", true);
    xhttp.send();
  }


  function empty_check(){

    var temp1_value = document.getElementById("temp1").getAttribute('value');
    var n = temp1_value.includes("@");
    var temp1_array = [];     
      if(n) {
        temp1_array = temp1_value.split("@");
      }else{
        temp1_array = [temp1_value];
      }
  var array_value = new Array();
  for(var i=1; i<12; i++){
    array_value[i] = new Array();
    for(var j=1; j<12; j++){
      var div_id = i+"_"+j;
      var div_value = document.getElementById(div_id).getAttribute('value');
      if((div_value.length) != 0){
        array_value[i][j] = div_id;
      }
    }
  }
 /* for(var i=0; i<temp1_array.length; i++){
    for(var j=0; j<array_value.length; j++){
      for(var k=0; k<array_value[j]; k++){
        if(temp1_array[i] == array_value[j][k]){
          array_value[j].splice(k,1);
        }
      }
    }
  }*/
    var X_values = [];
    var Y_values = [];
    var New_Y_Above_values = [];
    var New_Y_Below_values = [];
    var New_X_Left_values = [];
    var New_X_Right_values = [];
    for (var i = 0; i < temp1_array.length; i++) {
        var point = temp1_array[i].split("_");
        X_values[i] = Number(point[0]);
        Y_values[i] = Number(point[1]);
    }
    for(var i=0; i<Y_values.length; i++){
        Y_values[i] -= 1;
        New_Y_Above_values[i] = (X_values[i]+'').concat("_",Y_values[i]);
    }
    for(var i=0; i<Y_values.length; i++){
        Y_values[i] += 2;
        New_Y_Below_values[i] = (X_values[i]+'').concat("_",Y_values[i]);
    }
    for(var i=0; i<X_values.length; i++){
        X_values[i] -= 1;
        New_X_Left_values[i] = (X_values[i]+'').concat("_",(Y_values[i]-1));
    }
    for(var i=0; i<X_values.length; i++){
        X_values[i] += 2;
        New_X_Right_values[i] = (X_values[i]+'').concat("_",(Y_values[i]-1));
    }

    var New_values = New_Y_Above_values.concat(New_Y_Below_values,New_X_Left_values,New_X_Right_values);

    for(var i=0; i<temp1_array.length; i++){
        for(var j=0; j<New_values.length; j++){
            while(temp1_array[i] == New_values[j]){
                New_values.splice(j,1);
            }
        }
    }

    for(var i=0; i<New_values.length; i++){
        for(var j=1; j<array_value.length; j++){
            for(var k=1; k<array_value[j].length; k++){
                if(New_values[i] == array_value[j][k]){
                    return true
                }
            }
        }
    }
    return false;

/*

  document.getElementById("test1").innerHTML = array_value;
  document.getElementById("test2").innerHTML = temp1_array;
  document.getElementById("test3").innerHTML = "X : "+X_values+" ";
  document.getElementById("test4").innerHTML = "New Values : "+New_values+" ";*/
}


