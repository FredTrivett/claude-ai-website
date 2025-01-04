import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#1C1C1C] text-white font-serene text-sm font-serene-medium">
            <div className="grid grid-cols-12 gap-8 px-6 md:px-20 py-16">
                {/* Logo Column */}
                <div className="col-span-12 mb-8 md:mb-0 md:col-span-2">
                    <span className="text-6xl font-serene-bold">A</span>
                </div>

                {/* Navigation Columns */}
                <div className="col-span-12 md:col-span-2">
                    <ul className="space-y-4 mb-8 md:mb-0">
                        <li><a href="#" className="text-[#858585] hover:text-white">Claude</a></li>
                        <li><a href="#" className="text-[#858585] hover:text-white">API</a></li>
                        <li><a href="#" className="text-[#858585] hover:text-white">Team</a></li>
                        <li><a href="#" className="text-[#858585] hover:text-white">Pricing</a></li>
                        <li><a href="#" className="text-[#858585] hover:text-white">Research</a></li>
                        <li><a href="#" className="text-[#858585] hover:text-white">Company</a></li>
                        <li><a href="#" className="text-[#858585] hover:text-white">Customers</a></li>
                        <li><a href="#" className="text-[#858585] hover:text-white">News</a></li>
                        <li><a href="#" className="text-[#858585] hover:text-white">Careers</a></li>
                    </ul>
                </div>

                <div className="col-span-12 md:col-span-2">
                    <ul className="space-y-4 mb-8 md:mb-0">
                        <li><a href="#" className="text-[#858585] hover:text-white">Press Inquiries</a></li>
                        <li><a href="#" className="text-[#858585] hover:text-white">Support</a></li>
                        <li><a href="#" className="text-[#858585] hover:text-white">Status</a></li>
                        <li><a href="#" className="text-[#858585] hover:text-white">Availability</a></li>
                        <li><a href="#" className="text-[#858585] hover:text-white">Twitter</a></li>
                        <li><a href="#" className="text-[#858585] hover:text-white">LinkedIn</a></li>
                        <li><a href="#" className="text-[#858585] hover:text-white">YouTube</a></li>
                    </ul>
                </div>

                <div className="col-span-12 md:col-span-3">
                    <ul className="space-y-4 mb-8 md:mb-0">
                        <li><a href="#" className="text-[#858585] hover:text-white">Terms of Service – Consumer</a></li>
                        <li><a href="#" className="text-[#858585] hover:text-white">Terms of Service – Commercial</a></li>
                        <li><a href="#" className="text-[#858585] hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="text-[#858585] hover:text-white">Usage Policy</a></li>
                        <li><a href="#" className="text-[#858585] hover:text-white">Responsible Disclosure Policy</a></li>
                        <li><a href="#" className="text-[#858585] hover:text-white">Compliance</a></li>
                        <li><a href="#" className="text-[#858585] hover:text-white">Privacy Choices</a></li>
                    </ul>
                </div>

                {/* Copyright Column */}
                <div className="col-span-12 md:col-span-3 md:text-right">
                    <p className="text-[#858585]">© 2024 Anthropic PBC</p>
                </div>
            </div>
        </footer>
    );
} 