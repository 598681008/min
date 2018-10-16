<?php
   include "conn.php";

    if(isset($_GET['sid'])){
        $sid=$_GET['sid'];
    }
     
    $result=mysql_query("select * from tu1 where sid = '$sid'");

    $picarr=array();

    for($i=0;$i<mysql_num_rows($result);$i++){
        $picarr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
    }

    echo json_encode($picarr);

?>