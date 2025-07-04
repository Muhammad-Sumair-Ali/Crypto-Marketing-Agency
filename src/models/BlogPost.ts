import mongoose, { Schema, models } from "mongoose";

export interface IBlogPost {
  title: string;
  slug: string;
  description: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    title: string;
  };
  publishedDate: string;
  readTime: number;
  categories: string[];
  tags: string[];
  featuredImage: string;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const authorSchema = new Schema({
  name: { type: String, required: true },
  avatar: { type: String, default: "" },
  title: { type: String, default: "" },
});

const blogPostSchema = new Schema<IBlogPost>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: authorSchema, required: true },
    publishedDate: { type: String, default: "05-01-2023" },
    readTime: { type: Number, default: 5 },
    categories: [{ type: String }],
    tags: [{ type: String }],
    featuredImage: { type: String, default: "" },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Create a text index for search functionality
blogPostSchema.index({
  title: "text",
  description: "text",
  content: "text",
  tags: "text",
});

const BlogPost =
  models.BlogPost || mongoose.model<IBlogPost>("BlogPost", blogPostSchema);

export default BlogPost;
