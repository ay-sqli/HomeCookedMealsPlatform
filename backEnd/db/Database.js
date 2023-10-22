const mongoose = require("mongoose");
const DB = process.env.DB_URL;

const connectDataBase = () => {
    mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((data) => {
            console.log(`Database connected successfully with server: ${data.connection.host}`);
        })
        .catch((error) => {
            console.error('Database connection error:', error);
        });
};

module.exports = connectDataBase;
