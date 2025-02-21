export default function PoweredByAdvancedAI() {
    return (
      <section id="technology" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
                Powered by Advanced AI
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Built on cutting-edge neural architectures
            </p>
          </div>
  
          {/* Technology Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Card 1: Neural Networks */}
            <div className="p-6 rounded-xl bg-white/5 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 text-center group hover:transform hover:scale-105">
              <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-brain"
                >
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                  <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                  <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                  <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                  <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                  <path d="M6 18a4 4 0 0 1-1.967-.516" />
                  <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Neural Networks</h3>
              <p className="text-sm text-gray-400">
                Advanced neural architectures for complex decision making
              </p>
            </div>
  
            {/* Card 2: Deep Learning */}
            <div className="p-6 rounded-xl bg-white/5 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 text-center group hover:transform hover:scale-105">
              <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-cpu"
                >
                  <rect width="16" height="16" x="4" y="4" rx="2" />
                  <rect width="6" height="6" x="9" y="9" rx="1" />
                  <path d="M15 2v2" />
                  <path d="M15 20v2" />
                  <path d="M2 15h2" />
                  <path d="M2 9h2" />
                  <path d="M20 15h2" />
                  <path d="M20 9h2" />
                  <path d="M9 2v2" />
                  <path d="M9 20v2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Deep Learning</h3>
              <p className="text-sm text-gray-400">
                Sophisticated deep learning models for pattern recognition
              </p>
            </div>
  
            {/* Card 3: Advanced ML */}
            <div className="p-6 rounded-xl bg-white/5 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 text-center group hover:transform hover:scale-105">
              <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-code-xml"
                >
                  <path d="m18 16 4-4-4-4" />
                  <path d="m6 8-4 4 4 4" />
                  <path d="m14.5 4-5 16" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Advanced ML</h3>
              <p className="text-sm text-gray-400">
                Cutting-edge machine learning algorithms
              </p>
            </div>
  
            {/* Card 4: Global Scale */}
            <div className="p-6 rounded-xl bg-white/5 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 text-center group hover:transform hover:scale-105">
              <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-earth"
                >
                  <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                  <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
                  <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Global Scale</h3>
              <p className="text-sm text-gray-400">
                Distributed AI processing across global networks
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }