<?php

	define("CONTACT_FORM", 'YOUR-MAIL@gmail.com');

	$subject = 'Заявка';

	$name  = stripslashes($_POST['requestName']);
	$phone = stripslashes($_POST['requestPhone']);
	// $email = stripslashes($_POST['email']);
	// $msg   = stripslashes($_POST['msg']);	
		

	$message = '
		<html>
				<head>
						<title>Заявка на звонок</title>
						<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
				</head>
				<body>
						<p>Имя     : '.$name.'</p>	
						<p>Phone   : '.$phone .'</p>
				</body>
		</html>';


	$mail = mail(CONTACT_FORM, $subject, $message,
		"MIME-Version: 1.0\r\n"
	    ."From: ".$name." <".CONTACT_FORM.">\r\n"
	    ."Reply-To: ".$email."\r\n"
	    ."Content-type: text/html; charset=UTF-8\r\n");

	if($mail){
		echo "OK";
	}
?>