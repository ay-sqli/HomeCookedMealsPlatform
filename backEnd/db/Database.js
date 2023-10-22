const mongoose = require("mongoose");
const DB = "mongodb+srv://Ayoub:Ayoub1234567890@cluster0.38l1bkt.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";

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
