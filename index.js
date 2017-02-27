
$(function() {

    var data = [
        {
            "image": "http://free.clipartof.com/174-Devil-Avatar-Character-With-Horns-And-Fangs-Free-Vector-Clipart-Illustration.jpg",
            "name": "Jeremy",
            "timestamp": "1477509774000",
            "secret": "red"
        },
        {
            "image": "http://images.clipartpanda.com/avatar-20clip-20art-169-Propeller-Hat-Nerd-Avatar-Character-Free-Vector-Clipart-Illustration.jpg",
            "name": "Greg",
            "timestamp": "1474658574000",
            "secret": "green"
        },
        {
            "image": "http://free.clipartof.com/163-Strawberry-Candy-Swirl-Avatar-Character-Free-Vector-Clipart-Illustration.jpg",
            "name": "Patrick",
            "timestamp": "1428002688000",
            "secret": "pink"
        }
    ];
    //select 'panel-body' elements
    var elements = $('.panel-body');

    //loop data to create the DOM elements for each object

    $.each( data, function( index, value ){
    var myDate = new Date(Number(data[index].timestamp));
        var $image = $('<img>',{src: data[index].image,class: 'image_tag'});
        var image_div = $("<div>", {class: 'data_container',id :index}).append($image[0]);
        var $name = $('<p>', {text: data[index].name, class: 'text_tag'});
        var $time = $('<span>', {text:myDate.toLocaleDateString(), class: 'time_tag' });
        var data_div = $("<div>").attr('class','data_container').append($name[0],$time[0]);
        elements[index].append(image_div[0],data_div[0]);
});

//image styling
$('.panel-body').css("background-color",'#ccc');
$('.panel-body').css('border-bottom','3px dotted red');
$('.data_container .image_tag').css('border-radius','50%');




    // click event for panel-body elements
    elements.click(function(){
        // get index
       var index = this.children[0].attributes.id.value;
        // get color using index
        var color = data[index].secret;
        $('#text_element').css('background-color', color).val(color);
    });

    //click event for the button
    $('.btn').click(function(){
        $('#text_element').removeAttr('style').val('');
    })
});
