
// render the list of events

$(function(){
    renderHome(Events.Concert, '.concert', 'concert');
    renderHome(Events.Education, '.education', 'education');
    renderHome(Events.Sports, '.sport', 'sports');
});

//function to render the list of events on the home page
function renderHome(entries, type, indicator){

    var tem= $('.template_feature');
    var events= $(type);
    var instance;
    events.hide();
    events.empty();
    var idx = 0;
    var count = 1;
    instance = tem.clone();

    $.each(entries, function(){

        if (this.feature == true)
        { 
            instance.find('.link' + count).html(this.feature_name);
            instance.find('.link' + count).attr({
                href: 'feed.html#'+ indicator + idx
            });

            instance.find('.link_sub').html(this.date);

            count++;
            instance.removeClass('template_feature');
            events.append(instance);
            events.fadeIn("slow");

        }
        idx = 1 + idx;

   });

}