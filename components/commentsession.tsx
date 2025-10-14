"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Comment {
  _id: string;
  postId: string;
  name: string;
  text: string;
  createdAt: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const postId = "default-post"; 
  const [loading, setLoading] = useState(false);

 
  const fetchComments = async () => {
    try {
  const response = await fetch(`/api/comment?postId=${postId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]); 

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
   
    if (!name.trim() || !text.trim()) {
      alert("Please fill in both name and comment fields");
      return;
    }
    
    setLoading(true);

    try {
  const response = await fetch("/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          postId, 
          name: name.trim(), 
          text: text.trim() 
        }),
      });

      if (response.ok) {
    
        setName("");
        setText("");
        await fetchComments();
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Failed to post comment");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
      alert("Failed to post comment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-black">
      <div className="md:col-span-2 items-start">
        <h3 className="text-lg font-bold mb-6">RECENT COMMENTS</h3>
        
    
        <form onSubmit={handleSubmit} className="mb-8 p-4 border rounded-lg bg-gray-50">
          <h4 className="font-semibold mb-4">Add a Comment</h4>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={loading}
            />
            <textarea
              placeholder="Your Comment"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              required
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !name.trim() || !text.trim()}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Posting..." : "Post Comment"}
            </button>
          </div>
        </form>

    
        <ul className="space-y-4 text-gray-600">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <li
                key={comment._id}
                className="flex items-start border-b border-gray-200 pb-4 last:border-none"
              >
                <div className="flex-shrink-0 mr-3 mt-1 text-gray-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{comment.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{comment.text}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </li>
            ))
          ) : (
            <li className="text-gray-500 text-center py-4">
              No comments yet. Be the first to comment!
            </li>
          )}
        </ul>
      </div>

     
      <div>
        <h3 className="text-lg font-bold mb-6">HIGHLIGHTS</h3>
        <div className="space-y-6">
          <div className="flex gap-4">
            <Image
              src="/images/highlight1.jpg"
              alt="highlight 1"
              width={80}
              height={60}
              className="object-cover rounded"
            />
            <div>
              <span className="text-xs text-teal-500 font-semibold">
                MUSIC
              </span>
              <h4 className="text-sm font-semibold mt-1">
                Gabrielle Aplin with The Power Of Love
              </h4>
              <p className="text-xs text-gray-400 mt-1">31 OCT, 2017</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Image
              src="/images/highlight2.jpg"
              alt="highlight 2"
              width={80}
              height={60}
              className="object-cover rounded"
            />
            <div>
              <span className="text-xs text-teal-500 font-semibold">
                MUSIC
              </span>
              <h4 className="text-sm font-semibold mt-1">
                Starting to Actually Listen to The Lyrics in Music
              </h4>
              <p className="text-xs text-gray-400 mt-1">16 OCT, 2017</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}