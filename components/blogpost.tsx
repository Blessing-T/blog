"use client";

import Image from "next/image";

import { useState } from "react";

interface BlogPostProps {
  id: string;
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
}


export default function BlogPost({
  id,
  image,
  category,
  date,
  title,
  description,
}: BlogPostProps) {
  const [likes, setLikes] = useState<number | null>(null);
  const [dislikes, setDislikes] = useState<number | null>(null);

  const handleReaction = async (type: "like" | "dislike") => {
    const res = await fetch(`/api/post/${id}/reaction`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type }),
    });
    if (res.ok) {
      const data = await res.json();
      setLikes(data.likes);
      setDislikes(data.dislikes);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden border hover:shadow-lg transition">
      <div className="w-full h-48 relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-md"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500">
          <span className="text-teal-500 font-semibold uppercase">{category}</span>{" "}
          {date}
        </p>
        <h2 className="text-lg font-bold text-gray-800 mt-2 hover:text-teal-600 transition">
          {title}
        </h2>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <div className="flex gap-4 mt-4">
          <button
            className="px-3 py-1 bg-teal-500 text-white rounded hover:bg-teal-600"
            onClick={() => handleReaction("like")}
          >
            👍 Like {likes !== null ? likes : ""}
          </button>
          <button
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => handleReaction("dislike")}
          >
            👎 Dislike {dislikes !== null ? dislikes : ""}
          </button>
        </div>
      </div>
    </div>
  );
}
