


var fso = new ActiveXObject("Scripting.FileSystemObject");
		var d = fso.GetFolder("C:/Temp");
		var fc = new Enumerator(d.Files);
		var str = "";
		for (; ! fc.atEnd() ; fc.moveNext())
		{
			str += '<a href="/Users/itsgood/Desktop/exo-frontend'+fc.item().Name+'" title="">'+fc.item().Name+'</a><br/>';
		};

		//J'arrive pas a le faire fonctionné 
		// Getfolder envoie un objet Folder correspondant au dossier
		//enumère les fichiers 
		//atEnd retourne un booléen si l’élément actuel est le dernier 
		//moveNext le compteur 
		// on affiche les fichiers 