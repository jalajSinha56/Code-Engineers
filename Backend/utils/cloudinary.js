const cloudinary = require('cloudinary').v2;

function setupCloudinary() {
cloudinary.config({
  cloud_name: 'dxycaskoe',
  api_key: '876573774229482',
  api_secret: 'wdfS9oTBG8j9WNlM0FfoQF6G6Ng'
});
}
module.exports = setupCloudinary;
