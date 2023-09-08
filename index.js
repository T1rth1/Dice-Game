// alert("hello");
var randomNumber1 = Math.floor(Math.random()*6 + 1);
var v1 = "dice" + randomNumber1 + ".png"; 
var v2 = "images/" + v1; 
document.querySelector("img.img1").setAttribute("src",v2); 
var randomNumber2 = Math.floor(Math.random()*6 + 1);
var t1 = "images/dice" + randomNumber2 + ".png";
document.querySelector("img.img2").setAttribute("src",t1);

if(randomNumber1>randomNumber2){ 
    document.querySelector("h1").innerHTML= "<span style='font-size:100px;'>&#127919;</span> Player 1 wins." 
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "<span style='font-size:100px;'>&#127919;</span> Player 2 wins."
}
else{
    document.querySelector("h1").innerHTML = "<span style='font-size:100px;'>&#129302;</span> Match is draw."
}