const { string } = require("joi");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/logistics",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('Connection Succesfull..'))
.catch((err) => console.log(err));



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
const createDocument = async() =>{
    try{
        const newReport = new PendingExport({
            buyer : "Prudhvi",
            country : "India",
            productDescription : "Testing",
            grade : "Testing",
            hSCode : "Testing",
            pINo : "Testing",
            qtyMT : "Testing",
            ratePerMTUSD : "Testing",
            pIValueUSD : "Testing",
            pIValueINR : "Testing",
            noOfContainer : "Testing",
            eCGCLimit : "Testing",
            palletisationStatus : "Testing",
            packingMark : "Testing",
            dispatchDateInERP : "Testing",
            DispatchDateProduction : "Testing",
            containerPlacingDate : "Testing",
            busaleOrderStatusyer : "Testing",
            paymentTerm : "Testing",
            remark : "Testing"
        })
       const result = await newReport.save();
       console.log(result);

        
    }
    catch(err){
        console.log(err);
    }
    createDocument();
}
