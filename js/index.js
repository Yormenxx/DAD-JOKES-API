const $boton = document.querySelector(".btn")
const $chiste = document.querySelector(".chiste")


const options = {
    method: "GET",
    headers:{
        "X-Api-Key":"x",
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