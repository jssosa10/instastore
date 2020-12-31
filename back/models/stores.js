const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
    code: {type: String, required:true},
    country: {type: String, required:true},
    city: {type: String, required:true},
    state: {type: String, required:true},
    zipCode: {type: String, required:true},
    address: {type: String, required:true},
    addressTwo: {type: String, required:false},
    openHour: {type: Number, min:0, max:23, required: true},
    closeHour: {type: Number, min:0, max:23, required: true},
    nextDeliveryTime: {type: Number, required: true},
});

module.exports = mongoose.model("stores", StoreSchema);