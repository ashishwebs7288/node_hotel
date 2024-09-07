const mongoose = require('mongoose');
menuItemSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: true,
    },
    test: {
        type: String,
        enum: ['spicy', 'sweet', 'sour'],
        required: true,
    },
    is_drink: {
        type: Boolean,
        default: false,
    },
    ingredients:
    {
        type: [String],
        default: [],
    },
    num_sales:{
        type: Number,
        default: 0,

    }
})
//Create model for MenuItem
    const MenuItem = mongoose.model('MenuItem', menuItemSchema);
    module.exports = MenuItem