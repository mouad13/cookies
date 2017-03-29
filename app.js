// variable de nombre de click
var nombreClic = 0;

// function appelée a chaaque clic
function compteur(){
	
	// augmenter la valeur de la variable
	nombreClic++;

}

$("#button").click(function(){
	compteur();
	//console.log(nombreClic);
	afficherScore();
	affichermessage();
});

function afficherScore(){
	$("#affiche").val(nombreClic)
}

function affichermessage(){
	//console.log(index);
	if(nombreClic % 5 === 0){
		var index = Math.floor( Math.random() * array.length ); 
		console.log(index);
		$("#message").html(array[index]);
	}
}

var array = ["allez real",  "puta barca"]
