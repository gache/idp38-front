$(document).ready(function () {
    $('.tasks').on('click', function (event) {
        console.log(event);
    });

    $('.textTask').on('keyup', function (event) {
        if (event.keyCode === 13) {
            if ($(this).val().trim()) {
                var tmpl =
                    '<li>' +
                        '<a href="#" class="todo-checkbox"><i class="fa fa-check-square"></i></a>' +
                        '<span class="todo-text">' + $(this).val() + '</span>' +
                        '<a href="#"><i class="todo-trash fa fa-trash"></i></a>' +
                    '</li>';

                $('.tasks').append(tmpl);
                $(this).val('');
            }
        }
    });

});
