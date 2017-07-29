<?php 
    include('header.php');
    require_once './db/dbConnection.php';
    
    $id = $_GET['id'];
    
    $sql = "SELECT * FROM scrab WHERE id=" . $id . ";";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        $word = $row["word"];
        
    }
}
?>
<style type="text/css">
  #suggestwords{
    margin-left: 0%;
    margin-top: 2%;
  }
  #redcontent2{

    width: 175%;
  }

  #redcontent1{

    width: 100%;
  }
</style>
<body>

<div class="container " id="suggestwords" style="background-image: url('')" >
    <div class="row">
      <div id="redcontent1">
      <div class="col s6" >
        <div class="card-panel blue lighten-5">
          
                            <div class="header">
                                <h4 class="title  blue lighten-4 center">All the words Added by users</h4>
                            </div>

          <div class="row">
              <?php 
                $sql = "SELECT word FROM scrab WHERE id='$id';";
                $result = $conn->query($sql);    
                    if ($result->num_rows > 0) {
                        
                        while ($row = $result->fetch_assoc()) {
                            
                           echo'<div class="col-md-12">
                                <div class="col-md-2">'; 
                           echo '<p>'.$row['word'].'</p>';
                           echo'</div>';
                           
                        }
                    }
              ?>  
              <div class="col-md-10">
                  <button id="accept"  class="waves-effect blue waves-light btn " name="accept"  onclick="accept()" />Accept</button>
                  <button id="reject"  class="waves-effect reject waves-light btn " name="reject"  onclick="reject()"/>Reject</button>
                 <script>
                            function accept() {


                                var form = document.createElement("form");
                                form.setAttribute("method", "post");
                                form.setAttribute("hidden", "true");
                                form.setAttribute("action", "accept.php");




                                var aid = document.createElement("input");
                                aid.setAttribute("type", "hidden");
                                aid.setAttribute("name", "id");
                                aid.setAttribute("value", <?php echo $id ?>);

                                
                                
                                form.appendChild(aid);
                                document.body.appendChild(form);
                                form.submit();
                            }

                            function reject() {
                                if (confirm("Confirm reject word ") == true) {


                                    var form = document.createElement("form");
                                    form.setAttribute("method", "post");
                                    form.setAttribute("action", "reject.php");




                                    var aid = document.createElement("input");
                                    aid.setAttribute("type", "hidden");
                                    aid.setAttribute("name", "id");
                                    aid.setAttribute("value", <?php echo $id ?>);


                                    form.appendChild(aid);




                                    document.body.appendChild(form);
                                    form.submit();
                                } else {

                                }

                            }
                        </script>       
                </div>
                </div>
               <br>
          </div>
        
        </div>
    </div>
    </div>
    <div id="redcontent2">
<div class="col s6" >
        <div class="card-panel blue lighten-5">
          
                            <div class="header">
                                <h4 class="title  blue lighten-4 center"> Dictionary</h4>
                            </div>
                            <p>
                              <?php

                $g_books = array();
                $g_elem = null;
                 
                function startElement( $parser, $name, $attrs ) 
                {
                global $g_books, $g_elem;
                if ( $name == 'WORD' ) $g_books []= array();
                $g_elem = $name;
                }
                 
                function endElement( $parser, $name ) 
                {
                global $g_elem;
                $g_elem = null;
                }
                 
                function textData( $parser, $text )
                {
                global $g_books, $g_elem;
                if ( $g_elem == 'COMBINATION' )
                {
                $g_books[ count( $g_books )+1  ][ $g_elem ] = $text;
                }
                }
                 
                $parser = xml_parser_create();
                 
                xml_set_element_handler( $parser, "startElement", "endElement" );
                xml_set_character_data_handler( $parser, "textData" );
                 
                $f = fopen( 'all_words.xml', 'r' );
                 
                while( $data = fread( $f, 4096 ) )
                {
                xml_parse( $parser, $data );
                }
              
                xml_parser_free( $parser );
                 
                foreach( $g_books as $book )
                {
                echo $book['COMBINATION'].'<br>';
                }

                ?>

                              
                            </p>

          <div class="row">
          
           

            <form action='fileupload.php?action=fp' method='POST' enctype="multipart/form-data">

            
            

            </form>
                     
          </div>
        
        </div>
    </div>

    </div>
</div>
</div>
</body>
</html>

<?php

 if(isset($_POST['change_profile'])){

      $errors=array();
      $allowed_e=array('txt');

      $file_name=$_FILES['image']['name'];
      $file_e=strtolower(pathinfo($file_name,PATHINFO_EXTENSION));
      $file_s=$_FILES['image']['size'];
      $file_tmp=$_FILES['image']['tmp_name'];

      if(in_array($file_e,$allowed_e)===false){
        $errors[]='This file extension is not allowed';
      }
      
      if(empty($errors)){
        move_uploaded_file($file_tmp, 'files/'.$file_name);
        $image_up='files/'.$file_name;

        echo 'Success';
      }else{
        foreach ($errors as $error) {
          echo $error.'<br>';
        }
      }

    }


?>