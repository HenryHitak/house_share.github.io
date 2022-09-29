<?php
 include './config.php';
 $dbCon = new mysqli($dbServerName.$dbUserName,$dbPass,$dbPass);
 if($dbCon->connect_error){
  die('connectioin error');
 }else{
   if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['sid'])){
     session_id($_POST['sid']);
     session_start();
     $user = $_SESSION['user'];
     $userid = $user['user_id'];
     $time = time();
    
     $comment = $_POST['comment'];
     echo $comment;

     $updCmd = "INSERT INTO `comments_tb`( `message`, `user_id`, `p_date`) VALUES ('$comment','$userid','time()')";
     $result = $dbCon->query($updCmd);
     if($result === true){
      echo json_encode($user);
     }else{
      echo false;
     }
   }
 }

?>