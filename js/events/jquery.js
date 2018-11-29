// Copyright (c) 2018 Vincent Letourneau
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

(function () {

    // Objet de la bibliothèque.
    // Objet contenant toutes les méthodes de la bibliothèque.
    const myJquery = {
        elements: [],

        ready: function (callback) {
            document.addEventListener('DOMContentLoaded', callback, false);
        },

        find: function (selectors) {
            this.elements = document.querySelectorAll(selectors);
            return this;
        },

        hasClass: function (name) {
            return this.elements[0].className.split(' ').indexOf(name) === -1;
        },

        addClass: function (names) {
            var tmp = this.elements;
            var that = this;

            tmp.forEach(function (elem) {
                if (!that.apply(elem).hasClass(name)) {
                    elem.className += elem.className ? ' ' + names : names;
                }
            });

            this.elements = tmp;
            return this;
        },

        on: function (eventType, callback, useCapture) {
            useCapture = useCapture || false;

            this.elements.forEach(function (elem) {
                elem.addEventListener(eventType, callback, useCapture);
            });

            return this;
        },

        apply: function (elem) {
            this.elements = [elem];
            return this;
        }
    }

    // Ici on met à disposition notre bibliothèque en global.
    if (!window.$) {
        window.$ = myJquery;
    }

}());
