import express from "express";
import cors from "cors";
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const profiles = [
  {
    name: "Danish Dhiyaulhaq",
    age: 21,
    birth: "Jombang, 32 Februari 2004",
    gender: "Pria",
  },
  {
    name: "Dewi Persik",
    age: 125,
    birth: "Jepara, 32 Maret 1900",
    gender: "Wanita",
  }
];

app.get("/profile", (req, res) => {
  res.json(profiles[0]);
});

app.get("/profiles", (req, res) => {
    res.json(profiles);
  });

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "nopalkusumo@gmail.com" && password === "nopalkusumo") {
    res.json({ success: true, message: "Login Successful" });
  } else {
    res
      .status(401)
      .json({ success: false, message: "Wrong email or password" });
  }
});

app.listen(PORT, () => {
  console.log(`Running in http://localhost:${PORT}`);
});

