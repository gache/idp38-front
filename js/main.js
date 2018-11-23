String.prototype.mdp = function (len) {
    let pg = new PasswordGenerator(len, this.toString());
    return pg.generate();
};

Number.prototype.getRandomInt = function () {
    return Math.floor(Math.random() * Math.floor(this));
};

let chars = "abcdefghijklmnopqrstuvwxyz";
console.log(chars.mdp(10));

let max = 100;
console.log(max.getRandomInt());
