const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//track requests save the request body and headers, the response code and the body of the reponse.
const TrackingSchema = new Schema({
    request: {type: String, required:true},
    code: {type: String, required:true},
    response: {type: String, required:true}
});

module.exports = mongoose.model("tracking", TrackingSchema);