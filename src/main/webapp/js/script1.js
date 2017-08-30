function readBrowserProperties() {
    $.ajax({url: "http://pokeapi.co/api/v2/pokemon/charizard/?format=json", success: function(result){
            console.log(result);
            $("#result").text(JSON.stringify(result));
    }});
};