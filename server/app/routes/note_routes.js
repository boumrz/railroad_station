var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
    app.get('/tickets', (req, res) => {
        db.collection('tickets').find(req.query).toArray((err, items) => {
            res.send(items);
        });
    });

    app.get('/purchase', (req, res) => {
        db.collection('purchaseTicket').find(req.query).toArray((err, items) => {
            res.send(items);
        });
    });

    app.post('/purchase', (req, res) => {
        const note = {  
            number: req.body.number,
            date: req.body.date,
            from: req.body.from,
            to: req.body.to,
        };

        db.collection('purchaseTicket').insertOne(note, (err, result) => {
            if (err) { 
                res.send({ 'error': 'An error has occurred' }); 
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.get('/trains', (req, res) => {
        db.collection('trains').find(req.query).toArray((err, items) => {
            res.send(items);
        });
    });

    app.get('/tickets/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('tickets').findOne(details, (err, item) => {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            console.log(`Response text: ${item.text}`);
            res.send(item);
          }
        });
    });

    app.post('/tickets', (req, res) => {
        const note = {  
            id: req.body.id,
            firstname: req.body.firstname, 
            surname: req.body.surname, 
            patronymic: req.body.patronymic,
            trainNumber: req.body.trainNumber,
            carNumber: req.body.carNumber,
            placeNumber: req.body.placeNumber,
            stationLandingPassenger: req.body.stationLandingPassenger,
            endStationPassenger: req.body.endStationPassenger,
            departureDatePassenger: req.body.departureDatePassenger,
            departureTimePassenger: req.body.departureTimePassenger,
            departureDateTrain: req.body.departureDateTrain,
            travelTimePassenger: req.body.travelTimePassenger,
            arrivalTimePassenger: req.body.arrivalTimePassenger,
            typeOfCar: req.body.typeOfCar,
            ticketPrice: req.body.ticketPrice,
        };

        db.collection('tickets').insertOne(note, (err, result) => {
            if (err) { 
                res.send({ 'error': 'An error has occurred' }); 
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.put ('/tickets/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const note = { text: req.body.body, title: req.body.title };
        db.collection('tickets').update(details, note, (err, result) => {
          if (err) {
              res.send({'error':'An error has occurred'});
          } else {
              res.send(note);
          } 
        });
    });

    app.delete('/tickets/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('tickets').deleteOne(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send('Note ' + id + ' deleted!');
            }
        });
    });
};
