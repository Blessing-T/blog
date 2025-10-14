"use client";
import EmblaCarousel from "@/components/banner";
import { useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";

const newsArticles = [
  {
    id: 1,
    title: "Global Markets Show Signs of Recovery",
    category: "Business",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    summary:
      "After months of decline, global markets are showing signs of stabilization as investors regain confidence.",
  },
  {
    id: 2,
    title: "New Discoveries in Space Exploration",
    category: "Science",
    image: "https://images.unsplash.com/photo-1473923377535-0002805f57e6",
    summary:
      "NASA reveals exciting new findings about distant planets that could change our understanding of the galaxy.",
  },
  {
    id: 3,
    title: "Climate Change Impact Intensifies Worldwide",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    summary:
      "Severe weather patterns and rising sea levels continue to impact regions across the world, prompting urgent action.",
  },
  {
    id: 4,
    title: "Tech Giants Invest in AI Safety Initiatives",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    summary:
      "Major technology companies are collaborating to create ethical frameworks and safeguards for AI development.",
  },
];

export default function GeneralNewsPage() {
  const [search, setSearch] = useState("");

  const filteredNews = newsArticles.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
     
      <EmblaCarousel></EmblaCarousel>

     
      <div className="relative mb-8">
        <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNews.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-transform transform hover:-translate-y-1"
          >
            <div className="h-48 w-full relative">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover rounded-t-2xl"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-5">
              <p className="text-sm text-blue-600 font-semibold uppercase mb-2">
                {article.category}
              </p>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {article.title}
              </h2>
              <p className="text-gray-600 text-sm">{article.summary}</p>
            </div>
          </div>
        ))}
      </div>


    </main>
  );
}

