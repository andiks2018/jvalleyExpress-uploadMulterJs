import {request, response} from "express"

const upload_create = async (req = request, res = response)=>{
    try{
        const data = await req.body
        return res.status(201).json({
            success : true,
            data : data
        })
    }catch(err){
        return res.status(500).json({
            success : false,
            error : err.message
        })
    }
}
export default upload_create