import PostMessage from "../models/postMessage.js";

export const getPosts = async(req,res) => {
   try {
     const PostMessages = await PostMessage.find();

     console.log(PostMessages);

     res.status(200).json(PostMessages);
   } catch (error) {
    res.staus(404).json({ message: error.message })
}
};

export const createPost = async(req,res) => {
    const post = req.body;

    const newPost = PostMessage(post)

    try {
        await newPost.save();

        res.staus(201).json(newPost);
    } catch (error) {
        res.staus(409).json({ message: error.message })
    }
};