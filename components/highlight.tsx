import Image from "next/image";
import Link from "next/link";

interface HighlightProps {
  image: string;
  category?: string;
  date?: string;
  title: string;
  href?: string;
}

export default function Highlight({
  image,
  category = "Music",
  date = "31 OCT, 2017",
  title,
  href = "#",
}: HighlightProps) {
  return (
    <div className="flex items-start gap-4 py-4 border-b">
      <div className="w-20 h-16 relative flex-shrink-0">
        <Image src={image} alt={title} fill className="object-cover rounded-sm" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-teal-500 uppercase">{category}</p>
        <h4 className="text-base text-gray-800 hover:text-teal-500">
          {href ? <Link href={href}>{title}</Link> : title}
        </h4>
        <p className="text-xs text-gray-400 mt-1">{date}</p>
      </div>
    </div>
  );
}
