import multer from 'multer';



const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, 'uploads/')
    },
    filename: function(req,file,cb) {
        cb(
          null,
          file.fieldname +
            "-" +
            Date.now() +
            "-" +
            Math.round(Math.random() * 1e9)
        );
    }
});

const fileFilter = (req,file,cb) => {
    if(file.mimetype.startsWith('image')) {
        cb(null, true) 
    } else {
        cb(new Error ("Not an image! please upload only images"))
    }
}

const upload = multer({storage: storage, fileFilter: fileFilter, limits: {
    fileSize: 5 * 1024 * 1024 // 5MB file size limit
}});

export default upload;