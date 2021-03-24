<?php

$nome              = $_POST['nome'];
$email             = $_POST['email'];
$digito            = $_POST['digito'];
$frase_do_starwars = $_POST['frase_do_starwars'];

$conn = new mysqli("localhost", "root", "", "laradev");
$sql="INSERT INTO `test`.`project_johnny_jedi` (`nome`, `email`, `digito`, `frase_do_starwars`) VALUES ('$nome', '$email', '$digito', '$frase_do_starwars');";

$result = $conn->query($sql);

$result = mysqli_query($conn,$sql);

$fallback = 'index.php';

$anterior = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : $fallback;

header("location: {$anterior}");
exit;

?>