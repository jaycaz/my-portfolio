// pages.js: Handles transitions between pages

var activePageId = '#page-greeting';

// Move to home page after loading index
$(document).ready(function(){
  setTimeout(function(){
    $('#nav-home').trigger('click');
  }, 1500);
});

function resetActiveButton()
{
  $('.nav-btn.active').removeClass('active');
  $('body').removeClass('body-scroll');
}

// function triggerNextButton()
// {
//   var activeButton = $('.nav-btn.active')[0];
//   var buttons = $('.nav-btn');
//   var activeIndex = $.inArray(activeButton, buttons);
//
//   if(activeIndex != -1 && activeIndex < buttons.size()-1) {
//     resetActiveButton();
//     buttons.get(activeIndex+1).trigger('click');
//   }
// }
//
// function triggerPrevButton()
// {
//   var activeButton = $('.nav-btn.active');
//   var buttons = $('.nav-btn');
//   var activeIndex = $.inArray(activeButton, buttons);
//
//   if(activeIndex != -1 && activeIndex > 0) {
//     resetActiveButton();
//     buttons.get(activeIndex-1).trigger('click');
//   }
// }

function vw()
{
  return document.documentElement.clientWidth;
}

function vh()
{
  return document.documentElement.clientWidth;
}

function snapToPage(pageId)
{
  var offset = $(pageId).offset();
  var dx = offset.left;
  var dy = offset.top;

  $('#pages').css({left : '-=' + dx, top : '-=' + dy});
}

function moveToPage(pageId)
{
  var offset = $(pageId).offset();
  var dx = offset.left;
  var dy = offset.top;

  $('#pages').animate({left : '-=' + dx, top : '-=' + dy}, 'fast');
}

// Dynamic resizing of pages
$(window).resize(function(){
  // $(this).attr('width', vw())
        //  .attr('height', vh());
  snapToPage(activePageId);
});

// // Keybindings
// $(document).keydown(function(event){
//   // console.log('Key code ' + event.which + ' registered.');
//   if(event.which == 39) { // Right Arrow
//     triggerNextButton();
//   }
//   else if(event.which == 37) { // Right Arrow
//     triggerPrevButton();
//   }
// })

// Callbacks for individual nav buttons
$('#nav-home').click(function(){
  resetActiveButton();
  $(this).addClass('active');
  moveToPage('#page-home');
  activePageId = '#page-home';

});

$('#nav-coding').click(function(){
  resetActiveButton();
  $(this).addClass('active');
  moveToPage('#page-coding');
  activePageId = '#page-coding';

});

$('#nav-design').click(function(){
  resetActiveButton();
  $(this).addClass('active');
  moveToPage('#page-design');
  activePageId = '#page-design';

});

$('#nav-projects').click(function(){
  resetActiveButton();
  $(this).addClass('active');
  moveToPage('#page-projects');
  activePageId = '#page-projects';
  $('body').addClass('body-scroll');

});

$('#nav-contact').click(function(){
  resetActiveButton();
  $(this).addClass('active');
  moveToPage('#page-contact');
  activePageId = '#page-contact';

});
