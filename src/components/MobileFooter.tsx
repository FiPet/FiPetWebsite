import React from 'react';

const MobileFooter = () => {


    return (


        <footer className="bg-background  px-6 py-12">
            <div className="max-w-screen-xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="md:col-span-2 space-y-4">
                        <h2 className="text-3xl font-bold text-white">
                            We&apos;re changing the way teens learn finance.
                        </h2>
                        <p className="text-3xl font-bold text-orange-400">Forever.</p>
                        <p className="text-3xl font-bold text-orange-400">
                            One quest at a time.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white uppercase">Company</h3>
                        <ul className="space-y-2 text-gray-200">
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Team</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white uppercase">Product</h3>
                        <ul className="space-y-2 text-gray-200">
                            <li><a href="#" className="hover:underline">Explore</a></li>
                            <li><a href="#" className="hover:underline">Waitlist</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white uppercase">Connect</h3>
                        <ul className="space-y-2 text-gray-200">
                            <li><a href="#" className="hover:underline">LinkedIn</a></li>
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                            <li><a href="#" className="hover:underline">TikTok</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12  pt-6 flex flex-col md:flex-row justify-between items-center text-gray-200 text-sm">
                    <span>©2025 FiPet</span>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MobileFooter;