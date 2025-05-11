const express = require('express');
const cors = require('cors');
const dbconn = require('./database/dbconnection');
const adminRouter = require('./routes/adminRoute');
const setupCloudinary = require('./utils/cloudinary');

const app = express();
const port = 4000;

// Connect to MongoDB
dbconn(); // Logs success/failure
setupCloudinary();

// Middleware
app.use(cors());
// ✅ Then body parsing for JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Multipart route BEFORE body parsers
app.use('/api/admin', adminRouter); // contains the image upload



// Root test route
app.get('/', (req, res) => {
    res.send('API working with DB connection only.');
});

// Start server
app.listen(port, () => {
    console.log(`Express server is running on::${port}`);
});
