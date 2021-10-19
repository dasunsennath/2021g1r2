const multer  = require('multer');

const storage  = multer.diskStorage(
    {
        destination:(req,file,cb)=>
        {
            cb(null,'public/images');
        },
        filename:(req,file,cb)=>
        {
            cb(null,Date.now()+file.originalname);
        }
    }
);

const fileFilter  = (req,file,cb)=>
    {
       if(!file.originalname.match(/\.(jpg|png|jpeg|gif)$/))
       {
          return cb(new Error('You can upload only Image file'),false);
       }
       return cb(null,true);
    };

const Upload = multer({storage:storage,fileFilter:fileFilter});

module.exports = Upload;