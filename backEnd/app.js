const express = require('express');
const ErrorHandler = require("./utils/errorHandler");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); 
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
    createParentPath: true,
}));

//config
if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({ path: "backEnd/config/.env" });
}

//ErrorHandling
app.use(ErrorHandler);

module.exports = app;
