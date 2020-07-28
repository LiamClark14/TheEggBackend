let {Unit} = require('../models/unit.model')


exports.allUnits = (req, res) => {
    Unit.find()
    .then(unit => res.json(unit))
    .catch(err => res.status(400).json('Error: ' + err))
}

exports.specificUnit = (req, res) => {
    searchid=req.params.id;    
    res.status(200).send("this is search id" + searchid);
    Unit.find()
    .then(units=>res.json(units))
    .catch(err=>res.status(400).json('Error' + err))
};