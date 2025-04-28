import React from 'react';

const PatentConsultancy = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">

      {/* Navbar */}
      <nav className="bg-yellow-500 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-center">
          <h1 className="text-3xl font-extrabold text-white">Patent Consultancy</h1>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-12 space-y-16">

        {/* Introduction Card */}
        <section className="bg-white p-8 shadow-xl rounded-2xl max-w-4xl mx-auto text-center border border-yellow-500">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Patent Consultancy</h2>
          <p className="text-lg text-gray-600">Helping innovators protect their inventions through expert patent advice and support.</p>
        </section>

        {/* Services Card */}
        <section className="bg-white p-8 shadow-xl rounded-2xl max-w-5xl mx-auto border border-yellow-500">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg border border-yellow-500 shadow-sm hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">Patent Search</h3>
              <p className="text-gray-600">Comprehensive global patent searches to ensure your innovation is unique.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-yellow-500 shadow-sm hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">Patent Filing</h3>
              <p className="text-gray-600">Drafting and filing strong patent applications to protect your idea legally.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-yellow-500 shadow-sm hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">Consultation & Advisory</h3>
              <p className="text-gray-600">Expert advice on patent strategies, licensing, and commercialization.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-yellow-500 shadow-sm hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">Patent Litigation Support</h3>
              <p className="text-gray-600">Legal support in case of infringement issues or patent disputes.</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white p-8 shadow-xl rounded-2xl max-w-4xl mx-auto border border-yellow-500">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How It Works</h2>
          <ol className="space-y-6 list-decimal list-inside text-gray-700">
            <li>Submit your inquiry with project details.</li>
            <li>Get matched with an expert consultant.</li>
            <li>Receive detailed guidance and services.</li>
            <li>File your patent and secure your innovation.</li>
          </ol>
        </section>

        {/* Book a Consultation */}
        <section className="flex justify-center">
          <a href="#booking" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transition">
            Book a Consultation
          </a>
        </section>

        {/* FAQs */}
        <section className="bg-white p-8 shadow-xl rounded-2xl max-w-4xl mx-auto border border-yellow-500">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">FAQs</h2>
          <div className="space-y-4">
            <details className="p-4 border border-yellow-500 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer text-gray-700">What is a patent search?</summary>
              <p className="mt-2 text-gray-600">It is a thorough search of existing patents to check if your invention is new.</p>
            </details>
            <details className="p-4 border border-yellow-500 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer text-gray-700">How long does it take to get a patent?</summary>
              <p className="mt-2 text-gray-600">Patent approvals can take anywhere from 1 to 3 years depending on the jurisdiction.</p>
            </details>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white p-8 shadow-xl rounded-2xl max-w-4xl mx-auto border border-yellow-500">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What Our Clients Say</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-yellow-500 shadow-sm">
              <p className="text-gray-600">"The team guided me throughout the patent filing process flawlessly. Highly recommended!"</p>
              <p className="text-right font-semibold text-gray-700 mt-2">- Sarah M.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-yellow-500 shadow-sm">
              <p className="text-gray-600">"Professional, knowledgeable, and always available. Great experience!"</p>
              <p className="text-right font-semibold text-gray-700 mt-2">- Rahul V.</p>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section id="booking" className="bg-white p-8 shadow-xl rounded-2xl max-w-6xl mx-auto mt-16 scroll-mt-24 border border-yellow-500">
          <div className="grid md:grid-cols-3 gap-10">

            {/* Main Form */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Book Your Patent Consultation</h2>
              <p className="text-gray-600 mb-8">Please fill out the details below to schedule your consultation with our patent experts.</p>

              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input type="text" className="w-full p-3 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Enter your full name" required />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input type="email" className="w-full p-3 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Enter your email" required />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input type="tel" className="w-full p-3 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Enter your phone number" required />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Startup Name</label>
                  <input type="text" className="w-full p-3 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Enter your startup name" />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Website Link</label>
                  <input type="url" className="w-full p-3 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Enter your website link" />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Brief Description of Idea</label>
                  <textarea className="w-full p-3 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" rows="4" placeholder="Describe your idea briefly" required></textarea>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Already Filed Patent?</label>
                  <select className="w-full p-3 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400">
                    <option value="">Select an option</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Upload Patent Document (If Yes)</label>
                  <input type="file" className="w-full p-3 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Preferred Date</label>
                  <input type="date" className="w-full p-3 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Preferred Time Slot</label>
                  <input type="time" className="w-full p-3 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Preferred Communication Mode</label>
                  <select className="w-full p-3 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" required>
                    <option value="">Select a mode</option>
                    <option>Video Call</option>
                    <option>Audio Call</option>
                    <option>Messaging</option>
                  </select>
                </div>

                <div className="text-center">
                  <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-md transition">
                    Book Consultation
                  </button>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md border border-yellow-500">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Book?</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-3 mb-8">
                <li>Expert one-on-one guidance</li>
                <li>Fast-tracked patent filing</li>
                <li>Confidential and secure process</li>
                <li>Increase protection & market value</li>
              </ul>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Cost Info</h3>
              <p className="text-gray-700">Consultation starts at <strong>$99</strong> for the first session. Customized packages available based on your needs.</p>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-yellow-600 text-white py-6 mt-12">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; 2025 Patent Consultancy | All Rights Reserved</p>
        </div>
      </footer>

    </div>
  );
};

export default PatentConsultancy;
