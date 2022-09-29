<?php
    // header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
 include 'config.php';
//  $conn = mysqli_connect($dbServerName, $dbUserName, $dbPass, $dbName);
// if (!$conn) {
//     die("Connection failed: " . mysqli_connect_error());
// }
//     // mysqli_select_db($conn,"final_db");
//     // $data = json_decode(file_get_contents("php://input"));
//     // print_r($data) ;
//     // $firstName = $data->firstName;
//     // $lastName = $data->lastName;
//     // $email = $data->email;
//     // $pass = $data->pass;
//     $firstName = $_POST['firstName'];
//     echo $firstName;
//     // IF($firstName && $lastName && $email && $pass){
//     // $sql = "INSERT INTO user_tb(firstName,lastName,email,pass)values($firstName,$lastName,$email,$pass)";
//     // $result = mysqli_query($dbCon,$sql);
//     // if($result){
//     //     $response['data']=array(
//     //         'stuatus'=>'valid'
//     //     );
//     //     echo json_encode($response);
//     // }
//     //     }

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $firstName = $_POST['firstName'];
        $lastName = $_POST['lastName'];
        $email = $_POST['email'];
        $pass = $_POST['pass'];
        $dbcon = new mysqli($dbServerName, $dbUserName, $dbPass, $dbName);
        if($dbcon -> connect_error){
            die("Error connection");
        }else{
            $sql = "INSERT INTO user_tb(firstName,lastName,email,pass)values('$firstName','$lastName','$email','$pass')";
            $result = mysqli_query($dbCon,$sql);
            $dbcon->close();
            $response='yo';
            // if($result){
            // $response['data']=array(
            //     'stuatus'=>'valid'
            // );
            // echo json_encode($response);
        }
    }else{
        header("status-Text: bad request",true,400);
    }
?>