// Import required modules
const mongoose = require('mongoose');
const fs = require('fs');

// Connect to MongoDB
mongoose.connect('mongodb+srv://praveeen:5A4k053kfcKhXAyP@arjceterp.23k4i1t.mongodb.net/Virtualization?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define schema for the data
const Schema = mongoose.Schema;
const DataSchema = new Schema({
    end_year: String,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: String,
    impact: String,
    added: String,
    published: String,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number
});

// Define model for the data
const DataModel = mongoose.model('Data', DataSchema);

// Read JSON file and insert data into MongoDB
fs.readFile('jsondata.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }
    const jsonData = JSON.parse(data);
    DataModel.insertMany(jsonData, (err, docs) => {
        if (err) {
            console.error('Error inserting data into MongoDB:', err);
            return;
        }
        console.log('Data inserted successfully:', docs.length, 'documents inserted.');
    });
});
