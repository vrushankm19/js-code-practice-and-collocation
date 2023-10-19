!function ($) {
    "use strict";
    // *********************************************
    //     document ready start 🚩
    // ****************************
    $(document).ready(function () {
        // *********************************************
        //     Slider start 🚩
        // ****************************
        $('.group-discussion-slider').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          });
    });

    // Your Code 🗒️

    // *********************************************
    //     Do not write your code below.
    // ****************************
}.call(window, window.jQuery); // jquery initializer
