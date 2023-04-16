$(function(){
    getPokemon();
})
let getPokemon = function(){
    let pokeID = sessionStorage.getItem('id');

    fetch("https://pokeapi.co/api/v2/pokemon/"+pokeID)
        .then((response => response.json()))
        .then((data) => {
            console.log(data);
            document.querySelector(".pokemonBox").innerHTML = `
                    <div>
                        <img src="${data.sprites.front_default}">
                        <p>이름 : ${data.name}</p>
                    </div>
                    `;
        })
        .catch((err) => {
            console.log("해당 포켓몬이 없습니다", err);
        });
};