
var books = document.getElementById("articles");
// Accès aux informations 
ajaxGet("https://anapioficeandfire.com/api/books/1", function (reponse) {
    var book = JSON.parse(reponse);
    //Appel de la fonction ajax 
    // Ajout du nom ,editeur et auteur
    var Name_Book = document.createElement("h1");
    Name_Book.textContent = book.name;
    var Auteur_Book = document.createElement("p");
    Auteur_Book.textContent = book.authors;
    var Editeur_Book = document.createElement("h2");
    Editeur_Book.textContent = book.publisher;
    books.appendChild(Name_Book);
    books.appendChild(Auteur_Book);
    books.appendChild(Editeur_Book);
});
ajaxGet("https://anapioficeandfire.com/api/books/2", function (reponse) {
    var book = JSON.parse(reponse);
    
    var Name_Book = document.createElement("h1");
    Name_Book.textContent = book.name;
    var Auteur_Book = document.createElement("p");
    Auteur_Book.textContent = book.authors;
    var Editeur_Book = document.createElement("h2");
    Editeur_Book.textContent = book.publisher;
    books.appendChild(Name_Book);
    books.appendChild(Auteur_Book);
    books.appendChild(Editeur_Book);
});
ajaxGet("https://anapioficeandfire.com/api/books/3", function (reponse) {
    var book = JSON.parse(reponse);
    // Ajout de la description et du logo dans la page web
    var Name_Book = document.createElement("h1");
    Name_Book.textContent = book.name;
    var Auteur_Book = document.createElement("p");
    Auteur_Book.textContent = book.authors;
    var Editeur_Book = document.createElement("h2");
    Editeur_Book.textContent = book.publisher;
    books.appendChild(Name_Book);
    books.appendChild(Auteur_Book);
    books.appendChild(Editeur_Book);
});
//J'ai pas reussi a prendre tout les books automatiquements 