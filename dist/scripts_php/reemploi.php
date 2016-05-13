<!DOCTYPE HTML> 
<html>
<head>
<style type="text/css">
body {
  background-color: #e4f2c7;
  font-family: sans-serif,sans-serif;
  height:100%;margin:0;padding:0;text-align:center;
}
#global{ background-color: #ffffff;margin:0 auto;min-height:100%;text-align:left;width:800px}

div.ss-form-container {
  padding: 15px;
  background-color: #aedc53;
  border-color: #a8a8a8;
  border-style: solid;
  border-width: 1px;
}
h1{
  background-color: #aedc53;
  padding: 15px;
  
  color: #ffffff;
  text-align: left;
}
label.ss-q-help, td.ss-leftlabel, td.ss-rightlabel {
  color: #616161;
}
div.errorbox-bad {
  background-color: #eed0d0;
}
h3 {
  background-color: transparent;
}
div.ss-submit div.ss-form-entry {
  background: none;
  border: none;
}

</style>
<script type="text/javascript" language="javascript"> 
<!--
// By Adam Khoury @ www.developphp.com
function validateMyForm ( ) { 
    var isValid = true;
	var text  = "";
    if ( document.form1.infoPublique.value == "" ) { 
        text =  text + "Info publique est obligatoire\n";
	    isValid = false;
    } 
	if ( document.form1.nomPersonne.value == "" ) { 
	    text =  text + "Nom de la personne qui réalise l'inscription est obligatoire\n";
            isValid = false;
    } 
	if ( document.form1.emailPersonne.value == "" ) { 
         text =  text + "Email de la personne qui réalise l'inscription est obligatoire\n"; 
         isValid = false;
    } else if (isEmail(document.form1.emailPersonne.value)==false) {
			text =  text + "Formal de l'email incorrect\n"; 
			isValid = false;
	}
	if ( document.form1.lienPersonne.value == "" ) { 
        text =  text + "Lien entre la personne qui réalise l'inscription et la structure\n";
            isValid = false;
    } 
	if ( document.form1.nom.value == "" ) { 
	    text =  text + "Nom de la structure est obligatoire\n";
            isValid = false;
    } 
	if ( document.form1.dechetsRecuperes.value == "" ) { 
         text =  text + "Liste des objets usagés récupérés\n";
            isValid = false;
    }
	
	if (text!=null && text !="") {
		alert (text);
	}
	
    return isValid;
}

function isEmail(myVar){
     // La 1ère étape consiste à définir l'expression régulière d'une adresse email
     var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');

     return regEmail.test(myVar);
   }
