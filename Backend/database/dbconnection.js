const mongoose = require("mongoose");

async function dbconnection() {
    try {
        await mongoose.connect('mongodb://localhost:27017/backend');
        console.log("✅ Database Connected successfully");
    } catch (err) {
        console.error("❌ DB Connection Error:", err);
    }
}

module.exports = dbconnection;
