import React from 'react'
import { Link } from 'react-router-dom'

export default function SupportLinks() {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Support</h4>
      <ul className="space-y-2">
        <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
        <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
        <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
      </ul>
    </div>
  )
}