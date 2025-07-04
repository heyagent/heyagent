import Link from "next/link";
import Image from "next/image";
import { FiClock, FiCalendar } from "react-icons/fi";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "What is Artificial Intelligence and How Does AI Work For Human",
      image: "/blog-1.jpg",
      tags: ["AI", "Marketing"],
      readTime: "5 min read",
      author: {
        name: "Calvin Carlo",
        avatar: "/avatar-1.jpg"
      },
      date: "Sep 13, 2023"
    },
    {
      id: 2,
      title: "Lignin and the future circular make sssay form AI support system",
      image: "/blog-2.jpg",
      tags: ["AI", "Marketing"],
      readTime: "5 min read",
      author: {
        name: "Steven Townsend",
        avatar: "/avatar-2.jpg"
      },
      date: "Nov 29, 2023"
    },
    {
      id: 3,
      title: "Research Operations vs Research Is Always Essay On MasAI Theme",
      image: "/blog-3.jpg",
      tags: ["AI", "Marketing"],
      readTime: "5 min read",
      author: {
        name: "Tiffany Betancourt",
        avatar: "/avatar-3.jpg"
      },
      date: "Dec 29, 2023"
    }
  ];

  return (
    <div className="container relative md:mt-24 mt-16 mx-auto px-6 max-w-7xl">
      <div className="grid grid-cols-1 pb-6 text-center">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          Latest News
        </h3>
        <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
          Artificial intelligence makes it fast easy to create content for your blog, social media, website, and more!
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="relative bg-white dark:bg-slate-900 p-4 rounded-md shadow dark:shadow-gray-700">
            {/* Blog Image Placeholder */}
            <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-md shadow dark:shadow-gray-700 flex items-center justify-center">
              <span className="text-slate-500">Blog Image {post.id}</span>
            </div>
            
            <div className="pt-4">
              <div className="flex justify-between items-center">
                <div className="space-x-1">
                  {post.tags.map((tag, index) => (
                    <Link 
                      key={index}
                      href="/" 
                      className="bg-amber-400/10 text-amber-500 dark:text-amber-400 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5 inline-block"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
                <span className="flex items-center text-sm">
                  <FiClock className="h-4 w-4" />
                  <span className="ms-1 text-slate-600 dark:text-slate-300">{post.readTime}</span>
                </span>
              </div>
              
              <div className="mt-5">
                <Link href={`/blog-detail/${post.id}`} className="text-lg font-semibold hover:text-amber-400 transition-colors">
                  {post.title}
                </Link>
              </div>
              
              <div className="mt-5 flex justify-between items-center">
                <span className="flex items-center">
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 flex items-center justify-center text-xs text-white">
                    {post.author.name.charAt(0)}
                  </div>
                  <Link href="/" className="ms-1 text-slate-600 dark:text-slate-300 hover:text-amber-400 text-sm">
                    {post.author.name}
                  </Link>
                </span>
                <span className="flex items-center text-sm">
                  <FiCalendar className="h-4 w-4" />
                  <span className="ms-1 text-slate-600 dark:text-slate-300">{post.date}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}