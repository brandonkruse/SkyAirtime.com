<?php
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	
 $to = "drewpark88@gmail.com";
 $subject =" SkyAirtime - Demo Request from: ".$email;
 $message .=" Message: ".$message;

 if(mail($to, $subject,$message)){
	echo "<h4>Thank you for requesting a demo!</h4> <p>An email has been sent to one of our representatives. You should expect to hear back from them shortly.</p>";
} 
else{ 
	echo "Oh Snap! Please fill out all fields properly!";
}
?>