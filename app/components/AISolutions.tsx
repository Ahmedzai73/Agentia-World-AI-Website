
export default function AISolutions() {
    return (
        <section id="solutions" className=" py-20 px-4 relative">
            <div className=" max-w-6xl mx-auto">
                <div className=" text-center mb-16">
                    <h2 className=" text-4xl md:text-5xl font-bold mb-6">
                        <span
                            className=" bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
                        >AI Solutions</span
                        >
                    </h2>
                    <p className=" text-xl text-gray-400">
                        Transforming industries with intelligent agents
                    </p>
                </div>
                <div className=" grid md:grid-cols-3 gap-8">
                    <div
                        className=" p-6 rounded-xl bg-white/5 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
                    >
                        <div
                            className=" w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4"
                        >
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
                                className="lucide lucide-earth w-6 h-6"
                            >
                                <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
                                <path
                                    d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"
                                ></path>
                                <path
                                    d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
                                ></path>
                                <circle cx="12" cy="12" r="10"></circle>
                            </svg>
                        </div>
                        <h3 className=" text-xl font-bold mb-2">
                            Enterprise AI
                        </h3>
                        <p className=" text-gray-400">
                            Custom AI agents designed for enterprise-scale operations and
                            decision-making
                        </p>
                    </div>
                    <div
                        className=" p-6 rounded-xl bg-white/5 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
                    >
                        <div
                            className=" w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4"
                        >
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
                                className="lucide lucide-server w-6 h-6"
                            >
                                <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                                <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                                <line x1="6" x2="6.01" y1="6" y2="6"></line>
                                <line x1="6" x2="6.01" y1="18" y2="18"></line>
                            </svg>
                        </div>
                        <h3 className=" text-xl font-bold mb-2">
                            Neural Operations
                        </h3>
                        <p className=" text-gray-400">
                            Automated workflow optimization through distributed neural networks
                        </p>
                    </div>
                    <div
                        className=" p-6 rounded-xl bg-white/5 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
                    >
                        <div
                            className=" w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4"
                        >
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
                                className="lucide lucide-shield w-6 h-6"
                            >
                                <path
                                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                                ></path>
                            </svg>
                        </div>
                        <h3 className=" text-xl font-bold mb-2">
                            Secure Intelligence
                        </h3>
                        <p className=" text-gray-400">
                            Privacy-first AI solutions with military-grade security protocols
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}
