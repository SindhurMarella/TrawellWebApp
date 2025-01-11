import React from 'react'
import BlogPost from '../components/BlogPost'

function TravelBlog() {
  const blogPosts = [
    {
      title: "Exploring the Hidden Beaches of Bali",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      excerpt: "Discover secluded paradise beaches away from tourist crowds..."
    },
    {
      title: "Ultimate Guide to Paris",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      excerpt: "Everything you need to know for your first Paris adventure..."
    },
    {
      title: "Best Street Food in Bangkok",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      excerpt: "A culinary journey through Bangkok's vibrant street food scene..."
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Travel Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </div>
  )
}

export default TravelBlog