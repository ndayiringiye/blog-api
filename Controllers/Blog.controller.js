import Blog from "../Models/BlogModel.js";


export const createBlog = async (req ,res) =>{
    try {
        const blogs = await Blog.create(req.body)
        res.status(200).json({success:true, data:blogs});
    } catch (error) {
        console.log(`create blog failed`);
        res.status(500).json({success:false , error})
    }
}