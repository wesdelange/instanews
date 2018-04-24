$(function (){
    $('.sections').on('change', function (){
        var value = $('select[name=sections]').val()
        
        var url = "https://api.nytimes.com/svc/topstories/v2/" + value + ".json";
        url += '?' + $.param({'api-key': "2ecd6c760c464c138f0d96da0aaa5164"});
            
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(data){
            $.each(data, function(key, value){
                ('.news').append('<p>' + data.results[0].abstract + '</p>')
            });
            $.fail(function(err) {
                throw err;
              });
        });
    });
});







