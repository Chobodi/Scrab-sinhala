<?php 
    include('header.php');
    require_once './db/dbConnection.php';
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
                $sql = "SELECT * FROM scrab WHERE  status !='Reject' AND status !='Accept';";
                $result = $conn->query($sql);    
                    if ($result->num_rows > 0) {
                        
                        while ($row = $result->fetch_assoc()) {
                            
                           echo'<div class="col-md-12">
                                <div class="col-md-2">'; 
                           echo '<a id="editItem" href="word.php?id=' . $row["id"] . '">'.$row["word"].'</a>';
                           echo'</div>';
                           echo '<div class="col-md-10">';
                           
                           echo'</div>
                            </div>';
                           echo '<br>';
                        }
                    }
              ?>    
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