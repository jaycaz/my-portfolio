// pages.js: Handles transitions between pages

var activePageId = '#page-greeting';

function resetActiveButton()
{
  $('.nav-btn.active').removeClass('active');
}

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

  $('#pages').animate({left : '-=' + dx, top : '-=' + dy});
}

// Dynamic resizing of pages
$(window).resize(function(){
  // $(this).attr('width', vw())
        //  .attr('height', vh());
  snapToPage(activePageId);
});

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

});

$('#nav-contact').click(function(){
  resetActiveButton();
  $(this).addClass('active');
  moveToPage('#page-contact');
  activePageId = '#page-contact';

});
