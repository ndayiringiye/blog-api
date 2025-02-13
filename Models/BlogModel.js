import mongoose from "mongoose";

const BlogSchema = mongoose.Schema({
      title:{
        type:String,
        required:[true , "blog title should required"],
      },
      content:{
        type:String,
        required:true,
      },
      author:{
        type:String,
        required:[true , "name of owner'sblog must required"],
      },

},{Timestamps:true});

const Blog = mongoose.model("Blog", BlogSchema);
export default Blog;