const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/signup", async (req, res) => {
  const { username, secret, email, first_name, last_name } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username, secret, email, first_name, last_name },
      { headers: { "private-key": "cb02ea66-27d6-4dde-9cf6-64a7989eaffa" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    console.error("Error:", e);
    if (e.response) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

app.post("/login", async (req, res) => {
  const { username, secret } = req.body;

  try {
    const r = await axios.get(
      "https://api.chatengine.io/users/me/",
      { headers: { 
        "Project-ID": "71891da7-bda2-464d-8dc8-781a78afe744",
        "User-Name": username,
        "User-Secret": secret,
      } 
    });
    return res.status(r.status).json(r.data);
  } catch (e) {
    console.error("Error:", e);
    if (e.response) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

app.listen(3001);