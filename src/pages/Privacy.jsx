import React from 'react'

function Privacy() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect information that you provide directly to us, including name, email address,
            and travel preferences. We also automatically collect certain information about your
            device when you use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect to provide, maintain, and improve our services,
            to process your bookings, and to communicate with you about promotions and updates.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
          <p className="text-gray-700">
            We implement appropriate security measures to protect your personal information
            against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Privacy