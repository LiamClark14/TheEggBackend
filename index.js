const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const units = [
  { id: 1, name: 'unit1' },
  { id: 2, name: 'unit2' },
  { id: 3, name: 'unit3' },
];
app.get('/', (req, res) => {
  res.send('Home Page');
  //render homepage
});
//CRUD ROUTES
//Create => put()
//Read => get()
//Update => post()
//Delete => destroy()

app.get('/api/units', (req, res) => {
  res.send(units);
});

app.post('/api/units', (req, res) => {
  const schema = {
    name: Joi.string().min(3).required()
  };

  const result = Joi.validate(req.body, schema);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  if (!req.body.name || req.body.name.length < 3) {
    //404 Bad Request
    res.status(400).send('Name is required and should be minimum 3 characters');
    return;
  }
  const unit = {
    id: units.length + 1,
    name: req.body.name
  };
  units.push(unit);
  res.send(unit);
});

app.get('/api/units/:id', (req, res) => {
  const unit = unit.find(c => c.id === parseInt(req.params.id));
  if (!unit) res.status(404).send('The unit with the given id was not found');
  res.send(unit);
});

app.put('/api/units/:id', (req, res) => {
  //look up the course
  //If not existing, return 404
  const unit = units.find(c => c.id === parseInt(req.params.id));
  if (!unit) res.status(404).send('The unit with the given ID was not found');

  // Validate
  // If invalid, return 400, Bad request
  const result = validateUnit(req.body);  //result.error
  console.log(result);
  if (result.error) return res.status(400).send(result.error);

  // Update course
  unit.name = req.body.name;
  // Return the updated course
  res.send(unit);
});

function validateUnit(unit) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(unit, schema);
}

app.delete('/api/units/:id', (req, res) => {
  // look up the course
  //Not existing, return 404
  const unit = units.find(c => c.id === parseInt(req.params.id));
  if (!unit) res.status(404).send('The unit with the given ID was not found');

  //Delete
  const index = units.indexOf(unit);
  units.splice(index, 1);

  //Return the same course
  res.send(unit);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
