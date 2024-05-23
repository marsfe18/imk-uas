
export default function Footer() {
    return (
        <footer className="bg-gray-800 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
                <div className="text-white">
                    &copy; 2023 MyWebsite. All rights reserved.
                </div>
                <div>
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}