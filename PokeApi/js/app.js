let urlApi = "https://pokeapi.co/api/v2/pokemon/";

// console.log(APIs.data)

// Peticion get con async-await, y manejo de errores con try-catch
async function request(num) {
    try {
        // Hago la petición y espero la respuesta
        let responseData =   await fetch(urlApi + num, {
                                method: "GET",
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                            });
        // Convierto la respuesta a JSON
        let jsonData = await responseData.json();
        
        // Devuelvo la respuesta en formato JSON
        return jsonData;
    } catch (error) {
        // En caso de error
        console.error('Error:', error);
        return null;
    }  
}



let btn = document.getElementById('showPokemon');
btn.addEventListener('click',()=>{
    writeCard()
})

async function writeCard(){
    let num = 1 + Math.floor(Math.random() * 999) // Traigo uno de los primero 1000 pokemon de la pokedex.
    // Consulto y espero respuesta de los datos.
    let data = await request(num); // num representa el numero de la pokedex
    
    let name = data.name;
    let img = data.sprites.front_default;    

    // Sigo con el dibujado de cartas.
    let cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";

    cardContainer.innerHTML = `
                            <div class="card">
                              <img src="${img}">
                              <div class="card__content">
                                <p class="card__title">${name}</p>
                              </div>
                            </div>
    `;

   
}