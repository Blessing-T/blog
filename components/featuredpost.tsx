import BlogPost from "./blogpost";
import Carousel from "./carousel";
import CommentSection from "./commentsession";

export default function FeaturedPost() {
  const blogPosts = [
    {
      image: "/blog1.jpg",
      category: "Technology",
      date: "October 31, 2027",
      title: "Understanding Next.js Components",
      description: "Learn how to structure your Next.js apps with components."
    },
    {
      image: "/blog2.jpg",
      category: "Lifestyle",
      date: "October 31, 2027",
      title: "Healthy Living Tips",
      description: "Small changes that make a big impact on your health."
    },
    {
      image: "/blog3.jpg",
      category: "Travel",
      date: "October 31, 2027",
      title: "Top Destinations in 2025",
      description: "Explore the must-visit places around the world this year."
    }
  ];

  return (
    <article className="p-6">
      <Carousel />
      
      
      <div className="text-sm text-black mt-4">
        <span className="uppercase text-teal-500">Featured</span>
        {" / "}
        <span className="uppercase text-teal-500">Lifestyle</span>
        {" • "}
        <span>October 28, 2017</span>
      </div>
      <h2 className="text-3xl mt-2 text-gray-800 hover:text-teal-500 cursor-pointer">
        Take a Deep Breath and Just Be
      </h2>
      <CommentSection  />
      
      <div className="mt-8 flex gap-6">
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            image={post.image}
            category={post.category}
            date={post.date}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </article>
  );
}