//-->
</script>
<meta charset="utf-8">
<style>
.error {color: #FF0000;}
</style>
</head>
<body> 
 <div id="global">


<h1>Inscription association ou entreprise de réemploi</h1>
<p style='padding:15px;background-color:#ffff00'>
Bonjour,<br/><br/>
L'association "Mieux trier à Nantes" réalise un annuaire et un programme gratuit (Android/Windows Phone) 'Mieux trier A Nantes' - voir <a href='http://www.mieuxtrieranantes.fr/' target=_new >www.mieuxtrieranantes.fr</a> - dont l'objectif est d'aider les habitants de Nantes Métropole à trier : plus régulièrement, plus scrupuleusement.<br/>
<br/>
Comment nous fournir ces informations ?<br/>
- soit nous répondre par mail <img src='http://www.mieuxtrieranantes.fr/scripts_php/nous_contacter.png' style='vertical-align:baseline' /><br/>
- soit sur ce formulaire.<br/>
<br/>
Pour toutes questions envoyez-nous un mail ou appelez le 06_74_43_78_43.<br/>
<br/>
Vous trouverez cet annuaire (après modération) sur <a href='http://data.nantes.fr/donnees/?facet[categories%3AEnvironnement+]=on' target=_new >www.data.nantes.fr</a>.<br/>
<br/>
Merci de votre collaboration.<br/>
<br/>
Les membres de l'association "Mieux trier à Nantes" 
</p>

<form method="post" action="send_mail_form.php" style='padding:15px;background-color:ffffaa' name='form1' > 
<center><h2>Formulaire</h2></center>
<p><span class="error">* Champs obligatoires.</span></p>


   <span class="error">Acceptez-vous que ces informations soient publiques ? * <?php echo $infoPubliqueErr;?>
   <input type="radio" name="infoPublique" <?php if (isset($infoPublique) && $infoPublique=="oui") echo "checked";?>  value="oui">Oui
   <input type="radio" name="infoPublique" <?php if (isset($infoPublique) && $infoPublique=="non") echo "checked";?>  value="non">Non
   </span>
   <br/>
   <i>Si ces informations sont publiques, des sites internet comme ourecycler.fr ou openstreetmap peuvent les utiliser. Elles seront visibles sur www.mieuxtrieranantes.fr page "réemploi" </i>.
   
   <br><br>

<p>

<h3>A propos de la personne qui réalise l'inscription</h3>
 
<span class="error">Nom personne qui réalise l'inscription * <?php echo $nomPersonneErr;?></span>
<input type="text" name="nomPersonne" value="<?php echo $nomPersonne;?>" size="30">
   
<br><br> 
<span class="error">Email de la personne qui réalise l'inscription * <?php echo $emailPersonneErr;?></span>
<input type="text" name="emailPersonne" value="<?php echo $emailPersonne;?>" size="30">
   
<br><br> 
<span class="error">Lien entre la personne qui réalise l'inscription et la structure * <?php echo $lienPersonneErr;?></span>
<input type="text" name="lienPersonne" value="<?php echo $lienPersonne;?>" size="30">
  
<br><br> 
<h3>L'association ou l'entreprise de réemploi</h3>
Type<br/>
  <input type="checkbox" name="typeAsso[]" value="Association">&nbsp;Association<br/>
 <input type="checkbox" name="typeAsso[]" value="Entreprise">&nbsp;Entreprise<br/>
 <input type="checkbox" name="typeAsso[]" value="Autre">&nbsp;Autre : <input type="text" name="name" value="<?php echo $typeAssoAutre;?>">
   <span class="error"><?php echo $typeAssoAErr;?></span>
 <br><br>
<span class="error">Nom * <?php echo $nomErr;?></span>
<input type="text" name="nom" value="<?php echo $nom;?>" size="30">
<br><br> 
Email
<input type="text" name="email" value="<?php echo $email;?>" size="30">
   <span class="error"><?php echo $emailErr;?></span>
<br><br> 
Téléphone
<input type="text" name="tel" value="<?php echo $tel;?>" size="30">
   <span class="error"><?php echo $telErr;?></span>
<br><br> 
Site Internet
<input type="text" name="website" value="<?php echo $website;?>" size="30">
   <span class="error"><?php echo $websiteErr;?></span>
<br><br> 
Facebook
<input type="text" name="facebook" value="<?php echo $facebook;?>" size="30">
   <span class="error"><?php echo $facebookErr;?></span>
<br><br> 
Google+
<input type="text" name="google" value="<?php echo $google;?>" size="30">
   <span class="error"><?php echo $googleErr;?></span>
<br><br> 
Twiter
<input type="text" name="twiter" value="<?php echo $twiter;?>" size="30">
   <span class="error"><?php echo $twiterErr;?></span>
<br><br> 
Fax
<input type="text" name="fax" value="<?php echo $fax;?>" size="30">
   <span class="error"><?php echo $faxErr;?></span>
<br><br> 
Logo : emplacement de l'image
<input type="text" name="logoEmplacement" value="<?php echo $logoEmplacement;?>" size="30">
   <span class="error"><?php echo $logoEmplacementErr;?></span><br/>
<i>Site Internet ou page Internet où trouver l'image. Vous pouvez nous l'envoyer par mail</i>

 <br><br>
Logo : vos conditions pour la résilisation de l'image
<input type="text" name="logoConditions" value="<?php echo $logoConditions;?>">
   <span class="error"><?php echo $logoConditionsErr;?></span><br/>
<i>Certains images ne peuvent pas être reproduites. Dites-le nous.</i>
 
<h3>Local ouvert au public (le local principal)</h3>

Adresse : rue/route
<input type="text" name="adresseRueRoute" value="<?php echo $adresseRueRoute;?>" size="30">
   <span class="error"><?php echo $adresseRueRouteErr;?></span>
<br><br>
Adresse : complément<input type="text" name="adresseComplement" value="<?php echo $adresseComplement;?>" size="30">
   <span class="error"><?php echo $adresseComplementErr;?></span>
 <br><br>
Adresse: code postal<input type="text" name="adresseCodePostal" value="<?php echo $adresseCodePostal;?>" size="30">
   <span class="error"><?php echo $adresseCodePostalErr;?></span>
 <br><br>
Adresse : ville<input type="text" name="adresseVille" value="<?php echo $adresseVille;?>" size="30">
   <span class="error"><?php echo $adresseVilleErr;?></span>
 <br><br> 
Adresse : cedex<input type="text" name="adresseCedex" value="<?php echo $adresseCedex;?>" size="30">
   <span class="error"><?php echo $adresseCedexErr;?></span>
  <br><br>
Latitude <input type="text" name="latitude" value="<?php echo $latitude;?>"><br/>
<i>exemple : 47.197236</i>
<br><br> 
Longitude
<input type="text" name="longitude" value="<?php echo $longitude;?>"><br/>
<i>exemple : -1.624346</i>
 <br><br>
Nantes : quartier administratif<br/>
  <input type="checkbox" name="quartierAdmin[]" value="Quartier Nantais : Bellevue / Chantenay / Sainte-Anne">&nbsp;Quartier Nantais : Bellevue / Chantenay / Sainte-Anne&nbsp;<br/>
 <input type="checkbox" name="quartierAdmin[]" value="Quartier Nantais : Breil / Barberie">&nbsp;Quartier Nantais : Breil / Barberie&nbsp;<br/>
 <input type="checkbox" name="quartierAdmin[]" value="Quartier Nantais : Centre Ville">&nbsp;Quartier Nantais : Centre Ville&nbsp;<br/>
 <input type="checkbox" name="quartierAdmin[]" value="Quartier Nantais : Dervallieres / Zola">&nbsp;Quartier Nantais : Dervallières / Zola&nbsp;<br/>
 <input type="checkbox" name="quartierAdmin[]" value="Quartier Nantais : Doulon / Bottiere">&nbsp;Quartier Nantais : Doulon / Bottière&nbsp;<br/>
 <input type="checkbox" name="quartierAdmin[]" value="Quartier Nantais : Hauts Paves / Saint Félix">&nbsp;Quartier Nantais : Hauts Pavés / Saint Félix&nbsp;<br/>
 <input type="checkbox" name="quartierAdmin[]" value="Quartier Nantais : Ile De Nantes">&nbsp;Quartier Nantais : Ile De Nantes&nbsp;<br/>
 <input type="checkbox" name="quartierAdmin[]" value="Quartier Nantais : Malakoff / Saint-Donatien">&nbsp;Quartier Nantais : Malakoff / Saint-Donatien&nbsp;<br/>
 <input type="checkbox" name="quartierAdmin[]" value="Quartier Nantais : Nantes Erdre">&nbsp;Quartier Nantais : Nantes Erdre&nbsp;<br/>
 <input type="checkbox" name="quartierAdmin[]" value="Quartier Nantais : Nantes Nord">&nbsp;Quartier Nantais : Nantes Nord&nbsp;<br/>
 <input type="checkbox" name="quartierAdmin[]" value="Quartier Nantais : Nantes Sud">&nbsp;Quartier Nantais : Nantes Sud&nbsp;<br/>
 <input type="checkbox" name="quartierAdmin[]" value="Hors Nantes : au nord de la Loire">&nbsp;Hors Nantes : au nord de la Loire&nbsp;<br/>
 <input type="checkbox" name="quartierAdmin[]" value="Hors Nantes : au sud de la Loire">&nbsp;Hors Nantes : au sud de la Loire&nbsp;<br/>
<b><i>Liste des quartiers administratifs nantais : <a href='http://fr.wikipedia.org/wiki/Liste_des_quartiers_de_Nantes' target=_new >http://fr.wikipedia.org/wiki/Liste_des_quartiers_de_Nantes</a></i></b>
 <br><br>
 Horaires
 <input type="text" name="horaires" value="<?php echo $horaires;?>" size="80">
   <span class="error"><?php echo $horairesErr;?></span>
<br><br>
   Horaires (format plage horaire pour nous faciliter le travail) 
   
   <input type="text" name="plagesHoraires" value="<?php echo $plagesHoraires;?>" size="100">
<br/><i/>Exemple "0101-3112_lu+ma+me+je+ve_10h00-12h30+14h00-19h00,0101-3112_sa_10h00-12h30</i>  
<br><br>
<span class="error">Objets usagés * <?php echo $dechetsRecuperesErr;?></span><input type="text" name="dechetsRecuperes" value="<?php echo $dechetsRecuperes;?>" size="30"><br/>
<i>Lister tous les objets usagés récupérés (au singulier), séparés par une virgule. La rubrique description permet de donner le reste des informations. <b>Exemple : "vélo,cyclomoteur"</b></i>
 <br><br>
Catégories d'objets usagés<br/>
 <input type="checkbox" name="categorieDechets[]" value="Cartouches encre/tuners">&nbsp;Cartouches encre/tuners&nbsp;<br/>
 <input type="checkbox" name="categorieDechets[]" value="Divers">&nbsp;Divers&nbsp;<br/>
 <input type="checkbox" name="categorieDechets[]" value="Electromenager">&nbsp;Electroménager&nbsp;<br/>
 <input type="checkbox" name="categorieDechets[]" value="Informatique">&nbsp;Informatique&nbsp;<br/>
 <input type="checkbox" name="categorieDechets[]" value="Jouet">&nbsp;Jouet&nbsp;<br/>
 <input type="checkbox" name="categorieDechets[]" value="Livres/BD/CD/DVD">&nbsp;Livres/BD/CD/DVD&nbsp;<br/>
 <input type="checkbox" name="categorieDechets[]" value="Meuble">&nbsp;Meuble&nbsp;<br/>
 <input type="checkbox" name="categorieDechets[]" value="Velo">&nbsp;Vélo&nbsp;<br/>
 <input type="checkbox" name="categorieDechets[]" value="Vetements">&nbsp;Vêtements&nbsp;<br/>
 <input type="checkbox" name="categorieDechets[]" value="Autres">&nbsp;Autres : 
	<input type="text" name="categorieDechetsAutres" value="<?php echo $categorieDechetsAutres;?>">
	<span class="error"><?php echo $categorieDechetsAutresErr;?></span>
 <br><br>
 Description<br/>
 <i>Tout ce qui n'a pas pu être indiqué dans les autres sections</i>
	<br/><textarea name="description" rows="5" cols="40"><?php echo $description;?></textarea>
</p>
 <input type="submit" name="cmdSubmit" id="cmdSubmit" value="Envoyer"  onclick="javascript:return validateMyForm();" />
</form>

</div>
</body>
</html>