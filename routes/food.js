const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

//delete
router.get('/:id/delete', (req,res)=>{
    Food.findByIdAndRemove(req.params.id)
    .then((err)=>{
        res.send('Borrado la food: ' + req.params.id);
    });
});

//update
router.get('/update/:id', (req,res)=>{
    Food.findByIdAndUpdate(req.params.id, {taste:'Delicious but weird'})
    .then(food=>{
        res.send('food modificada');
    })
    .catch(err=>{
        res.send('algo malo pasó');
    });
});

//create
router.get('/new', (req,res)=>{
    Food.create({
        name:'hamburguesa sin asucar', 
        calories:50,
        hasSugar:false,
        ingredients:['verdura','quinoa'],
        taste: 'delicious',
        tipo:'plate'
    })
    .then(food=>res.send('comida creada'))
    .catch(err=>res.send(err));
});

//read
router.get('/', (req,res)=>{
    Food.find()
    .then(items=>res.render('food/lista',{items}))
    .catch(err=>res.send(err));
   
});

module.exports = router;

