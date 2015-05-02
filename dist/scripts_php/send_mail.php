<?php 
/*if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']) && (   
       $_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'] == 'POST' || 
       $_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'] == 'DELETE' || 
       $_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'] == 'PUT' )) {
             header('Access-Control-Allow-Origin: *');
             header("Access-Control-Allow-Credentials: true"); 
             header('Access-Control-Allow-Headers: X-Requested-With');
             header('Access-Control-Allow-Headers: Content-Type');
             header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT'); // http://stackoverflow.com/a/7605119/578667
             header('Access-Control-Max-Age: 86400'); 
      }
  exit;
}*/
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Methods: POST');
   header('Access-Control-Allow-Headers: X-Requested-With');
	
   $courriel = trim(stripslashes(htmlentities($_POST["email"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $message = trim(stripslashes(htmlentities($_POST["message"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $sujet = trim(stripslashes(htmlentities($_POST["sujet"], ENT_COMPAT|ENT_HTML401, "UTF-8")));

   $to    = "chris-ren@netcourrier.com";
 
    if (VerifierAdresseMail($courriel)==true) {
	   // adresse MAIL OVH liee a l'hebergement.
	   $from  = "mieuxtrieranantes@mieuxtrieranantes.fr";
	 
	   $JOUR  = date("Y-m-d");
	   $HEURE = date("H:i");
	 
	   $Subject = "Commentaire appli $JOUR $HEURE - $sujet";
	 
	   $mail_Data = "";
	   $mail_Data .= "<html> \n";
	   $mail_Data .= "<head> \n";
	   $mail_Data .= "<title> Subject </title> \n";
	   $mail_Data .= "</head> \n";
	   $mail_Data .= "<body> \n";
	 
	   $mail_Data .= "<b>$sujet </b> <br> \n";
	   $mail_Data .= "<br> \n";
	   $mail_Data .= "Emetteur : <font color='blue'>$courriel</font><br> \n";
	   $mail_Data .= "Message : $message<br> \n";
	   $mail_Data .= "</body> \n";
	   $mail_Data .= "</HTML> \n";
	 
	   $headers  = "MIME-Version: 1.0 \n";
	   $headers .= "Content-type: text/html; charset=iso-8859-1 \n";
	   $headers .= "From: $from \n";
	   // Accuse de lecture
	   // $headers .= "Disposition-Notification-To: $from  \n";
	 
	   // Message de Priorite normale (3)
	   // -------------------------
	   $headers .= "X-Priority: 3  \n";
	   $headers .= "X-MSMail-Priority: Normal \n";
	 
	   $CR_Mail = TRUE;
	 
	   $CR_Mail = @mail ($to, $Subject, $mail_Data, $headers);
	 
	   if ($CR_Mail === FALSE)
      {
		 echo "{'failure':'Erreur envoi mail'}";
      }
	else
      {
	  echo "{'success':true}";
      }
   } else {
	  echo "{'failure':'courriel incorrect'}";
   }
   
   function VerifierAdresseMail($adresse)  
{  
if ($adresse==null) {
     return false;  
     }
   $Syntaxe='#^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,6}$#';  
   if(preg_match($Syntaxe,$adresse))  
      return true;  
   else  
     return false;  
}
?>