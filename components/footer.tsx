export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between">
      
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="font-script text-3xl">Hueman</h2>
          <p className="mt-2 text-gray-400">
            Hueman Pro Wordpress theme by Press Customizr © 2025. All Rights
            Reserved.
          </p>
        </div>

   
        <ul className="flex gap-6 text-gray-300">
          <li>
            <a href="#" className="hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Categories
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Layouts
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Shortcodes
            </a>
          </li>
        </ul>

   
        <div className="flex gap-4 mt-6 md:mt-0">
          <a href="#" className="hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-white">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="hover:text-white">
            <i className="fab fa-dribbble"></i>
          </a>
          <a href="#" className="hover:text-white">
            <i className="fas fa-rss"></i>
          </a>
        </div>
      </div>

   
      <div className="flex justify-center">
        <button className="bg-gray-700 p-2 rounded hover:bg-gray-600">
          <i className="fas fa-chevron-up"></i>
        </button>
      </div>
    </footer>
  );
}
