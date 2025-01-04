interface AnnouncementProps {
    category: string;
    title: string;
    date: string;
    href: string;
}

export default function Announcement({ category, title, date, href }: AnnouncementProps) {
    return (
        <a href={href} className="block group h-fit min-h-[200px] flex flex-col">
            <div className="flex-1 space-y-4 mb-8">
                <p className="font-serene text-sm font-serene-medium">{category}</p>
                <h2 className="font-serene text-2xl md:text-2xl font-serene-black group-hover:opacity-60 transition-opacity">
                    {title}
                </h2>
            </div>
            <p className="font-serene text-sm font-serene-medium text-[#6B6B6B]">
                {date}
            </p>
        </a>
    );
} 