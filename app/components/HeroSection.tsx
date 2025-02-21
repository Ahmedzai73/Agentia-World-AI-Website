"use client"
import TextAnimation from './TextAnimation';
export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-black via-black to-purple-900/20 pt-20">
            {/* Main Content */}
            <div className="max-w-6xl mx-auto text-center transform transition-all duration-1000 translate-y-0 opacity-100">
                {/* Powered By Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full mb-6">
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                    <span className="text-sm text-purple-400">POWERED BY PANAVERSITY</span>
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                    <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                        Enterprise AI Agents
                    </span>
                    <span className="block text-white mt-2">for the Future</span>
                </h1>

                {/* Feature Card */}
                <div className="max-w-2xl mx-auto bg-white/5 rounded-xl p-6 mb-12 backdrop-blur-sm border border-purple-500/20">
                    <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
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
                                className="w-6 h-6"
                            >
                                <path d="M12 8V4H8" />
                                <rect width="16" height="12" x="4" y="8" rx="2" />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                            </svg>
                        </div>
                        <div className="flex-1 text-left">
                            <div className="bg-white/5 rounded-lg p-4">
                                <p className="text-gray-300">
                                    <TextAnimation />
                                    <span className="inline-block w-0.5 h-5 ml-1 bg-purple-500 animate-pulse"></span>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <button className="group bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] flex items-center">
                        Deploy Your AI Agent
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
                            className="ml-2 group-hover:translate-x-1 transition-transform"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>
                    <button className="px-8 py-4 rounded-lg text-lg font-bold border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]">
                        Watch Demo
                    </button>
                </div>
            </div>

            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[100px] animate-pulse animation-delay-700"></div>
            </div>
        </section>
    );
}