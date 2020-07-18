let Unit = require('../models/unit.model')


exports.allUnits = (req, res) => {
    searchid=req.params.id;    
    res.status(200).send("this is search id" + searchid);
}

exports.specificUnit = (req, res) => {
    searchid=req.params.id;    
    res.status(200).send("this is search id" + searchid);
    Unit.find()
    .then(units=>res.json(units))
    .catch(err=>res.status(400).json('Error' + err))
};