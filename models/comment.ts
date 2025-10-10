import mongoose, { Schema, Document } from "mongoose";

export interface IComment extends Document {
  postId: string;
  name: string;
  text: string;
  createdAt: Date;
}

const CommentSchema = new Schema(
  {
    postId: { type: String, required: true }, 
    name: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Comment || mongoose.model<IComment>("Comment", CommentSchema);
