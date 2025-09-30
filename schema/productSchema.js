const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: Number
    },
    stock: {
        type: Number
    },
    rating: {
        type: Number
    },
    tags: {
        type: Array
    }
});

const productdata = new mongoose.model('product', productSchema);
module.exports = productdata;