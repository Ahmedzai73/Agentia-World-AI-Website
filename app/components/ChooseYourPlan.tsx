
export default function ChooseYourPlan() {
    return (
        <section id="pricing" className=" py-20 px-4 relative">
            <div className=" max-w-6xl mx-auto">
                <div className=" text-center mb-16">
                    <h2 className=" text-4xl md:text-5xl font-bold mb-6">
                        <span
                            className=" bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
                        >Choose Your Plan</span
                        >
                    </h2>
                    <p className=" text-xl text-gray-400">
                        Scale your AI capabilities with our flexible pricing
                    </p>
                </div>
                <div className=" grid md:grid-cols-3 gap-8 cursor-pointer">
                    <div
                        className=" p-8 rounded-xl bg-white/5 border border-purple-500/10 transition-all duration-300 transform hover:scale-105"
                    >
                        <h3 className=" text-2xl font-bold mb-2">Starter</h3>
                        <div className=" mb-6">
                            <span className=" text-4xl font-bold">$499</span
                            ><span className=" text-gray-400">/month</span>
                        </div>
                        <ul className=" space-y-4 mb-8">
                            <li className=" flex items-center">
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
                                    className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path></svg
                                >2 AI Agent Instances
                            </li>
                            <li className=" flex items-center">
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
                                    className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path></svg
                                >Basic Neural Processing
                            </li>
                            <li className=" flex items-center">
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
                                    className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path></svg
                                >24/7 Support
                            </li>
                            <li className=" flex items-center">
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
                                    className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path></svg
                                >Weekly Analytics
                            </li>
                            <li className=" flex items-center">
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
                                    className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path></svg
                                >Basic Integration Support
                            </li>
                        </ul>
                        <button
                            className=" w-full py-3 rounded-lg font-semibold transition-all duration-300 border border-purple-500/30 hover:border-purple-500"
                        >
                            Get Started
                        </button>
                    </div>
                    <div
                        className=" p-8 rounded-xl bg-gradient-to-b from-purple-900/50 to-blue-900/30 border-2 border-purple-500 transition-all duration-300 transform hover:scale-105"
                    >
                        <h3 className=" text-2xl font-bold mb-2">Professional</h3>
                        <div className=" mb-6">
                            <span className=" text-4xl font-bold">$999</span
                            ><span className=" text-gray-400">/month</span>
                        </div>
                        <ul className=" space-y-4 mb-8">
                            <li className=" flex items-center">
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
                                    className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path></svg
                                >10 AI Agent Instances
                            </li>
                            <li className=" flex items-center">
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
                                    className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path></svg
                                >Advanced Neural Networks
                            </li>
                            <li className=" flex items-center">
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
                                    className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path></svg
                                >Priority Support
                            </li>
                            <li className=" flex items-center">
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
                                    className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path></svg
                                >Real-time Analytics
                            </li>
                            <li className=" flex items-center">
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
                                    className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path></svg
                                >Custom Integration
                            </li>
                            <li className=" flex items-center">
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
                                    className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path></svg
                                >API Access
                            </li>
                            <li className=" flex items-center">
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
                                    className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path></svg
                                >Advanced Security
                            </li>
                        </ul>
                        <button
                            className=" w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90"
                        >
                            Get Started
                        </button>
                    </div>
                    <div
                        className=" p-8 rounded-xl bg-white/5 border border-purple-500/10 transition-all duration-300 transform hover:scale-105"
                    >
                        <h3 className=" text-2xl font-bold mb-2">Enterprise</h3>
                        <div className=" mb-6">
                            <span className=" text-4xl font-bold">$Custom</span>
                        </div>
                        <ul className=" space-y-4 mb-8">
                            <li className=" flex items-center">
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
                                    className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path></svg
                                >Unlimited Agents
                            </li>
                            <li className=" flex items-center">
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
                                    className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path></svg
                                >Full Neural Suite
                            </li>
                            <li className=" flex items-center">
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
                                    className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path></svg
                                >Dedicated Support Team
                            </li>
                            <li className=" flex items-center">
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
                                    className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path></svg
                                >Advanced Analytics Dashboard
                            </li>
                            <li className=" flex items-center">
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
                                    className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path></svg
                                >Custom Development
                            </li>
                            <li className=" flex items-center">
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
                                    className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path></svg
                                >Full API Access
                            </li>
                            <li className=" flex items-center">
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
                                    className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path></svg
                                >Enterprise Security
                            </li>
                            <li className=" flex items-center">
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
                                    className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path></svg
                                >Custom Training
                            </li>
                        </ul>
                        <button
                            className=" w-full py-3 rounded-lg font-semibold transition-all duration-300 border border-purple-500/30 hover:border-purple-500"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}
