/**
 * Générateur de mot de passe aléatoire.
 */
class PasswordGenerator {
    constructor(len = 10, chars = '') {
        this.len = len;
        this.chars = chars;
        this.lower = 'abcdefghijklmnopqrstuvwxyz';
        this.upper = this.lower.toUpperCase();
        this.numeric = '0123456789';
        this.special = '@&!$%';

        if (this.chars.length === 0) {
            this.resetChars();
        }
    }

    resetChars() {
        this.chars = [
            this.lower,
            this.upper,
            this.numeric,
            this.special
        ].join('');
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    generate() {
        let str = '';
        for (let i = 0; i < this.len; i++) {
            let index = this.getRandomInt(this.chars.length - 1);
            str += this.chars[index];
        }
        return str;
    }
}
