 $(document).ready(function () {
    let tabsItem = $('.tabs-item');

    tabsItem.on('click', function(event){
    event.preventDefault();


    let activecontent = $(this).attr('href');
        console.log($(this).attr('href'));
    $('.visible').toggleClass('viseble');
    $(activecontent).toggleClass('visible');

    $('.tabs-item-active').toggleClass('tabs-item-active');
    $(this).toggleClass('tabs-item-active');
    });

});