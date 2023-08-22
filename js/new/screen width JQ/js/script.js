var screen_width = $( window ).width();
if (screen_width < 767) {
    $('.img-767-m').each(function() {
        var src = $(this).attr("src");
        $(this).attr("src", src.replace(/\.jpg$/i, "_m.jpg"));
    });
    $('.img-767-m').each(function() {
        var src = $(this).attr("src");
        $(this).attr("src", src.replace(/\.jpeg$/i, "_m.jpeg"));
    });
    $('.img-767-m').each(function() {
        var src = $(this).attr("src");
        $(this).attr("src", src.replace(/\.png$/i, "_m.png"));
    });
    $('.img-767-m').each(function() {
        var src = $(this).attr("src");
        $(this).attr("src", src.replace(/\.webp$/i, "_m.webp"));
    });
    $('.img-767-m').each(function() {
        var src = $(this).attr("src");
        $(this).attr("src", src.replace(/\.svg$/i, "_m.svg"));
    });
    $('.img-767-m').each(function() {
        var src = $(this).attr("src");  
        $(this).attr("src", src.replace(/\.gif$/i, "_m.gif"));
    });
}
