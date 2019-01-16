

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var searchArticles = function(){
    if(!($("#start-year").val() ==="") && !($("#start-year").val() ==="") ){
        url += '?' + $.param({
            'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
            'q': $("#search-term").val(),
            'begin_date': $("#start-year").val(),
            'end_date' : $("#end-year").val()
        });
    }
    url += '?' + $.param({
        'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
        'q': $("#search-term").val()

    });

    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        console.log(result);
    }).fail(function (err) {
        throw err;
    });
}
$("#run-search").on("click",function(event){
    event.preventDefault();
    console.log("i am running");
    searchArticles();

});