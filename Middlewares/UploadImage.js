const multer  = require('multer');
const cloudinary =require('cloudinary').v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary');


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_KEY,
    api_secret:process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    allowedFormats: ['jpg', 'png','jpeg','gif'],
    filename: function (req, file, cb) {
      cb(null, file.originalname); 
    }
  });

const Upload = multer({storage:storage});

module.exports = Upload;