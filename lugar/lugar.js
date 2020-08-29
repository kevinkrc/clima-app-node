const axios = require('axios');

const getLugarLatLon = async ( dir) =>{

    const encodeURL = encodeURI(dir)
    
    
    const instance = axios.create({
        baseURL: `https://geocode.xyz/Hauptstr.,+57632+${encodeURL}?json=1`
        // headers: {'api key': 'añsd'}
    })



    const resp = await instance.get();

    // if(resp.length === 0){
    //     throw new Error(`No hay resultados para ${dir}`);
    // }

    // return resp.data;
    const datos = resp.data;    
    const lat = datos.latt;
    const lng = datos.longt;

    return {
        dir,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLon
}
