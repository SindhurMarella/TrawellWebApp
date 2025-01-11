import React from 'react'

function Terms() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing and using TravelExplorer's services, you agree to be bound by these terms and conditions.
            Please read these terms carefully before using our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">2. Booking and Payments</h2>
          <p className="text-gray-700 mb-4">
            All bookings are subject to availability and confirmation. Payments must be made in full at the time
            of booking unless otherwise specified. We reserve the right to cancel bookings that do not comply
            with our payment terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Cancellation Policy</h2>
          <p className="text-gray-700">
            Cancellations must be made in writing. Refunds will be processed according to our cancellation
            policy, which varies depending on the type of booking and timing of cancellation.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Terms