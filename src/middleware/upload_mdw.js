import multer from "multer";
//buat storagenya
const storage =multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, './public/uploads')
    },
    filename : (req, file, cb)=>{
        cb (null, file.originalname)
    }
})
const upload_mdw = multer({storage : storage})
export default upload_mdw