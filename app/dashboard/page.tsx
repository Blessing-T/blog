import { auth } from "@/lib/auth";
import Post from "@/models/post";
import connect from "@/lib/mongodb";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) {
    return (
      <div className="p-8">
        <h2 className="text-xl">You must be signed in to view the dashboard.</h2>
        <Link href="/signIn" className="text-blue-600 underline">Sign In</Link>
      </div>
    );
  }

  await connect();
  type PostType = {
    _id: string;
    title: string;
    description?: string;
    [key: string]: unknown;
  };
  const rawPosts = await Post.find().sort({ createdAt: -1 }).lean();
  const posts: PostType[] = rawPosts.map((post) => ({
    ...post,
    _id: post._id?.toString() ?? "",
    title: post.title ?? "",
    description: post.description ?? "",
  }));

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-4">Welcome, {session.user?.name || session.user?.email}</p>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post._id} className="p-4 border rounded flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.description?.slice(0, 150)}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={async () => {
                  if (!confirm('Delete this post?')) return;
                  await fetch(`/api/post/${post._id}`, { method: 'DELETE' });
                  window.location.reload();
                }}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
