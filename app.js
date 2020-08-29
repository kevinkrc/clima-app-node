const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion : {
        alias: 'd',
        demand: true,
        desc: 'Muestra el clima del pais indicado'
    }
}).argv;

// lugar.getLugarLatLon(argv.direccion)
//     .then(console.log);

// clima.getClima(-3.67930, 40.42955)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(direccion) => {

    try {
        const cord = await lugar.getLugarLatLon(direccion);
        const res = await clima.getClima(cord.lat, cord.lng);    
        return `El clima de ${direccion} es de ${res}° grados celsius`;
    } catch (error) {
        return `No se pudo determinar la temperatura del lugar: ${direccion}`;
    }
    
}

getInfo(argv.direccion)
.then(console.log);


