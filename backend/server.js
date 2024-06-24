require('dotenv').config();
const express = require('express');
const app = express();
const Router = require('./router/authRouter');
const PORT = process.env.PORT;
const connectDB = require('./utills/db');

app.use(express.json());

app.use('/api', Router);

connectDB().then( () => {
        app.listen(PORT, () => {
            console.log(`Server is running on PORT: ${PORT}`);
        })
    }
);
