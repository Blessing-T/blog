
import Image from "next/image";
import { FaFacebook, FaTwitter, FaRss, FaGooglePlusG, FaDribbble } from "react-icons/fa";


const recommended = [
  {
    id: 1,
    category: "Music",
    title: "Gabrielle Aplin with The Power Of Love",
    date: "31 OCT, 2017",
    image: "/pic2.jpg",
  },
  {
    id: 2,
    category: "Mixed",
    title: "Learning More About Macaws in The Amazon Jungle",
    date: "31 OCT, 2017",
    image: "/pic3.jpg",
  },
  {
    id: 3,
    category: "Food",
    title: "The Importance of Water and Healthy Meals",
    date: "31 OCT, 2017",
    image: "/pic4.jpg",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-1/3 bg-white border-r hidden md:block ml-5">
      <div className="mb-8 pt-5 bg-teal-400">
        
        <div className="flex space-x-4 text-xl justify-center">
          <h3 className=" text-gray-200 mb-4 text-l">FOLLOW:</h3>
          <a href="#" className="hover:text-teal-500">
            <FaTwitter className="text-gray-200 hover:text-white transition-colors duration-300 w-6 h-6" />
          </a>
          <a href="" >
             <FaFacebook className="text-gray-200 hover:text-white transition-colors duration-300 w-6 h-6" />
          </a>
          <a href="">
            <FaGooglePlusG className="text-gray-200 hover:text-white transition-colors duration-300 w-6 h-6" />
          </a>
          <a href="">
            <FaDribbble className="text-gray-200 hover:text-white transition-colors duration-300 w-6 h-6" />
          </a>
          <a href="">
            <FaRss className="text-gray-200 hover:text-white transition-colors duration-300 w-6 h-6" />
          </a>
        </div>
      </div>

      <h3 className="text-sm font-bold text-black mb-4">RECOMMENDED</h3>
      <div className="space-y-6">
        {recommended.map((item) => (
          <div key={item.id} className="flex space-x-4">
            <Image
              src={item.image}
              alt={item.title}
              width={120}
              height={20}
              className="object-cover"
            />
            <div>
              <p className="text-xs uppercase text-teal-500 font-semibold">{item.category}</p>
              <h4 className="text-sm font-medium">{item.title}</h4>
              <span className="text-xs text-black">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
