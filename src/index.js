import express from 'express'
import env from 'dotenv'
import upload_route from './routes/upload_route'
env.config()

const app = express()
const {PORT} =process.env

app.use(express.static("../public"))
app.use(express.json())

app.use(upload_route)

app.listen(PORT, ()=>{
    console.info('server running...')
})