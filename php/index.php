<?php
  include "conn.php";

  $result=mysql_query("select * from tu");

  $carr=array();

  for($i=0;$i<mysql_num_rows($result);$i++){
      $carr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
  }

  echo json_encode($carr);

?>