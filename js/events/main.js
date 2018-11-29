// Copyright (c) 2018 Vincent Letourneau
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

$.ready(function () {
    console.log('DOM loaded');

    $.find('li, #menu').addClass('test');

    $.find('li').on('click', function (event) {
        const elem = $.apply(this);

        elem.addClass('supertodo');

        console.log(elem.hasClass('test'));

        event.target.style.backgroundColor = '#FF00FF';
    });


});
