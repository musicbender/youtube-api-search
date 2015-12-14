$(document).ready(function(){
    
    $('.search-form').submit(function(){
        event.preventDefault();
        var input = $('.form-input').val();
        getRequest(input);
    });
    
    function getRequest (searchTerm) {
        var params = {
            part: "snippet",
            key: 'AIzaSyDwbooupkorSaCDsUHfwnnMQlLZDhNRyzM',	
            q: searchTerm,
            maxResults: 6
        }
        
        var url = 'https://www.googleapis.com/youtube/v3/search';
        
        $.getJSON(url, params, function(data){
            console.log(data);
            showResults(data.items);
        });
    }
    
    function showResults(results) {
        var html = "";
        $.each(results, function(index, value){
            html += '<li class="item"><a href="https://www.youtube.com/watch?v=' + value.id.videoId + '"><img class="item-thumbnail" src="' + value.snippet.thumbnails.default.url + '"><h3 class="item-title">' + value.snippet.title + '</h3></a></li>';
            $('.results').html(html);
        });
    }
});