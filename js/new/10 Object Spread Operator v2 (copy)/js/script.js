// if (screen.width < 960) {
//     alert("hello");
//      var src = $('img#feature').attr('src');
//      if (src.indexOf(".jpg") > -1) {
//          src = src.replace('.jpg','_m.jpg' );
//      } else if (src.indexOf(".png") > -1){
//          src = src.replace('.png','_m.png' );
//      } else {
//          src = src.replace('.webp','_m.webp' );
//      }
//      $(img#feature).attr('src', src);
// };

// if (screen.width < 960) {
//      var src = $('.mv-767-jpg').attr('src');
//      if (src.indexOf(".jpg") > -1) {
//          src = src.replace('.jpg','_m.jpg' );
//      } else if (src.indexOf(".png") > -1){
//          src = src.replace('.png','_m.png' );
//      } else {
//          src = src.replace('.webp','_m.webp' );
//      }
//      $('.mv-767-jpg').attr('src', src);
// };

// if (screen.width < 960) {
//      var src = $('.mv-767-png').attr('src');
//      if (src.indexOf(".jpg") > -1) {
//          src = src.replace('.jpg','_m.jpg' );
//      } else if (src.indexOf(".png") > -1){
//          src = src.replace('.png','_m.png' );
//      } else {
//          src = src.replace('.webp','_m.webp' );
//      }
//      $('.mv-767-png').attr('src', src);
// };

// if (screen.width < 960) {
//      var src = $('.mv-767-webp').attr('src');
//      if (src.indexOf(".jpg") > -1) {
//          src = src.replace('.jpg','_m.jpg' );
//      } else if (src.indexOf(".png") > -1){
//          src = src.replace('.png','_m.png' );
//      } else {
//          src = src.replace('.webp','_m.webp' );
//      }
//      $('.mv-767-webp').attr('src', src);
// };

// if (screen.width < 960) {
//   $('img[src$=".jpg"]').each(function(index,element) {   
//     element.src = element.src.replace('.jpg','_M.jpg');
//    });
//   $('img[src$=".jpeg"]').each(function(index,element) {   
//     element.src = element.src.replace('.jpeg','_M.jpeg');
//    });
//   $('img[src$=".png"]').each(function(index,element) {   
//     element.src = element.src.replace('.png','_M.png');
//    });
//   $('img[src$=".svg"]').each(function(index,element) {   
//     element.src = element.src.replace('.svg','_M.svg');
//    });
//   $('img[src$=".webp"]').each(function(index,element) {   
//     element.src = element.src.replace('.webp','_M.webp');
//    });
// }

var screen_width = $( window ).width();
if (screen_width < 960) {
    $('img').each(function() {
        var src = $(this).attr("src");
        $(this).attr("src", src.replace(/\.jpg$/i, "_m.jpg"));
    });
    $('img').each(function() {
        var src = $(this).attr("src");
        $(this).attr("src", src.replace(/\.jpeg$/i, "_m.jpeg"));
    });
    $('img').each(function() {
        var src = $(this).attr("src");
        $(this).attr("src", src.replace(/\.png$/i, "_m.png"));
    });
    $('img').each(function() {
        var src = $(this).attr("src");
        $(this).attr("src", src.replace(/\.webp$/i, "_m.webp"));
    });
    $('img').each(function() {
        var src = $(this).attr("src");
        $(this).attr("src", src.replace(/\.svg$/i, "_m.svg"));
    });
    $('img').each(function() {
        var src = $(this).attr("src");  
        $(this).attr("src", src.replace(/\.gif$/i, "_m.gif"));
    });
}
