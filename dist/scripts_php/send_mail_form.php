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
   $infoPublique = trim(stripslashes(htmlentities($_POST["infoPublique"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $nomPersonne = trim(stripslashes(htmlentities($_POST["nomPersonne"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $emailPersonne = trim(stripslashes(htmlentities($_POST["emailPersonne"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $lienPersonne = trim(stripslashes(htmlentities($_POST["lienPersonne"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   if ($_POST["typeAsso"]!=null) {
		$typeAsso=implode(",", $_POST["typeAsso"]);
	}
   $nom = trim(stripslashes(htmlentities($_POST["nom"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $email = trim(stripslashes(htmlentities($_POST["email"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $tel = trim(stripslashes(htmlentities($_POST["tel"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $website = trim(stripslashes(htmlentities($_POST["website"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $facebook = trim(stripslashes(htmlentities($_POST["facebook"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $google = trim(stripslashes(htmlentities($_POST["google"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $twiter = trim(stripslashes(htmlentities($_POST["twiter"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $fax = trim(stripslashes(htmlentities($_POST["fax"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $logoEmplacement = trim(stripslashes(htmlentities($_POST["logoEmplacement"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $logoConditions = trim(stripslashes(htmlentities($_POST["logoConditions"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $adresseRueRoute = trim(stripslashes(htmlentities($_POST["adresseRueRoute"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $adresseComplement = trim(stripslashes(htmlentities($_POST["adresseComplement"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $adresseCodePostal = trim(stripslashes(htmlentities($_POST["adresseCodePostal"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $dresseVille = trim(stripslashes(htmlentities($_POST["dresseVille"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $adresseCedex = trim(stripslashes(htmlentities($_POST["adresseCedex"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $latitude = trim(stripslashes(htmlentities($_POST["latitude"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $longitude = trim(stripslashes(htmlentities($_POST["longitude"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   if ($_POST["quartierAdmin"]!=null) {
		$quartierAdmin=implode(",", $_POST["quartierAdmin"]);
	}
   $horaires = trim(stripslashes(htmlentities($_POST["horaires"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $plagesHoraires = trim(stripslashes(htmlentities($_POST["plagesHoraires"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $dechetsRecuperes = trim(stripslashes(htmlentities($_POST["dechetsRecuperes"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   if ($_POST["categorieDechets"]!=null) {
		$categorieDechets=implode(",", $_POST["categorieDechets"]);
	}
   $categorieDechetsAutres = trim(stripslashes(htmlentities($_POST["categorieDechetsAutres"], ENT_COMPAT|ENT_HTML401, "UTF-8")));
   $description = trim(stripslashes(htmlentities($_POST["description"], ENT_COMPAT|ENT_HTML401, "UTF-8")));

   $to    = "chris-ren@netcourrier.com";
 
	   // adresse MAIL OVH liee a l'hebergement.
	   $from  = "mieuxtrieranantes@mieuxtrieranantes.fr";
	 
	   $JOUR  = date("Y-m-d");
	   $HEURE = date("H:i");
	 
	   $Subject = "Inscription";
	 
	   $mail_Data = "";
	   $mail_Data .= "<html> \n";
	   $mail_Data .= "<head> \n";
	   $mail_Data .= "<title> Subject </title> \n";
	   $mail_Data .= "</head> \n";
	   $mail_Data .= "<body> \n";
	 

	   $mail_Data .= "<br> \n";
	   $mail_Data .= "emetteur : <font color='blue'>$nom</font><br> \n";
	   $mail_Data .= "courriel : $courriel <br> \n";
	   $mail_Data .= "infoPublique : $infoPublique <br> \n";
	   $mail_Data .= "nomPersonne : $nomPersonne <br> \n";
	   $mail_Data .= "emailPersonne : $emailPersonne <br> \n";
	   $mail_Data .= "lienPersonne : $lienPersonne <br> \n";
	   $mail_Data .= "typeAsso : $typeAsso <br> \n";
	   $mail_Data .= "nom : $nom <br> \n";
	   $mail_Data .= "email : $email <br> \n";
	   $mail_Data .= "tel : $tel <br> \n";
	   $mail_Data .= "website : $website   <br> \n";
	   $mail_Data .= "facebook : $facebook <br> \n";
	   $mail_Data .= "google : $google <br> \n";
	   $mail_Data .= "twiter : $twiter <br> \n";
	   $mail_Data .= "fax : $fax <br> \n";
	   $mail_Data .= "logoEmplacement : $logoEmplacement <br> \n";
	   $mail_Data .= "logoConditions : $logoConditions <br> \n";
	   $mail_Data .= "adresseRueRoute : $adresseRueRoute <br> \n";
	   $mail_Data .= "adresseComplement : $adresseComplement <br> \n";
	   $mail_Data .= "adresseCodePostal : $adresseCodePostal <br> \n";
	   $mail_Data .= "adresseVille : $adresseVille <br> \n";
	   $mail_Data .= "adresseCedex : $adresseCedex <br> \n";
	   $mail_Data .= "latitude : $latitude <br> \n";
	   $mail_Data .= "longitude : $longitude <br> \n";
	   $mail_Data .= "quartierAdmin : $quartierAdmin <br> \n";
	   $mail_Data .= "horaires : $horaires <br> \n";
	   $mail_Data .= "plagesHoraires : $plagesHoraires <br> \n";
	   $mail_Data .= "dechetsRecuperes : $dechetsRecuperes <br> \n";
	   $mail_Data .= "categorieDechets : $categorieDechets <br> \n";
	   $mail_Data .= "categorieDechetsAutres : $categorieDechetsAutres <br> \n";
	   $mail_Data .= "description : $description <br> \n";
	   
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
		 echo "Erreur envoi mail<br/>";
      }
	else
      {
	  echo "Votre formulaire a bien &eacute;t&eacute; envoy&eacute;<br/>";
      }
     $CR_Mail = @mail ($email, $Subject, $mail_Data, $headers);
	 	   if ($CR_Mail === FALSE)
      {
		// echo "Erreur envoi mail (vers vous)<br/>";
      }
	else
      {
	  echo "La copie de votre formulaire vous a &eacute;t&eacute; envoy&eacute;<br/>";
	  echo "<br/>Aller sur <a href='http://www.mieuxtrieranantes.fr/'>www.mieuxtrieranantes.fr</a>";
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