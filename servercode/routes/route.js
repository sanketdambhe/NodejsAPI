var express = require('express');
var router = express.Router();

const Item = require('../models/buketItemModel.js');

router.get('/items', (req, res, next) => {

   Item.find( function(err , items) {
       if(err) {
           res.json(err);
       }
       else {
           res.json(items);
       }
   });

});

router.post('/item', (req, res, next) => {

   let newItemSchema = new Item({
    itemName: req.body.itemname ,
    itemType: req.body.itemtype ,
    itemPrice: req.body.itemprice 
   });

   newItemSchema.save(function(err, item) {
       if(err) {
           res.json(err);
       }
       else{ 
            res.json(item);
       }
   });

});



router.put('/item/:id', (req, res, next) => {

    Item.findOneAndUpdate({_id: req.params.id }, {
        $set: {
            itemName: req.body.itemname ,
            itemType: req.body.itemtype ,
            itemPrice: req.body.itemprice  
        }, 
    },function(err, item)  {
        if(err) {
            res.json(err);
        }
        else {
            res.send(item);
        }
    });



    
});
router.delete('/item/:id', (req, res, next) => {

    Item.remove({_id: req.params.id}, function(err, result) {
        if(err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });

});

module.exports = router;