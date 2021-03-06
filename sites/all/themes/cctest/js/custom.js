(function($) {

  Drupal.behaviors.mainSlider = {
    attach: function (context, settings) {
      $('.main-slider .view > .view-content', context).slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true
      });
    }
  };

  Drupal.behaviors.select = {
    attach: function (context, settings) {
      $('select', context).select2({
        width: '262px'
      });
    }
  };

  Drupal.behaviors.burgerMenu = {
    attach: function (context, settings) {
      this.slideElement('.header .pane-system-main-menu', 'burger-menu', '.burger-menu', '.pane-system-main-menu .menu', context);
      this.slideElement('.pane-system-main-menu .menu', 'close-menu', '.close-menu', '.pane-system-main-menu .menu', context);
      this.slideElement('.header .pane-user-login', 'login', '.login', '.pane-user-login form', context);
    },
    slideElement: function(el, elClass, elClick, elSlow, context) {
      $(el, context).prepend('<a class=\"' + elClass + '\"></a>');
      $(elClick, context).click(function() {
        $(elSlow, context).slideToggle('slow');
      });
    }
  };

  Drupal.behaviors.upcomigEventsSlider = {
    attach: function (context, settings) {
      var $slider             = $('.upcoming-events .view > .view-content', context);
      var $sliderImages       = $slider.find('img');
      var $sliderImagesLength = $slider.find('img').length;

      for (var i = 0; i < $sliderImagesLength; i++) {
        $($sliderImages[i]).clone().addClass('image').appendTo('.upcoming-events');
      };

      $('.image', context).wrapAll('<div class="slider-wrapper-img"></div>');

      var $slideImg = $('.slider-wrapper-img', context);

      var $wrapSlider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        asNavFor: $slider
      }

      $slideImg.slick($wrapSlider);

      $wrapSlider.dots = true;
      $wrapSlider.asNavFor = $slideImg;

      $slider.slick($wrapSlider);
    }
  };

  Drupal.behaviors.sameSliders = {
    attach: function (context, settings) {
      this.sliderInit('.find-designer-maker .view > .view-content', context);
      this.sliderInit('.latest-from-craft-central .view > .view-content', context);
    },
    sliderInit: function(el, context) {
      var sameSliders = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      };
      $(el, context).slick(sameSliders);
    }
  };

  Drupal.behaviors.existingPartners = {
    attach: function (context, settings) {
      $('.existing-partners .view > .view-content', context).slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    }
  };

  Drupal.behaviors.nodeContent = {
    attach: function(context, settings) {
      var listLinks   = $('.list .views-row .views-field-title a', context);
      var contentSection = $('.picture .views-row > .node', context);
      $('.list .views-row-first .views-field-title a', context).addClass('active');
      listLinks.click(function(e) {
        e.preventDefault();
        var $this = $(this, context);
        var getID = $this.attr('href').replace('/', '');

        listLinks.removeClass('active');
        $this.addClass('active');
        contentSection.hide();
        $(getID, context).show();
      });
    }
  };

  $(document).ajaxComplete(function() {
    Drupal.behaviors.select.attach();
    var $designerMakerSlider = $('.find-designer-maker .view > .view-content');
    if ($designerMakerSlider && !$designerMakerSlider.hasClass('slick-slider')) {
      Drupal.behaviors.sameSliders.sliderInit('.find-designer-maker .view > .view-content');
    };
  });

})(jQuery);
