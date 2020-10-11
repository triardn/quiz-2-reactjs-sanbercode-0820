function filterBookPromise(colorful, amountOfPage) {
    return new Promise(function(resolve, reject) {
        var books = [
            {name: "shinchan", totalPage: 50, isColorful: true},
            {name: "Kalkulus", totalPage: 250, isColorful: false},
            {name: "doraemon", totalPage: 40, isColorful: true},
            {name: "algoritma", totalPage: 300, isColorful: false},
        ];

        if (amountOfPage > 0) {
            resolve(books.filter(x => x.totalPage >= amountOfPage && x.isColorful == colorful));
        } else {
            var reason = new Error("maaf parameter salah");
            reject(reason);
        }
    });
}

const colorfulParams = true;
const amountOfPageParams = 1000;

filterBookPromise(colorfulParams, amountOfPageParams).then(function(resolve) {
    if (resolve.length > 0) {
        console.log(`Buku ditemukan: ${resolve.length} buku`)
        resolve.map(x => {
            console.log(`${x.name} ${x.totalPage} halaman`);
        });
    } else {
        console.log("Buku tidak ditemukan. Silakan coba dengan parameter lain");
    }
}).catch(function(err){
    console.log(err);
})