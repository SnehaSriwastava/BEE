const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/RailwayBooking', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const bookingSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    contactNo: String,
    gender: String,
    dateOfJourney: String,
    origin: String,
    destination: String,
    train: String,
    travelClass: String
});

const Booking = mongoose.model('Booking', bookingSchema);

app.get('', (req, res) => {
    res.sendFile(path.join(__dirname, 'Railway.html'));
    // res.send('<img src="Railway.png"></img>');
});


app.post('/bookTicket', async (req, res) => {
    try {
        const bookingData = {
            firstName: req.body.fname,
            lastName: req.body.lname,
            contactNo: req.body.contno,
            gender: req.body.gender,
            dateOfJourney: req.body.date,
            origin: req.body.origin,
            destination: req.body.destination,
            train: req.body.Train,
            travelClass: req.body.class
        };

        const newBooking = new Booking(bookingData);
        await newBooking.save();

        res.send('Ticket booked successfully!');
    } catch (error) {
        res.status(500).send('Error booking ticket: ' + error.message);
    }
});

app.listen(3020, () => {
    console.log('Server running at http://localhost:3020/');
});
