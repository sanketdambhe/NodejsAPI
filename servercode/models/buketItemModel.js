var mongoose = require('mongoose');

const buketItemSchema = mongoose.Schema({
    itemName: { type: String, required: true },
    itemType: { type: String, required: true },
    itemPrice: {type: String, require: true}
});

const Item = module.exports = mongoose.model('Item', buketItemSchema);