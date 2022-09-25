<?php
    header("Access-Control-Allow-Origin: http://localhost:3000");

    include './config.php';
    if($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['sid'])){
        session_id($_POST['sid']);
        session_start();
        $user = $_SESSION['user'];

        $email = $user['email'];
        $logCmd = "SELECT * FROM user_tb WHERE email='$email'";
        $useresult = $dbCon->query($logCmd);
        if($useresult->num_rows > 0){
          $user = $useresult->fetch_assoc();
        }
    
        $postArray = [];
        $userid = $user['user_id'];
        $postCmd = "SELECT * FROM post_tb WHERE user_id = '$userid'";
        $result = $dbCon->query($postCmd);
        while($row = $result->fetch_assoc()){
          array_push($postArray,$row);
        }

        echo $postArray;
        $dbCon->close();
    }else{
      echo "you haven't logged in";
    }
?>