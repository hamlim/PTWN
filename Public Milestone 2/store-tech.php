<?php
	$data = file_get_contents("php://input");
	$data = json_decode($data);
	$time = time();
	array_push($data, $time);
	$sdata = serialize($data);
	
	$file = fopen("tech.txt", 'w');
	fwrite($file, $sdata);
	fclose($file);
	
?>