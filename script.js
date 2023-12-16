var buton = document.getElementById("button");
var nume = document.getElementById("Nume");
var email = document.getElementById("Email");
var poza = document.getElementById("Poza");
var citat = document.getElementById("Citat");
var img = document.getElementById("image");
var an1= document.getElementById("An1");
var an2= document.getElementById("An2");
var an3= document.getElementById("An3");
var an4= document.getElementById("An4");
var table = document.getElementById("table");
var cells = table.getElementsByTagName("td");
var link1= document.getElementById("link1");
var list = document.getElementById("List");
var items = list.getElementsByTagName("li");


buton.addEventListener("click", altaViata);

//Add eventListeners
buton.addEventListener("click", altaViata);


function altaViata ()
{
	nume.innerHTML = "Functie: Software Developer";
        email.innerHTML = "Troll profesional pe internet și în companiile IT";
        poza.innerHTML = "Autoportret (autor anonim)";
        img.src= "D:\site/poza2.jpeg";
        citat.innerHTML = "";
        an1.innerHTML = "Terminat";
        an2.innerHTML = "Terminat";
        an3.innerHTML = "Terminat";
        an4.innerHTML = "Terminat";
        document.body.style.backgroundColor = "lightblue";
        nume.style.color="black";
        nume.style.color="black";
        email.style.color="black";
        citat.style.color="black";
        poza.style.color="black";
        nume.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
        email.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
        poza.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
        citat.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";

    for (var i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = "white"; // Culoare de fundal albă
      cells[i].style.color = "black"; // Culoare text negru
      cells[i].style.borderStyle = "dashed"; // Bordură întreruptă
      cells[i].style.borderWidth = "2px"; // Lățimea bordurii de 2px
      cells[i].style.borderRadius = "10px"; // Rotunjirea colțurilor la 10px
      cells[i].style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
    }

    for (var i = 0; i < items.length; i++) {
      items[i].style.backgroundColor = "white"; // Culoare de fundal albă
      items[i].style.color = "black"; // Culoare text negru
      items[i].style.borderStyle = "dashed"; // Bordură întreruptă
      items[i].style.borderWidth = "2px"; // Lățimea bordurii de 2px
      items[i].style.borderRadius = "10px"; // Rotunjirea colțurilor la 10px
      items[i].style.fontFamily = "'Comic Sans MS', cursive, sans-serif"; // Font Comic Sans MS
    } 



}
