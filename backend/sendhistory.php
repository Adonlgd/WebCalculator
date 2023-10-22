<?php

    $expression=$_GET['result1'];
    $res=$_GET['result2'];

    $re_exp = str_replace(" ", "+", $expression);
    $final_exp=$re_exp."=".$res;
    echo "$final_exp";
    $con = mysqli_connect('localhost','root','lgd000','webcal');

    if($con){
        //设置编码格式
        mysqli_query($con,'set names utf8');

        $sql = "insert into history_table(expression,result) values('$final_exp','$res')";

        $result=mysqli_query($con,$sql);
    }else{
        echo 'fail to connect';
    }

?>
