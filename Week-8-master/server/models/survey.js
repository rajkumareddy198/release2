let mongoose = require('mongoose');

// create a model class
let surveyModel = mongoose.Schema({
    name: String,
    type: String,
    sdate: Number,
    edate: Number,
    description: String
},
{
    collection: "surveys"
});

module.exports = mongoose.model('Survey', surveyModel);