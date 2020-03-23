const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');
// Coloring the terminal output
const colors = require('colors');
// For the config file's global variables
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const app = express();

app.use(express.json());

connectDB();

const transactions = require('./routes/transactions');

app.use('/api/v1/transactions', transactions);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));