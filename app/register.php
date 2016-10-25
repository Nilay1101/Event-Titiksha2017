<?php	
if(empty($_POST['name'])  		||
   empty($_POST['gender']) 		||
   empty($_POST['email']) 		||
   empty($_POST['ins'])	||
   empty($_POST['pin'])	||
   empty($_POST['phone'])	||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$gender = strip_tags(htmlspecialchars($_POST['gender']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$ins = strip_tags(htmlspecialchars($_POST['ins']));
$pin = strip_tags(htmlspecialchars($_POST['pin']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$to = 'titiksha.registration@smvdu.ac.in'; 
$email_subject = "TITIKSHA Registration Form:  $name";
$email_body = "You have received a new registartion update.\n\n"."Here are the details:\n\nName: $name\n\nGender: $gender\n\nEmail: $email\n\nInstitution: $ins\n\nPincode: $pin\n\nPhone: $phone\n\nEventID:\n$message";
$headers = "From: noreply@yourdomain.com\n"; 
$headers .= "Reply-To: $email";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>