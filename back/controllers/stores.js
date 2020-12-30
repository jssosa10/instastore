const GeoPoint = require('geopoint');

const distance = (dest, store) => {
    return dest.distanceTo(new GeoPoint(store.latitude, store.longitude))
}

const findClosest = (dest) => {
    const destPoint = new GeoPoint(dest.latitude, dest.longitude);
    const stores = await storeModel.find({});
    const currentHour = new Date().getHours();

    return stores.map(store => {
        const isOpen = currentHou>=store.openHour && currentHour<store.closeHour;
        const newData = {'distance': distance(destPoint, store), 'isOpen': isOpen};
        return {...store, ...newData};
    }).filter(store => {
        store.isOpen
    }).reduce((res, store)=>{
        res.distance < store.distance ? res : store
    });
}
