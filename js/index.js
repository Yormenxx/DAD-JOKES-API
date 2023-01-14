const $boton = document.querySelector(".btn")
const $chiste = document.querySelector(".chiste")
//Web rapid api introduces key --- Not key -- not works --- you should introduces your personal key and the program run it.

const options = {
    method: "GET",
    headers:{
 //       "X-Api-Key" introduces de key here:,
    },
};

const dadUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getChiste (){

    $boton.textContent="loading..."

    const response = await fetch(dadUrl, options)
    const data = await response.json()

    const dataJoke = data[0].joke

    $chiste.textContent = dataJoke 
    
    $boton.textContent="Click"
}



$boton.addEventListener("click",getChiste)