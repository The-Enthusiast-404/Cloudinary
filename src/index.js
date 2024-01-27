const express = require("express");
const connectDB = require("./db/db");
const cookieParser = require("cookie-parser");
const { adminAuth, userAuth } = require("../middleware/authentication");
const app = express();
app.use(express.json());
app.use(cookieParser());

const PORT = 8000;
const server = app.listen(PORT, () =>
  console.log(`Server Connected to port ${PORT}`)
);
// Handling Error
process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});

connectDB();

app.use("/api/v1/auth", require("../route/authRoute"));
app.use("/api/v1/user", require("../route/userRoute"));
app.use("/api/v1", require("../route/uploadRoute"));
