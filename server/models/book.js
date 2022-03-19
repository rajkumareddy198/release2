let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    type: String,
    sdate: String,
    edate: String,
    description: String
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);