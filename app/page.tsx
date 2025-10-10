import Sidebar from "@/components/sidebar";
import FeaturedPost from "@/components/featuredpost";
import EmblaCarousel from "@/components/banner";
import CommentsHighlights from "@/components/comments";

export default function Home() {
  return (
    <main className="w-full mx-auto bg-white">
   
      <div className="w-full">
        <EmblaCarousel />
      </div>

      
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <FeaturedPost />
          <CommentsHighlights />
        </div>
      </div>
    </main>
  );
}
