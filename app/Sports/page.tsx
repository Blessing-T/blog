
import Image from "next/image";
import EmblaCarousel from "@/components/banner";

export default function SportsPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-black">
      
     <EmblaCarousel></EmblaCarousel>

    
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <iframe
      width="400"
      height="400"
      src="https://www.youtube.com/embed/rrGQ-sPx45E"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="rounded-2xl"
    ></iframe>
        <div>
          <span className="text-sm text-blue-600 font-semibold">FEATURED</span>
          <h2 className="mt-2 text-3xl font-bold">
            Big Match Analysis: Team A vs Team B
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            A thrilling encounter broke records and set new standards in the
            sports world. Here’s our deep dive into what made the game so
            memorable.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
            Read More
          </button>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold mb-6">Sports Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Football", "Basketball", "Tennis", "Athletics"].map((cat) => (
            <div
              key={cat}
              className="p-6 bg-white shadow rounded-2xl hover:shadow-lg transition cursor-pointer text-center"
            >
              <h4 className="font-semibold">{cat}</h4>
            </div>
          ))}
        </div>
      </section>

     
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-6">Latest Articles</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((article) => (
            <div
              key={article}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <Image
                src={`/football.jpg`}
                alt={`Article ${article}`}
                width={400}
                height={250}
                className="rounded-t-2xl object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-lg">
                  Exciting Sports Headline {article}
                </h4>
                <p className="mt-2 text-gray-600 text-sm">
                  A short teaser about the game or sporting event goes here.
                </p>
                <button className="mt-4 text-blue-600 font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
