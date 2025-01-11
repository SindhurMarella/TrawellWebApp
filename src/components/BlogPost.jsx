import React from "react";

function BlogPost({ title, date, image, excerpt }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <p className="text-gray-500 text-sm">{date}</p>
        <h2 className="text-xl font-semibold mt-2">{title}</h2>
        <p className="text-gray-600 mt-2">{excerpt}</p>
        <button className="mt-4 text-blue-600 hover:text-blue-800">
          Read More →
        </button>
      </div>
    </div>
  );
}

export default BlogPost;
