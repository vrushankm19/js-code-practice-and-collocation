


var screen_width = $( window ).width();
if (screen_width < 20000) {
    $(document).ready(function() {
        var image = $('.img');
        for(let i  = 0; i< image.length; i++){
        console.log("IMAGE: " +i+`${image.width()} x ${image.height()}`);

        }
    });
}
