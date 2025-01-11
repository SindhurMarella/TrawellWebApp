import React from "react";
import { Link } from "react-router-dom";

export default function QuickLinks() {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2">
        <li>
          <Link to="/about" className="text-gray-400 hover:text-white">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-400 hover:text-white">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/blog" className="text-gray-400 hover:text-white">
            Travel Blog
          </Link>
        </li>
      </ul>
    </div>
  );
}
