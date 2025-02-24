const express = require("express");
const app = express();

const port = 5000;
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

app.get("/signup", (req, res) => {
  const { username, email, password, dob } = req.query;

  
  if (!username || !/^[a-zA-Z]+$/.test(username)) {
    return res.status(400).json({ error: "Username should contain only letters and not be empty." });
  }

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  
  if (!password || !/^[a-zA-Z\d@$&!]{8,16}$/.test(password)) {
    return res.status(400).json({ error: "Password must be 8-16 characters long and can include letters, numbers, and special characters (@, $, &, !)." });
  }

  res.send("Signup Successful");
});

app.listen(port, () => {
  console.log('Server running on http://localhost:${port}');
});