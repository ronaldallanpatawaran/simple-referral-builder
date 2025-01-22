import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const DATA_FILE = "backend/data.json";

// Load existing referrals
const loadData = () => {
  return JSON.parse(fs.readFileSync(DATA_FILE));
};

// Save referrals to the JSON file
const saveData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// Get all referrals
app.get("/referrals", (req, res) => {
  const data = loadData();
  res.json({ data: data.referrals, message: 'Successful' });
});

// Create a new referral
app.post("/referrals", (req, res) => {
  const newReferral = req.body;
  const data = loadData();

  newReferral.id = uuidv4();
  data.referrals.push(newReferral);
  saveData(data);
  res.status(201).json(newReferral);
});

// Update a new referral
app.put("/referrals/:id", (req, res) => {
  const udpatedReferral = req.body;
  const data = loadData();
  const index = data.referrals.findIndex(item => item.id === req.params.id);
  data.referrals[index] = udpatedReferral;
  saveData(data);
  res.json({ message: `Successfuly updated`, id: req.params.id });
});

app.delete("/referrals/:id", (req, res) => {
  const data = loadData();
  const index = data.referrals.findIndex(item => item.id === req.params.id);
  data.referrals.splice(index, 1);
  saveData(data);
  res.json({ message: 'Successfuly deleted', id: req.params.id });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));