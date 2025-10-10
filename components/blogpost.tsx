import Image from "next/image";

interface BlogPostProps {
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
}

export default function BlogPost({
  image,
  category,
  date,
  title,
  description,
}: BlogPostProps) {
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
      </div>
    </div>
  );
}
