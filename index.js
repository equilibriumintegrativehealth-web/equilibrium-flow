const express = require("express");
const app = express();

app.use(express.json());

// Health Check
app.get("/flow", (req, res) => {
  res.json({ status: "ok" });
});

// Flow Data Exchange
app.post("/flow", (req, res) => {
  const data = req.body || {};

  res.json({
    version: "3.0",
    data: {
      appointment: "Appointment received",
      details: `Name: ${data.name || ""}\nDOB: ${data.dob || ""}`
    }
  });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
