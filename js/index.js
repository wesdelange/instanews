
$(function (){ 
    $('.sections').on('change', function (){
        $('header').css("height", "auto")
        $('.news').empty();
        $('.news').append('<div class="loading"><img id="gif" src="../project-02/assets/images/ajax-loader.gif" alt="loading..."><div>');
        var value = $('select[name=sections]').val()        
        var url = "https://api.nytimes.com/svc/topstories/v2/" + value + ".json";
        url += '?' + $.param({'api-key': "2ecd6c760c464c138f0d96da0aaa5164"});
        $.ajax({
            url: url,
            method: 'GET',
        })
        .done(function(data) { 
            $('.news').empty();
            $.each(data.results, function(key, value){ 
                console.log(value);
                var abstract = value.abstract;
                var link = value.url;
                var img = value.multimedia.length > 0 ? value.multimedia[4].url : false;
                if (img) {
                $('.news').append('<article>' + '<a href=' + link + '>' + '<img src=' + img + '>' + '</a>' + '<div>' + '<p>' + abstract + '</p>' + '</div>' + '</article>');
                } 
                return key < 11;            
            });
        }).fail(function(err) {
            console.log(err);
        })
    });
});
