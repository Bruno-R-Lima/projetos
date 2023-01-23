const pokemonNome=document.querySelector('span.pokemon-nome');
const pokemonId=document.querySelector('.pokemon-id');
const pokemonImg=document.querySelector('.imagem-pokemon');
const form=document.querySelector('.form');
const input=document.querySelector('.input-search');
const btnPrev=document.querySelector('.btn-prev');
const btnNext=document.querySelector('.btn-next');
let searchPokemon= '1'; 


const fetchPokemon= async(pokemon)=>{
    const apiResponse= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const data= await apiResponse.json();
    return data;
}

const rederPokemon= async(pokemon)=>{
    // pokemonNome.innerHTML='loading...';
    // pokemonId.innerHTML='';

    const data= await fetchPokemon(pokemon);

    if(data){
        pokemonNome.innerHTML= data.name;
        pokemonId.innerHTML=data.id;
        pokemonImg.src= data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value='';
        searchPokemon= data.id;
    }   else    {
            pokemonNome.innerHTML= 'Not found :c';
            pokemonId.innerHTML='';
    }
}

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    rederPokemon(input.value.toLowerCase());
    
});

btnNext.addEventListener('click',()=>{
    searchPokemon+=1;
    rederPokemon(searchPokemon);
})
btnPrev.addEventListener('click',()=>{
    searchPokemon-=1;
    rederPokemon(searchPokemon);
});

rederPokemon(searchPokemon);

