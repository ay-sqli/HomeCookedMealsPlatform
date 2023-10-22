const app = require("./app");
const connectDataBase = require("./db/Database");

const port = process.env.PORT || 3000;

// Handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`[${new Date().toUTCString()}] Error: ${err.message}`);
  console.log(`[${new Date().toUTCString()}] Shutting down the server for handling uncaught exception`);
  process.exit(1);
});

// connect db

connectDataBase();

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/.env" });
}

// Create server
const server = app.listen(port, () =>
  console.log(
    `[${new Date().toUTCString()}] The server is up and running on http://localhost:${port}`
  )
);

// Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`[${new Date().toUTCString()}] Unhandled Rejection: ${err.message}`);
  console.log(err.stack);
  console.log(`[${new Date().toUTCString()}] Shutting down the server for unhandled Rejection`);

  server.close(() => {
    process.exit(2); // Use a different exit code for unhandled promise rejections
  });
});
