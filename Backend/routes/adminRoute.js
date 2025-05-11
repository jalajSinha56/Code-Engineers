const express = require('express');
const { addDoctor,loginAdmin } = require('../controllers/adminController'); // ✅ Correct CommonJS import
const upload = require('../middlewares/multer');
const authAdmin = require('../middlewares/authAdmin')
const adminRouter = express.Router();

adminRouter.post('/add-doctor', upload.single('image'),authAdmin ,addDoctor);
adminRouter.post('/login',loginAdmin)

module.exports = adminRouter; // ✅ CommonJS export
