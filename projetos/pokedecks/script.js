var quantidade= document.querySelector('#pegar');
function pk(){
    pegaPokemons(quantidade.value);
}


function pegaPokemons(quantidade){
    fetch(`https://pokeapi.co/api/v2/pokemon?limit= ${quantidade}`).then(response=> response.json()).then(allpokemon => {

        let pokemons=[];
        allpokemon.results.map((val) =>{
            
            
            fetch(val.url).then(response=> response.json()).then(pokemonsingle=>{
                pokemons.push({nome:val.name,imagem:pokemonsingle.sprites.front_default});

                if(pokemons.length == quantidade){
                    let pokemonBoxes= document.querySelector('.pokemon-boxes');
                    pokemonBoxes.innerHTML='';
                    pokemons.map(function(val){
                        pokemonBoxes.innerHTML+=`<div class="pokemon-boxe">
                        <img src="${val.imagem}" alt="">
                        <p>${val.nome}</p>
                        </div>`
                    })
                    
                }
            
            })
        })
        console.log(allpokemon);
    })

}


