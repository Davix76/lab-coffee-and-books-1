var express = require('express');
var router = express.Router();
const Place = require('../models/place');

/* GET home page. */
router.get('/', function(req, res, next) {
  Place.find({},{_id:0, name:1, description:1, location:1, type:1}, (error, places) => {
    if (error) {
      next(error);
    } else {
      res.render('index', { title: 'Express', places });
    }
  })
});


router.get('/api/locations', function(req, res, next) {
  Place.find({}, (error, places) => {
    if (error) {
      next(error);
    } else {
      res.json(places);
    }
  })
});


router.post('/', (req, res, next) => {
  // Get Params from POST
  console.log("this works!");
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Place with location
    const newPlace = {
      name:        req.body.name,
      description: req.body.description,
      type:        req.body.type,
      location:    location,
    };

  const place = new Place(newPlace);

  // Save the restaurant to the Database
  place.save((error) => {
    if (error) { console.log(error) }
    else {
      res.redirect('/');
    }
  })
});


module.exports = router;
