
// Exercice 1

alert( "Exercice 1" )

var agePermis = Number(prompt( "Entrer votre âge" ));

if(agePermis >= 18 && agePuyDuFou < 1){
  alert( "Vous êtes en âge de conduire" )
}else if(agePermis < 18){
  alert( "Vous êtes trop jeune pour conduire" )
}else{
  alert("age non valide")
}


// Exercice 2

alert( "Exercice 2" )

var agePuyDuFou = Number(prompt("Entrer votre âge"));

if( agePuyDuFou > 1 && agePuyDuFou < 5){

  alert( "C'est gratuit pour vous !" )

}else if( agePuyDuFou >= 5 && agePuyDuFou <= 12){

  alert( "Votre billet coûte 20 euros" )

}else if( agePuyDuFou > 12 && agePuyDuFou <= 18){

  alert( "Votre billet coûte 25 euros" )
}
 else if( agePuyDuFou > 18){
  alert( "Votre billet coûte 35 euros" )
}else{
  alert( "age non valide")
}
