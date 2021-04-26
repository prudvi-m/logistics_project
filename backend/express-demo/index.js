const Joi = require('joi');
const express = require('express');
const app = express();



app.use(express.json());
app.get('/api/documents',(req,res) => {
res.send([1,23]);
});

app.post('/api/documents',(req,res) => {
    
    const  schema = {
        name: Joi.string().min(2).required()
    };
const result = Joi.ValidationError(req.body,schema);
if(result.ValidationError)
{
 res.status(400).send.result(ValidationError);
 return; 
}
    });
    


// const port = process.env.PORT || 3000;
app.listen(3000, () => console.log('listening on port 3000'));