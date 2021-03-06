;(function(){
  var pawser;

  pawser = $(".loading-message").pawser();

  function isScrolledIntoView(element) {
    var documentTop = $(window).scrollTop();
    var documentBottom = documentTop + $(window).height();

    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height();

    return ((elementTop <= documentBottom) && (elementBottom >= documentTop));
  }

  $(window).load(function() {
    setTimeout(function() {
      $(".page-loader").fadeOut(1000, function() {
        $(this).remove();
        pawser && pawser.stop();
      });
    }, 2000);
  })

  $(function() {

    $(".register-container .btn-primary").each(function() {
      var texts = [
        "Register",
        "Register Now",
        "Barcamp awaits",
        "We're Bear-y excited",
        "Rawr?",
        "Flat Design Is So In Now",
        "The Wait Is Unbearible",
        "A-bear-ilently",
        "Bear with me",
        "Are you pre-beared?",
        "Straw-bear-ys Are Delicious",
        "I'm going Bear-zerk",
        "I'm so em-bear-est...",
        "Built With Our Bear Hands",
        "It's Absolute Panda-monium",
        "Any-bear-y notice the puns?",
        "A Real Kodiak Moment...",
        "It's A Panda-emic!",
        "It's Bearing Down On Us",
        "Good time? Furrr Sure.",
        "Bear Grylls Is Coming?",
        "Polarizing",
        "Impawsible!",
        "Another Barcamp? Fur Real?"
      ]
      var element = $(this);
      var randomText = texts[Math.floor(Math.random()*texts.length)];
      var randomZ = Math.floor(Math.random()*361);
      var randomScale = Math.random() * (1.5 - 0.5) + 0.5;
      var randomMargin = Math.floor(Math.random()*21);
      var randomColor = Math.floor(Math.random()*16777215).toString(16);

      _.each(["-webkit-transform", "-moz-transform", "-ms-transform", "transform"], function(property) {
        element.css(property, "scale(" + randomScale + ") rotateZ(" + randomZ + "deg)");
      });
      element.css("background-color", "#" + randomColor);
      element.css("margin", randomMargin);
      element.html(randomText);
    });


    // $(window).scroll( _.debounce(animateOnScreenSprites, 300) );
    // animateOnScreenSprites();

    $("[data-slider='sponsors']").unslider();

    var aboutSlider = $("[data-slider='about']").unslider({dots: true, delay: false}),
        aboutData = aboutSlider.data('unslider');

    aboutSlider
      .on('swipeleft', function(e) {
        aboutData.next();
      })
      .on('swiperight', function(e) {
        aboutData.prev();
      })
      .on('move', function(e) {
        var left = 100 * e.distX / aboutSlider.width();
      })
      .on('movestart', function(e) {
        // If the movestart heads off in a upwards or downwards
        // direction, prevent it so that the browser scrolls normally.
        if ((e.distX > e.distY && e.distX < -e.distY) ||
            (e.distX < e.distY && e.distX > -e.distY)) {
          e.preventDefault();
          return;
        }
      });

    // Find the tallest section, and make them all that tall.
    var maxHeight = 0;
    aboutSlider.find("ul li").each(function(e) {
      height = $(this).outerHeight();

      if (height > maxHeight) {
        maxHeight = height;
      }
    }).css('height', maxHeight);




    $("[data-slider='about'] li").click(function(e) {
      var i = $(this).index();
      aboutData.move(i);
    });

    $("nav a, .next-section").click(function(e) {
      e.preventDefault();
      var page = this.hash,
          target = $(page);

      $('html, body').stop().animate({
          'scrollTop': target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = page;
      });
    });

    // var delayedStart;

    $(".nav li").on('activate', function() {
      var page = $(this).find('a')[0].hash;
    });
  });

  $('.animated-background-element').animateElement();
})();
