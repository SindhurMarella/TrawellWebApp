import { Link } from 'react-router-dom'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

export default function Footer() {
  const handleSocialClick = (platform) => {
    const urls = {
      facebook: 'https://facebook.com/travelexplorer',
      twitter: 'https://twitter.com/travelexplorer',
      instagram: 'https://instagram.com/travelexplorer'
    }
    window.open(urls[platform], '_blank', 'noopener,noreferrer')
  }

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
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Travel Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          
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
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TRAWELL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}