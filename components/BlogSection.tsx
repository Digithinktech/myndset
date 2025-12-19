import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "Why Your Pins Aren't Converting (And How to Fix It)",
    category: "Strategy",
    image: "https://picsum.photos/600/400?random=50"
  },
  {
    id: 2,
    title: "5 Trends Taking Over Pinterest in 2024",
    category: "Trends",
    image: "https://picsum.photos/600/400?random=51"
  },
  {
    id: 3,
    title: "The Ultimate Guide to Idea Pins",
    category: "Guides",
    image: "https://picsum.photos/600/400?random=52"
  }
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-pop-cream">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-pop-pink font-bold uppercase tracking-widest text-sm">Our Journal</span>
              <h2 className="font-display font-black text-4xl md:text-5xl text-pop-purple uppercase mt-2">Latest Insights</h2>
            </div>
            <a href="#" className="hidden md:block font-bold text-pop-purple underline decoration-pop-pink decoration-4 underline-offset-4 hover:text-pop-pink transition-colors">View all posts</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 left-4 bg-pop-yellow px-3 py-1 rounded-full text-xs font-bold uppercase text-pop-purple">
                    {post.category}
                  </div>
                  <div className="absolute inset-0 bg-pop-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white p-3 rounded-full">
                       <ArrowUpRight className="w-6 h-6 text-pop-purple" />
                    </div>
                  </div>
                </div>
                <h3 className="font-display font-bold text-2xl text-pop-purple leading-tight group-hover:text-pop-pink transition-colors">
                  {post.title}
                </h3>
              </article>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <a href="#" className="font-bold text-pop-purple underline decoration-pop-pink decoration-4 underline-offset-4">View all posts</a>
          </div>
       </div>
    </section>
  );
};

export default BlogSection;