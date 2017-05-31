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
      $('.header .pane-system-main-menu', context).prepend('<a class="burger-menu"></a>');
      $(".burger-menu", context).click(function() {
        $(".pane-system-main-menu .menu", context).slideToggle('show');
      });
      $('.pane-system-main-menu .menu', context).prepend('<a class="close-menu"></a>');
      $(".close-menu", context).click(function() {
        $(".pane-system-main-menu .menu", context).slideToggle('slow');
      });
    }
  };

  Drupal.behaviors.user = {
    attach: function (context, settings) {
      $('.header .pane-user-login', context).prepend('<a class="login"></a>');
      $(".login", context).click(function(e) {
        e.preventDefault();
        $(".pane-user-login form", context).slideToggle('slow');
      });
    }
  };

  Drupal.behaviors.upcomigEventsSlider = {
    attach: function (context, settings) {
      $('.upcoming-events .view > .view-content', context).on('init', function(){
        var $src = $('.upcoming-events .view-content .slick-slide.slick-current.slick-active img', context).attr('src');
        $('.upcoming-events', context).css('background-image', 'url('+ $src + ')');
      })
      .slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
      })
     .on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var src = $('.upcoming-events .view-content .slick-slide.slick-current.slick-active + .slick-slide img', context).attr('src');
        $('.upcoming-events', context).css('background-image', 'url('+ src + ')');
      })
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
