import Image from "next/image";

interface FeaturedCardProps {
    backgroundColor: string;
    imageSrc: string;
    title: string;
    imageAlt?: string;
    label?: string;
}

export default function FeaturedCard({
    backgroundColor,
    imageSrc,
    title,
    imageAlt = "Featured post",
    label = "Featured paper"
}: FeaturedCardProps) {
    return (
        <div className={`${backgroundColor} rounded-3xl p-4 md:p-6 h-[280px] md:h-[340px] flex flex-col justify-between gap-4 cursor-pointer group relative overflow-hidden`}>
            <div className="absolute inset-0 flex items-center justify-center -mt-8 md:-mt-16">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={300}
                    height={300}
                    className="w-[70%] md:w-[80%] h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="flex flex-col relative mt-auto">
                <p className="text-black font-serene text-sm font-serene-medium">{label}</p>
                <h2 className="text-lg md:text-xl font-serene font-serene-black">{title}</h2>
            </div>
        </div>
    );
} 