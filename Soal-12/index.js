class BangunDatar {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    luas () {
        return "";
    }

    keliling() {
        return "";
    }
}

const phi = 22/7;
class Lingkaran extends BangunDatar {
    constructor(name, radius) {
        super(name);
        this._radius = radius;
    }

    luas() {
        return phi * this._radius * this._radius;
    }

    keliling() {
        return 2 * phi * this._radius;
    }
}

class Persegi extends BangunDatar {
    constructor(name, sisi) {
        super(name);
        this._sisi = sisi;
    }

    luas () {
        return this._sisi * this._sisi;
    }

    keliling () {
        return 4 * this._sisi;
    }
}

// bangun datar
const bangunDatar = new BangunDatar("bangun datar");
console.log(bangunDatar.name);
console.log(bangunDatar.luas());
console.log(bangunDatar.keliling());

// lingkaran
const lingkaran = new Lingkaran("lingkaran", 7);
console.log(lingkaran.name);
console.log(lingkaran.luas());
console.log(lingkaran.keliling());

// persegi
const persegi = new Persegi("persegi", 10);
console.log(persegi.name);
console.log(persegi.luas());
console.log(persegi.keliling());