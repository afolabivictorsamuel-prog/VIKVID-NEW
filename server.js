const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    app: "VIKVID",
    message: "Welcome to VIKVID!",
    status: "Running"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    app: "VIKVID"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`VIKVID server running on port ${PORT}`);
});

