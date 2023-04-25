const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

const db = mongoose.connection;

// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// eslint-disable-next-line no-console
db.once('open', () => { console.log('Successfully Connected!'); });
