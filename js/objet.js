'use strict';

function User(name) {
    this.name = name;

    // Closure
    this.hello = function () {
        var that = this;
        function debug() {
            that.hello();
        }
        return 'Hello ' + this.name;
    };

    this.display = function (callback) {
        callback.apply(this);
    };
}

function Admin(name) {
    this.name = name;
}

Admin.prototype = new User();

Admin.prototype.work = function () {
    return this.name + ' travail.';
};

var u = new User('Wilfrid');
// console.log(u.hello());

u.display(function () {
    console.log(this.name);
});

var a = new Admin('toto');
console.log(a.hello());
console.log(a.work());


function Company() {
    this.users = [];

    this.addUser = function (user) {
        if (!user instanceof User) {
            throw new Error("N'importe quoi ton type, je veux un User");
        }
        this.users.push(user);
    }
}

var c = new Company();
c.addUser(u);
c.addUser(a);

console.log(c.users);

class Meetup {
    constructor(title) {
        this.title = title;
        this.maxCapacity = 50;
    }

    show() {
        console.log(`
            Meetup ${this.title},
            Capacité max: ${this.maxCapacity}
        `);
    }
}

let m = new Meetup('Workshop Go');
m.show();

String.prototype.genpass = function () {

};

console.log("test".genpass());
