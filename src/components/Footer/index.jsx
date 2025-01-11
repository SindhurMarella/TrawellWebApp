import React from "react";
import { QuickLinks } from "./QuickLinks";
import { SupportLinks } from "./SupportLinks";
import { SocialLinks } from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TRAWELL</h3>
            <p className="text-gray-400">
              Discover the world with us. Your journey begins here.
            </p>
          </div>

          <QuickLinks />
          <SupportLinks />
          <SocialLinks />
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TRAWELL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
