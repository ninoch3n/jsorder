var hrana = [
	{
		naziv: "Zagrebački odrezak",
		slika: "assets/menu-image.png",
		opis: "(Zagrebački odrezak punjen šunkom i sirom)",
		cijena: "35,00 kn"
	},
	{
		naziv: "File od piletine punjen šunkom i sirom",
		slika: "assets/menu-image.png",
		opis: "(Fini file od piletine punjen šunkom i sirom)",
		cijena: "38,00 kn"
	},
	{
		naziv: "Gulaš sa njokama",
		slika: "assets/menu-image.png",
		opis: "(Fine njoke u gulašu)",
		cijena: "35,00 kn"
	},
	{
		naziv: "Pohana piletina",
		slika: "assets/menu-image.png",
		opis: "(Pohana piletina uz pomfrit)",
		cijena: "30,00 kn"
	}
];

function food_block(placement, classname, image, title, description, price) {
	var div = document.createElement("div");
	div.className = classname;

	var img = document.createElement("img");
	img.src = image;

	var foodtitle = document.createElement("h1");
	foodtitle.innerText = title;

	var desc = document.createElement("p");
	desc.innerText = description;

	var cost = document.createElement("h2");
	cost.innerText = price;

	div.appendChild(img);
	div.appendChild(foodtitle);
	div.appendChild(desc);
	div.appendChild(cost);

	placement.appendChild(div);
}

for (i = 0; i < hrana.length; i++) {
	food_block(
		document.getElementsByClassName("display-food")[0],
		"food-container",
		hrana[i].slika,
		hrana[i].naziv,
		hrana[i].opis,
		hrana[i].cijena
	);
}

var foodcount = document.getElementsByClassName("food-container");
var sfood = document.getElementById("selected-food");

var divstatus = [];
for(i = 0; i < foodcount.length; i++){
    divstatus[i] = 0;
}

for(let i = 0; i < foodcount.length; i++){
    foodcount[i].addEventListener("click", function(){
        if(divstatus[i] == 0){
            food_block(sfood, "food-container", hrana[i].slika, hrana[i].naziv, hrana[i].opis, hrana[i].cijena);
            divstatus[i] = 1;
        }
    })
}
