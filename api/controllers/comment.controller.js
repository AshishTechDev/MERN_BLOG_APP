import Comment from "../models/comment.model.js";
import { errorHandler } from "../utils/error.js";

export const createComment = async (req, res, next) => {
    try {
      const { content, postId, userId} = req.body;
      console.log(req.body);
      if(userId !== req.user.id) {
        return next(errorHandler(403, 'You are nor allowed to create this comment'));
      }

      const newComment = new Comment({
        content,
        postId,
        userId,
      });
      await newComment.save();
      res.status(200).json(newComment);
    } catch (error) {
      next(error);
    }
}