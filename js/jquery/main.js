$(document).ready(function () {
    $('.tasks').on('click', 'li', function (event) {
        const target = $(event.target);

        if (target.parent().hasClass('todo-checkbox')) {
            target.toggleClass("fa-check-square fa-square");
            $(this).find('.todo-text').toggleClass('todo-text-valid');
        }

        if (target.hasClass('todo-trash')) {
            $(this).remove();
        }
    });

    $('.textTask').on('keyup', function (event) {
        if (event.keyCode === 13) {
            if ($(this).val().trim()) {
                var tmpl =
                    '<li>' +
                        '<a href="#" class="todo-checkbox"><i class="fa fa-square"></i></a>' +
                        '<span class="todo-text" contenteditable="true">' + $(this).val() + '</span>' +
                        '<a href="#"><i class="todo-trash fa fa-trash"></i></a>' +
                    '</li>';

                $('.tasks').append(tmpl);
                $(this).val('');
            }
        }
    });

});
