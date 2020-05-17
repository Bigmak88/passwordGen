// Create Variables for Criteria (string.split method)
  
var getUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var getUpperArr = getUpper.split("");
var getLower = "abcdefghijklmnopqrstuvwxyz";
var getLowerArr = getLower.split("");
var getNumber = "0123456789";
var numberArr = getNumber.split("");
var getSymbol = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symbolArr = getSymbol.split("");

// Create a Function to GeneratePass

function generatePass(){
 var allChars = [];
 var result = "";

// Create Prompt

 var promptLength = prompt("How many characters would you like your password to be?");

 // length must be between 8-128 characters

 if(promptLength <8 || promptLength > 128){
     alert("You must have a password between 8 and 128 characters!");
 }

// confirm criteria
 
 else{
     if(confirm("Do you want to include upper case letters?")){
         Array.prototype.push.apply(allChars, getUpperArr);
     }

     if(confirm("Do you want to include lower case letters?")){
         Array.prototype.push.apply(allChars, getLowerArr);
     }

     if(confirm("Do you want to include numbers?")){
         Array.prototype.push.apply(allChars, numberArr);
     }

     if(confirm("Do you want to include special characters?")){
         Array.prototype.push.apply(allChars, symbolArr);
     }

     // Create an Alert for minimum critera
     if(allChars.length===0){
         alert("Choose at least one option to generate a password!");
     }

// Run for loop to use confirmed information and generate password as a result

     else{
         for(var i=0; i<promptLength; i++){
             var random = Math.floor(Math.random()*allChars.length);
             result += allChars[random];
         }
     }
     }

// Print Result to El

     document.getElementById("password").innerHTML = result;
}

// Copy password with clipboard (Bonus)

function copyPassword(){

 document.querySelector("textarea").select();
 document.execCommand("Copy");
 alert("Password copied!");
}