
$(document).ready(function () {
    let text = '';

    if (text.trim()) {
        
    }

    $('#textTask').on('keyup', function (event) {
        $('#textDisplay').text($(this).val());
    });

});
