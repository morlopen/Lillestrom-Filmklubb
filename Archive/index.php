<?php 
$array = explode('.', $_SERVER['HTTP_HOST']);
if($array[0] != 'www')
{
	$_SERVER['HTTP_HOST'] = 'www.'.$_SERVER['HTTP_HOST'];
}
echo file_get_contents('http://www.proisp.no/parkert.php?domene='.$_SERVER['HTTP_HOST'].'&ip='.$_SERVER['REMOTE_ADDR']);
?>
