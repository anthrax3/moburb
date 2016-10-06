/*!
 * Classe $app
 *
 * @author Ramon Barros [contato@ramon-barros.com]
 * @date   2016-04-11
 * Copyright (c) 2016 Ramon Barros
 */
(function ($) {
  'use strict';

  $(window).load(function() {
    $('.flexslider').flexslider({
      animation: 'fade',
      animationLoop: true,
      slideshow: true,
      slideshowSpeed: 4500,
      animationSpeed: 700,
      pauseOnHover: true,
      pauseOnAction:false,
      controlNav: true,
      directionNav: false,
      controlsContainer: '.flex-container'
    });
  });

}(jQuery));