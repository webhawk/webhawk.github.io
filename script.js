var img = new Image(800, 400);

img.onload = function() {
    $('#loading').css('display', 'none');
    $('.imgWrap').append(img);
    
    
}
img.src = 'img4k.jpg';