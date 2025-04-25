import multer from 'multer';

const storage = multer.memoryStorage(
    {
        destination: function (req, file, cb) {
            cb(null, "./public/temp"); // Specify the destination folder for uploaded files
        } ,
        
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, file.fieldname + '-' + uniqueSuffix); // Specify the file name format
        }

    }
)

export const upload = multer({ storage: storage })// Specify the field name for the video file