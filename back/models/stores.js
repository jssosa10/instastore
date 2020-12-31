const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
    id: {type: Number, required: True},
    name: {type: String, required: True},
    latitude: {type: Number, required: True},
    longitude: {type: Number, required: True},
    code: {type: String, required:True},
    country: {type: String, required:True},
    city: {type: String, required:True},
    state: {type: String, required:True},
    zipCode: {type: String, required:True},
    address: {type: String, required:True},
    addressTwo: {type: String, required:False},
    openHour: {type: Number, min:0, max:23, required: True},
    closeHour: {type: Number, min:0, max:23, required: True},
    nextDeliveryTime: {type: Number, required: True},
});

module.exports = mongoose.model("stores", StoreSchema);