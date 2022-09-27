<?php
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Methods: PUT, GET, POST");

 $conn = mysqli_connect($servername, $username, $password,$databasename);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
    mysqli_select_db($conn,"final_db");
    $data = json_decode(file_get_contents("php://input"));
    $firstName = $data->firstName;
    $lastName = $data->lastName;
    $email = $data->email;
    $pass = $data->pass;
    IF($firstName && $lastName && $email && $pass){
    $sql = "INSERT INTO user_tb(firstName,lastName,email,pass)values($firstName,$lastName,$email,$pass)";
    $result = mysqli_query($dbCon,$sql);
    if($result){
        $response['data']=array(
            'stuatus'=>'valid'
        );
        echo json_encode($response);
    }
        }
?>