let arrayMini = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let arrayMaj = [];
let caract = ['@', '-', '_', '.']
let num = [1,2,3,4,5,6,7,8,9]
let length = 12
let password = []

for (let i = 0; i < arrayMini.length; i++){
    let element = arrayMini[i].toUpperCase();
    arrayMaj.push(element)
}

function generateRandomMini(){
    let randomindex = Math.floor(Math.random()*arrayMini.length);
    let randomElement = arrayMini[randomindex];
    password.push(randomElement)
}

function generateMaj(){
    let randomindex = Math.floor(Math.random()*arrayMini.length);
    let randomElement = arrayMaj[randomindex];
    password.push(randomElement)
}

function generateCar(){
    let randomindex = Math.floor(Math.random()*caract.length);
    let randomElement = caract[randomindex];
    password.push(randomElement)
}

function generateNum(){
    let randomindex = Math.floor(Math.random()*num.length);
    let randomElement = num[randomindex];
    password.push(randomElement)

}

function lancerScript(){
    while(password.length < length){
        generateMaj()
        generateCar()
        generateNum()
        
    }
    console.log(password.join(''))

   
}
lancerScript()