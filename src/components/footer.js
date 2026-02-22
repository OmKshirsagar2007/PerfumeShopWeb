import React from 'react'

const footer = () => {
    return (
        <div>
            <footer className="bg-white text-neutral-800 px-6 md:px-16 py-14 border-t border-neutral-200">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand Section */}
                    <div>
                        <h2
                            className="text-3xl tracking-wide mb-4"
                            style={{ fontFamily: "Playfair Display, serif" }}
                        >
                            PATOLA
                        </h2>

                        <p
                            className="text-sm text-neutral-600 leading-relaxed max-w-sm"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                            An independent fragrance house dedicated to the art of high perfumery
                            and sustainable luxury.
                        </p>
                    </div>

                    {/* Support */}
                    <div>
                        <h4
                            className="text-lg mb-5"
                            style={{ fontFamily: "Playfair Display, serif" }}
                        >
                            Support
                        </h4>

                        <ul
                            className="space-y-3 text-sm text-neutral-600"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                            <li className="hover:text-black transition cursor-pointer">
                                Complimentary Shipping
                            </li>
                            <li className="hover:text-black transition cursor-pointer">
                                Returns & Exchanges
                            </li>
                            <li className="hover:text-black transition cursor-pointer">
                                Track Order
                            </li>
                        </ul>
                    </div>

                    {/* The House */}
                    <div>
                        <h4
                            className="text-lg mb-5"
                            style={{ fontFamily: "Playfair Display, serif" }}
                        >
                            The House
                        </h4>

                        <ul
                            className="space-y-3 text-sm text-neutral-600"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                            <li className="hover:text-black transition cursor-pointer">
                                Our Story
                            </li>
                            <li className="hover:text-black transition cursor-pointer">
                                Sustainability
                            </li>
                            <li className="hover:text-black transition cursor-pointer">
                                Contact Us
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div
                    className="mt-12 pt-6 text-center text-xs text-neutral-500"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                    © {new Date().getFullYear()} PATOLA. All rights reserved.
                </div>
            </footer>



        </div>
    )
}

export default footer




