import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

export default function SocialLinks() {
  const handleSocialClick = (platform) => {
    const urls = {
      facebook: 'https://facebook.com/travelexplorer',
      twitter: 'https://twitter.com/travelexplorer',
      instagram: 'https://instagram.com/travelexplorer'
    }
    window.open(urls[platform], '_blank', 'noopener,noreferrer')
  }

  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
      <div className="flex space-x-4">
        <button 
          onClick={() => handleSocialClick('facebook')} 
          className="text-gray-400 hover:text-white transition-colors"
        >
          <FiFacebook size={24} />
        </button>
        <button 
          onClick={() => handleSocialClick('twitter')} 
          className="text-gray-400 hover:text-white transition-colors"
        >
          <FiTwitter size={24} />
        </button>
        <button 
          onClick={() => handleSocialClick('instagram')} 
          className="text-gray-400 hover:text-white transition-colors"
        >
          <FiInstagram size={24} />
        </button>
      </div>
    </div>
  )
}