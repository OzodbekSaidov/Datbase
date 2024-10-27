import express from "express";
import Compaints from "../schemas/Compaints.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import config from "../utils/config/config.js";
import { isLoggedIn } from "../auth/IsloggedIn.js";
import { hasRole } from "../auth/hasRole.js";
const router = express.Router();

router.get("/complains", isLoggedIn, async (req, res) => {
  try {
    hasRole(req, res, ["admin"]); 
    
    const users = await Compaints.find();
    res.send(users);
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});

router.get("/complains/?id", isLoggedIn, async (req, res) => {
  try {
      const id = req.params.id || {}

    const complain = await Compaints.findById(id);
    res.status(200).send(complain);
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});

router.delete("/users/:id", isLoggedIn, async (req, res) => {
  try {
      const { id } = req.params || {};
      const data = Compaints.findByIdAndDelete(id)
      res.status(200).send(data)
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});

export default router;