const URL = " https://pokeapi.co/api/v2/type/";

const getTypesPokemons = async () =>{
    try{
        const result = await fetch(URL)
        const res = await result.json()
        return res
    }catch(error){
        console.log(error)
    }


}

export {getTypesPokemons}