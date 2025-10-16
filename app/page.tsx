

import Sidebar from "@/components/sidebar";
import BlogPost from "@/components/blogpost";
import EmblaCarousel from "@/components/banner";
import CommentsHighlights from "@/components/comments";
import { auth } from "@/lib/auth";
import Post from "@/models/post";
import connect from "@/lib/mongodb";
import FeaturedPost from "@/components/featuredpost";



export default async function Home() {
  const session = await auth();
  type PostType = {
    _id: string;
    title: string;
    description: string;
    imageurl: string;
    category: string;
    createdAt: string;
  };
  let posts: PostType[] = [];
  await connect();
  const rawPosts = await Post.find().sort({ createdAt: -1 }).lean();
  posts = rawPosts.map((post) => ({
    _id: post._id?.toString() ?? "",
    title: post.title ?? "",
    description: post.description ?? "",
    imageurl: post.imageurl ?? "",
    category: post.category ?? "",
    createdAt: post.createdAt ?? "",
  }));

  return (
    <main className="w-full mx-auto bg-white">
      <div className="w-full">
        <EmblaCarousel />
      </div>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <>
          <FeaturedPost />
            <h2 className="text-xl font-bold mb-4">Recent Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogPost
                  key={post._id}
                  id={post._id}
                  image={post.imageurl}
                  category={post.category || "General"}
                  date={new Date(post.createdAt).toLocaleDateString()}
                  title={post.title}
                  description={post.description}
                />
              ))}
            </div>
            {!session && (
              <div className="text-center text-gray-500 mt-6">Sign in to see more details and interact with posts.</div>
            )}
          </>
       
          <CommentsHighlights />
        </div>
      </div>
    </main>
  );
}
