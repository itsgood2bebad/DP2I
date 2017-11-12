function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}
//fonction qui surligne si il y a une erreur 




function verif_Name(champ)
{
   if((champ.value.length < 2 || champ.value.length > 25) 
      && ( champ < 'a' || champ > 'z' ) && (champ <'A' || champ > 'Z'))
   {
      surligne(champ,true);
      return false;
   }
   else
   {
      surligne(champ,false);
      return true;
   }
}

function verif_Tel(champ)
{
   if (champ <'0' || champ > '9')
   {
      surligne(champ,true);
      return false;
   }
   else
   {
      surligne(champ,false);
      return true ;
   }
}
function verif_Mail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifForm(f)
{
   var nameOk = verif_Name(f.pseudo);
   var mailOk = verif_Mail(f.email);
   var telOk = verif_Tel(f.age);
   
   if(nameOk && mailOk && telOk)
      return true;
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}