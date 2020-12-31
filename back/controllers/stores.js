const GeoPoint = require('geopoint');
const Stores = require('../models/stores');
const moment = require('moment-timezone')

const format = (store) => {
    return {
        'storeId': store.id,
        'storeName': store.name,
        'isOpen': store.isOpen,
        'latitude': store.latitude,
        'longitude': store.longitude,
        'nextDeliveryTime': store.nextDeliveryTime
    }
}

const distance = (dest, store) => {
    return dest.distanceTo(new GeoPoint(store.latitude, store.longitude))
}

const findClosest = async (dest) => {

    // get data (destination point, stores and current hour)
    const destPoint = new GeoPoint(dest.latitude, dest.longitude);
    const stores = await Stores.find({});
    const currentHour = moment().tz('America/Bogota').hour();

    //find available stores
    const possibleStores =  stores.map(store => {
        const isOpen = currentHour>=store.openHour && currentHour<store.closeHour;
        const newData = {'distance': distance(destPoint, store), 'isOpen': isOpen};
        return {...store._doc, ...newData};
    }).filter(store => {
         return store.isOpen
    });

    // find closest store or undefined when no store is available.
    const store = possibleStores.length > 0 ? format(possibleStores.reduce((res, store)=>{
        if(res)
            return res.distance < store.distance ? res : store;
        else
            return store;
    })) : undefined;
    return store;
}

module.exports = findClosest;