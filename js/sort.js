
// render the list of events

$(function(){
    // render the home list
    render(Events.Concert, '.events_concert', 'concert');
    render(Events.Education, '.events_education', 'education');
    render(Events.Sports, '.events_sports', 'sports');
    render(Events.Community, '.events_community', 'community');
    remove();
    var $scrollingDiv = $("#scrollingDiv");

    //search 
    $('.search').click(function(){
        var input = $('.input').val();
        // search for all the events
        // search(Events.Concert,input);
        // search(Events.Education,input);
        // search(Events.Sports,input);
        // search(Events.Community,input);
    });

    $('.input').keyup(function() {
        
        //empty the search list        
         $('.search_list').empty(); 
        var search_term = $(this).val().toLowerCase();
        // run the search
        search(Events.Concert,search_term);
        search(Events.Sports,search_term);
        search(Events.Education,search_term);
        search(Events.Community,search_term);

    })

 
    $(window).scroll(function(){            
        $scrollingDiv
            .stop()
            .animate({"marginTop": ($(window).scrollTop() + 30) + "px"}, "slow" );          
    });


});

function search(entries, search_term) {

    results = [];
    id_array = []; //store id

    if (search_term != '') {
        // search_results_box.html('geelert');
        $.each(entries, function() {
            var name = this.name;
            var id = this.id;
            var titleLowerCase = name.toLowerCase();
            
            if (titleLowerCase.indexOf(search_term) !== -1) {
                results.push([name]);
                id_array.push([id]);
            };
        });
        //print the results
        printResults(results, id_array);
    } else{
        //clear the searchbox
        $('input').html();
        results = [];

        printResults(results, id_array);
    };

}

function printResults(results, id_array) {

    for (var i=0;i<results.length;i++)
    {
        //print the result and id in the search list
        $('.search_list').append("<li><a href='feed.html#" +  id_array[i] + "'>" + results[i] + "</a></li>");
    }
}

//function to render the events_community
function render(entries, type, indicator){

    var tem= $('.template');
    var events= $(type);
    var instance;
    events.hide();
    events.empty();
    var idx = 0;
    $.each(entries, function(){
        instance = tem.clone();
        instance.find('.name').html(this.name);
        instance.find('.date').html(this.date);
        instance.find('.time').html(this.time);
        instance.find('.address').html(this.address);
        instance.find('.address').attr({
            href: 'http://maps.google.com/maps?q=' + this.address

        });
        
        instance.find('.url').attr({
            action: this.url
        });

        instance.find('.pic').attr({
            src: this.pic,
            alt: 'Picture of ' + this.name,
            id: indicator + idx
        });

        instance.removeClass('template');
        events.append(instance);
        events.fadeIn("slow");
        idx = 1 + idx;
    });
}

function remove () {
    var x = $('#community5').parent().parent();
    x.remove("hr").next('hr').remove();
}