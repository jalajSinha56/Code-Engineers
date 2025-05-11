const validator = require('validator');
const bcrypt = require('bcrypt'); // ✅ Correct spelling, NOT 'bycrpt'
const cloudinary = require('cloudinary').v2;
const doctorModel = require('../model/doctorModel');
const jwt = require('jsonwebtoken')
const addDoctor = async (req, res) => {
  try {
    const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
    const imageFile = req.file;

    

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email" });
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "Please enter a strong password" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // ⬇️ Upload to Cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image"
    });
    console.log("Cloudinary Upload Result:", imageUpload);
    const imageUrl = imageUpload.secure_url;

    const doctorData = {
      name,
      email,
      image: imageUrl,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      date: Date.now()
    };

    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();

    return res.json({ success: true, message: "Doctor added" });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// API for admin Login

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === "admin@gmail.com" && password === "admin123") {
      const token = jwt.sign({ email }, "codeEngineers"); // ✅ SIGN AN OBJECT
      console.log("Generated token:", token);
      return res.json({ success: true, token });
    } else {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

  } catch (error) {
    console.error('Login Error:', error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


module.exports = { addDoctor,loginAdmin };
