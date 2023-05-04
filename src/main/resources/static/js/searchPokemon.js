// 검색 기능
let searchPokemon = function(search_pokemon){
    $(".pokemonBox").empty();
    let id = "";
    fetch("https://pokeapi.co/api/v2/pokemon/"+search_pokemon)
        .then((response => response.json()))
        .then((data) => {
            id = data.id;
            let box_small = $("<div></div>").attr({
                id:data.id,
                class:"box_small"
            }).css({
                'float' : 'left',
                'border' : '1px'
            });
            let url = '/pokemonDetail?id='+data.id;
            let a_link = $("<a></a>").attr('href', url);
            let img = $("<img>").attr({
                src: data.sprites.front_default
            }).css('position', 'relative');

            a_link.append(img);
            box_small.append(a_link);
            $(".pokemonBox").append(box_small);

            $(document).on('click', '.box_small', function(){
                sessionStorage.setItem('id', this.id);
            });

            fetch("https://pokeapi.co/api/v2/pokemon-species/"+id)
                .then((response => response.json()))
                .then((data) => {
                    let box_name = $("<p></p>").text(data.names[2].name).css('text-align', 'center');
                    box_small.append(box_name);
                })
        })
        .catch((err) => {
            console.log("해당 포켓몬이 없습니다", err);
        });
};