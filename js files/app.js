let body = document.querySelector("body");
let main = document.querySelector("main");
let footer = document.querySelector("footer");
let arrayMini = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let arrayMaj = [];
let caract = ['@', '-', '_', '.'];
let num = [1,2,3,4,5,6,7,8,9];
let inputChoose = document.getElementById("choose");
let length = inputChoose.value;
let password = [];
let affichage = document.getElementById("affichage");
let characterLengthAffichage = document.getElementById("characterLength");
let bouton = document.querySelector(".btn");
let toggleUpper = document.getElementById("upperCase");
let toggleLower = document.getElementById("lowerCase");
let toggleNumber = document.getElementById("number");
let toggleSymbols = document.getElementById("symbol");
let imageGeneration = document.getElementById("generate")



for (let i = 0; i < arrayMini.length; i++){
    let element = arrayMini[i].toUpperCase();
    arrayMaj.push(element)
}

function affichageCharacters(){
    inputChoose.addEventListener("input", (e)=>{
        console.log(`Input value changed to: ${inputChoose.value}`);
        characterLengthAffichage.textContent = inputChoose.value;
    })
}

function affiChageLower(){
        let randomIndex = Math.floor(Math.random()*arrayMini.length);
        let randomElement = arrayMini[randomIndex];
        password.push(randomElement);
   
}

function affichageUpper(){
    let randomIndex = Math.floor(Math.random()*arrayMaj.length);
    let randomElement = arrayMaj[randomIndex];
    password.push(randomElement)
}
function affichageNumber(){
    let randomIndex = Math.floor(Math.random()*num.length);
    let randomElement = num[randomIndex];
    password.push(randomElement)
}

function affichageSymbols(){
    let randomIndex = Math.floor(Math.random()*caract.length);
    let randomElement = caract[randomIndex];
    password.push(randomElement)
}


function lancerScript(){
    affichageCharacters()
    bouton.addEventListener("click", (e)=>{
        password = []
        while(password.length < inputChoose.value){
            if(toggleUpper.checked){
                affichageUpper()
            }
            if(toggleLower.checked){
                affiChageLower()
            } 
            if(toggleNumber.checked){
                affichageNumber()
            }
            if(toggleSymbols.checked){
                affichageSymbols()
            }
        }
        affichage.textContent = password.join('')
        console.log(password.join(''))
    })
    imageGeneration.addEventListener("click", (e)=>{
        password=[];
        while(password.length < inputChoose.value){
            if(toggleUpper.checked){
                affichageUpper()
            }
            if(toggleLower.checked){
                affiChageLower()
            } 
            if(toggleNumber.checked){
                affichageNumber()
            }
            if(toggleSymbols.checked){
                affichageSymbols()
            }
        }
        affichage.textContent = password.join('')
        console.log(password.join(''))
    })
}

lancerScript()