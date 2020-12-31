const Stores = require('../models/stores');
const rawStores = require('./stores.json');
const createStores = async () => {
    for(const store of rawStores){
        const newStore = new Stores(store);
        await newStore.save();
        // console.log("save store", store);
    }
};

const deleteData = async () => {
    await Stores.collection.drop();
};

const updateDB = async () => {
    await deleteData();
    await createStores();
    console.log("data updated");
};

module.exports = updateDB;