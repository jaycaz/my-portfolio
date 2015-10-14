// peek-from-bottom.js: Controls behavior for elements that peek from bottom of screen

var oldPromptText;
var newPromptText = 'Return to Page';
var oldPeekItemTop = $('.peek-item').css('margin-top');
var oldPeekDivTop = $('.peek-from-bottom').css('margin-top');
var newPeekTop = '-100px';
var showTop = '-700px';


$('#nav-coding').click(function() {
  // Move items slightly when the page is loaded
  $('#coding-skills').find('.peek-item').css({marginTop: newPeekTop})
                                        .delay(400)
                                        .animate({marginTop: oldPeekItemTop}, 300);
});

$('#nav-design').click(function() {
  // Move items slightly when the page is loaded
  $('#design-skills').find('.peek-item').css({marginTop: newPeekTop})
                                        .delay(400)
                                        .animate({marginTop: oldPeekItemTop}, 300);
});

// Hover: prompt user to click
$('.page').on('mouseenter',
                          function() {
                            $('.peek-prompt').fadeTo(200, 1).clearQueue();
                            if(!$(this).hasClass('peek-active')) {
                              $('.peek-item').stop().animate({marginTop: newPeekTop}, 200);
                            }
                          })
                      .on('mouseleave',
                          function() {
                              $('.peek-prompt').fadeTo(200, 0).clearQueue();
                              if(!$(this).hasClass('peek-active')) {
                                $('.peek-item').stop().animate({marginTop: oldPeekItemTop}, 200);
                            }
                          });

// Click: toggle showing peek item over rest of page
$('.peek-from-bottom').click(
                      function() {
                        if(!$(this).hasClass('peek-active')) {
                          // Add element to dim screen as needed
                          $('body').prepend('<div id="page-cover"></div>')
                          $('.peek-from-bottom').addClass('peek-active');
                          $('#page-cover').animate({opacity: 0.9}, 200);
                          oldPromptText = $(this).find('.peek-prompt').text();
                          $(this).find('.peek-prompt').text(newPromptText);
                          $('.peek-from-bottom').animate({marginTop: showTop}, 200);
                        }
                        else {
                          $(this).find('.peek-prompt').text(oldPromptText).css({opacity: 0});
                          $('.peek-from-bottom').animate({marginTop: oldPeekDivTop}, 200);
                          $('.peek-from-bottom').removeClass('peek-active');
                          $('#page-cover').animate({opacity: 0}, 200);
                          $('#page-cover').remove();
                        }
                      });
