const mongoose = require("mongoose");
const Joi = require('joi');




const pensingExportSchema = new mongoose.Schema({
    buyer : String,
    country : String,
    productDescription : String,
    grade : String,
    hSCode : String,
    pINo : String,
    qtyMT : String,
    ratePerMTUSD : String,
    pIValueUSD : String,
    pIValueINR : String,
    noOfContainer : String,
    eCGCLimit : String,
    palletisationStatus : String,
    packingMark : String,
    dispatchDateInERP : String,
    DispatchDateProduction : String,
    containerPlacingDate : String,
    busaleOrderStatusyer : String,
    paymentTerm : String,
    remark : String
})

const PendingExport = new mongoose.model("PendingExport",pensingExportSchema);
module.exports = PendingExport;
