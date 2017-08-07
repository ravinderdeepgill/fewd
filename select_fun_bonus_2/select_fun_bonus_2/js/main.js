// 1.	When the header element is clicked
$('header').on('click', function () {
  // a. Slide up the header
  $('header').slideUp(350);
});

// 2. When the "Throw a party" button is clicked
$('#party-time').on('click', function() {
  // a. Remove the boring class from the section with the id boxes
    $('#boxes').removeClass('boring');
  // b. Fade out all of the divs in #row4 slowly (hint: your selector could be $('#row4 div') )
    $('#row4 div').fadeOut('slow');
  // c. Add a class snazzy in your css and add it to all items with the class .box
    $('.box').addClass('snazzy');
  // c. Change the styling of the span inside of #box3 by adding a class fun (and style that fun class in CSS)
    $('#box3 span').addClass('fun');
  // SlideUp all the h2s on the page quickly
    $('h2').slideUp(350);
  // Add the selected class [already in the CSS] to the divs in #row3
    $('#row3 div').addClass('selected');
  // BONUS: Add a paragraph that says "Time to party!!!" to all boxes with class .add-para (Hint: you'll need to look up the append() method)
    $('.add-para').append("<p>Time to party!</p>");
  // BONUS: Add an h4 that says "Wild!" to the beginning of #box12 (Hint: you'll need to look up the prepend() method)
    $('#box12').prepend("<h4>Wild!</h4>");
});

// 3. When the anchor in #box2 is clicked (hint: your selector could be $('#box2 a') )
  $('#box2 a').on('click', function() {
  // a. Fade in the footer slowly
   $('footer').fadeIn('slow');
});

// 4. When the "Party Pooper" button is clicked
$('#reset').on('click', function() {
  // a. Slide down the header
  $('header').slideDown(350);
  // b. Fade out the footer
  $('footer').fadeOut('fast');
  // c. Show the divs in #row4
  $('#row4 div').show();
  // d. Add the boring class to the element with the id boxes
  $('#boxes').addClass('boring');
  // e. Remove the snazzy class from everything
  $('').removeClass('snazzy');
  // f. Remove the fun class from the span in #box3
  $('#box3 span').removeClass('fun');
  // g. Remove the selected class from the divs in #row3
  $('#row3 div').removeClass('selected');
  // h. Slide down all of the h2s
  $('h2').slideDown(350);
  // BONUS: If you completed the above bonus tasks, look up "remove jquery"
  $('.add-para p').remove();
  // and then see if you can remove the paragraphs and h3s that you added in.
  $('#box12 h4').remove();
  // make sure to ONLY remove those paragraphs and h3s you added, not all the paragraphs and h3s!

  });
