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

        addClass: function (names) {
            this.elements.forEach(function (elem) {
                if (!elem.className.includes(names)) {
                    elem.className += elem.className ? ' ' + names : names;
                }
            });
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
