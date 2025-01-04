import Announcement from "./Announcement";
import Link from "next/link";

export default function CompanyNews() {
    return (
        <section className="grid grid-cols-12 bg-[#F0EEE6] gap-8 px-6 md:px-20 py-16 md:py-32">
            <div className="col-span-12 flex justify-between items-center mb-16">
                <h2 className="font-serene text-4xl md:text-3xl font-serene-black">Company News</h2>
                <Link
                    href="#"
                    className="font-serene text-sm font-serene-medium hover:opacity-60"
                >
                    See All
                </Link>
            </div>

            <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr mx-8">
                <Announcement
                    category="Announcements"
                    title="Introducing the Model Context Protocol"
                    date="Nov 25, 2024"
                    href="#"
                />

                <Announcement
                    category="Announcements"
                    title="Powering the next generation of AI development with AWS"
                    date="Nov 22, 2024"
                    href="#"
                />

                <Announcement
                    category="Announcements"
                    title="Claude 3.5 Sonnet on GitHub Copilot"
                    date="Oct 29, 2024"
                    href="#"
                />
            </div>
        </section>
    );
} 