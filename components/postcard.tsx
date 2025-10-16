"use client";

import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  image: string;
  category?: string;
  date?: string;
  title: string;
  description?: string;
  href?: string;
}

export default function PostCard({
  image,
  category = "Lifestyle",
  date = "October 31, 2017",
  title,
  description = "",
  href = "#",
}: PostCardProps) {
  return (
    <article className="bg-white border rounded-md overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="relative w-full h-56">
        <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-400">
          <span className="text-teal-500 uppercase font-semibold">{category}</span>
          <span className="mx-2">{date}</span>
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-2 leading-tight hover:text-teal-500">
          {href ? <Link href={href}>{title}</Link> : title}
        </h3>

        {description && (
          <p className="text-gray-600 mt-3 text-sm">{description}</p>
        )}
      </div>
    </article>
  );
}
