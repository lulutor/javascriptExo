
// Exercice 1

alert( "Exercice 1" )

var agePermis = Number(prompt( "Entrer votre âge" ));

if(agePermis >= 18){
  alert( "Vous êtes en âge de conduire" )
}else{
  alert( "Vous êtes trop jeune pour conduire" )
};


// Exercice 2

alert( "Exercice 2" )

var agePuyDuFou = Number(prompt("Entrer votre âge"));

if( agePuyDuFou < 5){

  alert( "C'est gratuit pour vous !" )

}else if( agePuyDuFou >= 5 && agePuyDuFou <= 12){

  alert( "Votre billet coûte 20 euros" )

}else if( agePuyDuFou > 12 && agePuyDuFou <= 18){

  alert( "Votre billet coûte 25 euros" )

}else{

  alert( "Votre billet coûte 35 euros" )
}
