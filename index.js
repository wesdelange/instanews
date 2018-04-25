$(function (){
    $('.sections').on('change', function (){
        var value = $('select[name=sections]').val()
        
        var url = "https://api.nytimes.com/svc/topstories/v2/" + value + ".json";
        url += '?' + $.param({'api-key': "2ecd6c760c464c138f0d96da0aaa5164"});
            
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(data){
            //('news').empty();
            $.each(data.results, function(key, value){ 
                var abstract = value.abstract;
                var link = value.url;
                var img = value.multimedia[2].url;
                //console.log(img);
                $('.news').append('<div>' + '<a href=' + link + '>' + '<img src=' + img + '>' + '</a>' + '<p>' + abstract + '</p>' + '</div>' + '</article>')
            });
        }).fail(function(err) {
            console.log(err);
        })
    });
});







