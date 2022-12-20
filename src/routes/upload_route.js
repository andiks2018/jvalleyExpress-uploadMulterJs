import express from 'express'
import upload_create from '../controllers/upload_controller'
import upload_mdw from '../middleware/upload_mdw'

const upload_route = express.Router()

//create upload
upload_route.post("/api/upload/create", upload_mdw.single('file'), upload_create)

export default upload_route