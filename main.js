var updatedImage = ["Dad image.jpeg","Mom image.jpeg", "Brother image.jpeg", "Sister image.jpeg"];
var updatedName = ["Avtar", "Reshma", "Krish", "Aarna" ];
var i = 0; 
function change (){
    document.getElementById("family_img").src= updatedImage[i];
    document.getElementById("one").innerHTML= updatedName[i];
    i++
}