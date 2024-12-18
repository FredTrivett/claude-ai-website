import Image from "next/image";

interface CapabilityCardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
}

export default function CapabilityCard({ imageSrc, imageAlt, title, description }: CapabilityCardProps) {
    return (
        <div className="flex flex-col items-center px-6 gap-4">
            <Image src={imageSrc} alt={imageAlt} width={180} height={180} />
            <h3 className="text-xl md:text-2xl font-serene font-serene-black text-center">{title}</h3>
            <p className="text-center font-copernicus font-copernicus-light text-base md:text-lg">
                {description}
            </p>
        </div>
    );
} 