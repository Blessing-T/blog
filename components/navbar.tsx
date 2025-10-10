"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Breaking News", href: "/breaking-news" },
    { name: "Technology", href: "/technology" },
    { name: "Sports", href: "/sports" },
    { name: "General News", href: "/general-news" },
    { name: "Create Post", href: "/signUp" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(""); 
    }
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
        
          <div className="text-2xl font-bold text-blue-400">NewsBlog</div>

         
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-blue-400 transition-colors ${
                  pathname === link.href ? "text-blue-400 font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

      
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center bg-gray-800 rounded-full px-3 py-1 w-64"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search news..."
              className="bg-transparent text-sm text-white placeholder-gray-400 w-full focus:outline-none"
            />
            <button
              type="submit"
              className="text-blue-400 hover:text-blue-500 ml-2"
            >
              🔍
            </button>
          </form>

          
          <div className="md:hidden">
            <button className="p-2 text-gray-300 hover:text-white focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
