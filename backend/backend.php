<?php

// connect
$con = mysqli_connect('localhost','root','lgd000','history_list');

if($con){
     //set code format
     mysqli_query($con,'set names utf8');

        $sql = "select expression from history_table order by no desc limit 10";

        $result = $con->query($sql);

        // change to array
        $data = [];
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $data[] = $row['expression'];
            }
        }
        
        
        $con->close();
        
        // return json
        echo json_encode($data);
    }else{
        echo 'file to vonnect';
    }
?>
