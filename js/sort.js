
// render the list of events

$(function(){
    render(Events.Concert, '.events_concert', 'concert');
    render(Events.Education, '.events_education', 'education');
    render(Events.Sports, '.events_sports', 'sports');
    render(Events.Community, '.events_community', 'community');
    remove();
});

//function to render the events
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