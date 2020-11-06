  $(document).ready(function() {
      var $narrowHeader=$(".mainHeaderSection .narrowHeader");
      var $narrowHeaderTabbables=$narrowHeader.find('input, a, button');
      var $narrowHeaderAnchorTags=$narrowHeader.find('a');

      var $wideHeader=$(".mainHeaderSection .wideHeader");
      var $wideHeaderTabbables=$wideHeader.find('input, a, button');
      var $wideHeaderAnchorTags=$wideHeader.find('a');

      $narrowHeaderTabbables.prop('disabled',true);
      $narrowHeaderAnchorTags.addClass('disabled').prop("tabindex","-1");

      $(window).scroll(function() {
          var scrollTop=$(window).scrollTop();

          var newWideHeaderOpacity=1-(scrollTop/150);
          var newNarrowHeaderOpacity=scrollTop/200;

          $(".mainHeaderSection .wideHeader").css("opacity",newWideHeaderOpacity);
          $narrowHeader.css("opacity",newNarrowHeaderOpacity);

          if(newNarrowHeaderOpacity>=0.35) {
              $narrowHeaderTabbables.prop('disabled',false);
              $narrowHeaderAnchorTags.removeClass('disabled').prop("tabindex","0");

              $wideHeaderTabbables.prop('disabled',true);
              $wideHeaderAnchorTags.addClass('disabled').prop("tabindex","-1");
          } else {
              $narrowHeaderTabbables.prop('disabled',true);
              $narrowHeaderAnchorTags.addClass('disabled').prop("tabindex","-1");

              $wideHeaderTabbables.prop('disabled',false);
              $wideHeaderAnchorTags.removeClass('disabled').prop("tabindex","0");
          }
      });
  });
