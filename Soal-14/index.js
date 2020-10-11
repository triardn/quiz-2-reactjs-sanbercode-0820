const calculateVolume = (type, ...params) => {
    let area = 0;

    switch (type) {
        case "cuboid":
            area = params[0] * params[1] * params[2]; // p * l * t
            break;
        case "cube":
            area = Math.pow(params[0], 3);
            break;
        default:
    }

    return area;
}

const cubeArea = calculateVolume("cube", 5);
const cuboidArea = calculateVolume("cuboid", 10, 7, 5); // params after type = p, l, t

console.log(`Luas balok (p: 10, l: 7, t: 5 = ${cuboidArea})`);
console.log(`Luas kubus (s: 5) = ${cubeArea}`);