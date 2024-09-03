let body = document.querySelector("body");
let main = document.querySelector("main");
let footer = document.querySelector("footer");
let password = document.getElementById("password");
let email = document.getElementById("email");
let name = document.getElementById("name");
let lastName = document.getElementById("lastName");
const bouton = document.querySelector(".btn-1");
let container = document.querySelector(".container")
let messageError = null;


function verifierNom(){
    bouton.addEventListener("click", (e)=>{
        if (name.value === ""){
            e.preventDefault()
            name.style.border = "3px double red"
            name.style.transition = "all .01s"
            name.classList.add("blink-2")

        }
    })
}
function verificationLastName(){
    bouton.addEventListener("click", (e)=>{
        if(lastName.value === ""){
            e.preventDefault()
            lastName.style.border = "3px double red"
            lastName.style.transition = "all .01s"
            lastName.classList.add("blink-2")
        }
    })
}

function verifierPassword(){
    let messageEror = document.createElement("p");
    messageEror.classList.add("errorPassword");
    container.appendChild(messageEror)
    bouton.addEventListener("click", (e)=>{
        let passwordValue = password.value
        if(passwordValue === ""){
            e.preventDefault()
            messageEror.textContent = "veuillez insérer votre mot de passe svp"
        }else if (passwordValue.length < 10){
            e.preventDefault()
            messageEror.textContent = "votre mot de passe doit conteninr au moins 10 caractères"
        }
    })
}

function afficherPassword(){
    

}

function verfiferEmail(){
    bouton.addEventListener("click", (e)=>{
        if (email.value === ""){
            e.preventDefault()
            email.style.border = "3px double red";
            email.style.transition = "all .01s"
            email.classList.add("blink-2")
        }else if(!email.value.includes("@") || !email.includes(".com")){
            e.preventDefault()
            email.style.border = "3px double red";
            email.style.transition = "all .01s"
            email.classList.add("blink-2")

        }
       
    })
}

function lancerScript(){
    verifierNom()
    verifierPassword()
    verfiferEmail()
    afficherPassword()
    verificationLastName()
}
lancerScript()