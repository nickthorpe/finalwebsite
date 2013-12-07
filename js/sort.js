
// render the list of events

$(function(){
    // render the fisrt 
    // alert("s");
    render(Events.Concert, '.events_concert');
    render(Events.Education, '.events_education');

});

//function to render the events
function render(entries, type){

    var tem= $('.template');
    var events= $(type);
    var instance;
    events.hide();
    events.empty();

    $.each(entries, function(){
        instance = tem.clone();
        instance.find('.name').html(this.name);
        instance.find('.date').html(this.date);
        instance.find('.time').html(this.time);
        instance.find('.address').html(this.address);
        instance.find('.address').attr({
            href: 'http://maps.google.com/maps?q=' + this.address

        });

        instance.find('.url').html(this.url);
        instance.find('.url').attr({
            href: this.url
        });

        instance.find('.pic').attr({
            src: this.pic,
            alt: 'Picture of ' + this.name
        });

        instance.removeClass('template');
        events.append(instance);
        events.fadeIn("slow");
    });
}

