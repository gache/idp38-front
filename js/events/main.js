// Copyright (c) 2018 Vincent Letourneau
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

$.ready(function () {
    console.log('DOM loaded');

    $.find('li').on('click', function (event) {
        const elem = $.apply(this);
        $.find('li').addClass('test');
        event.target.style.backgroundColor = '#FF00FF';
    });
});

// function test(obj) {
//     obj.name = 'toto';
// }

// user = { name: 'Wilfrid' };
// test(user);

// console.log(user.name);
