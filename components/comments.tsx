import Image from "next/image";

export default function CommentsHighlights() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-black">
     
      <div className="md:col-span-2 items-start">
        <h3 className="text-lg font-bold mb-6">RECENT COMMENTS</h3>
        <ul className="space-y-4 text-gray-600">
          {[
            "Take a Deep Breath and Just Be – Massive Laugh on Take a Deep Breath and Just Be",
            "Learning More About Macaws in The Amazon Jungle – 4cut on Learning More About Macaws in The Amazon Jungle",
            "Gabrielle Aplin with The Power Of Love – 4cut on Gabrielle Aplin with The Power Of Love",
            "Take a Deep Breath and Just Be on Take a Deep Breath and Just Be",
          ].map((comment, i) => (
            <li
              key={i}
              className="flex items-start border-b pb-3 last:border-none"
            >
              <i className="far fa-comment mr-2 mt-1 text-gray-400"></i>
              <p className="text-sm">{comment}</p>
            </li>
          ))}
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
              className="object-cover"
            />
            <div>
              <span className="text-xs text-teal-500 font-semibold">
                MUSIC
              </span>
              <h4 className="text-sm font-semibold">
                Gabrielle Aplin with The Power Of Love
              </h4>
              <p className="text-xs text-gray-400">31 OCT, 2017</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Image
              src="/images/highlight2.jpg"
              alt="highlight 2"
              width={80}
              height={60}
              className="object-cover"
            />
            <div>
              <span className="text-xs text-teal-500 font-semibold">
                MUSIC
              </span>
              <h4 className="text-sm font-semibold">
                Starting to Actually Listen to The Lyrics in Music
              </h4>
              <p className="text-xs text-gray-400">16 OCT, 2017</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
