import { useRef } from "react";
import { motion, useInView } from "motion/react";
import CapabilityCard from "./CapabilityCard";

export default function CapabilitiesSection() {
    const capabilitiesRef = useRef(null);
    const isInView = useInView(capabilitiesRef, {
        once: true,
        margin: "-100px",
    });

    return (
        <section className="px-6 md:px-20 flex flex-col gap-8 justify-center items-center">
            <motion.h2
                className="text-3xl md:text-[2.8rem] font-serene font-serene-black text-center"
                ref={capabilitiesRef}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Claude's capabilities
            </motion.h2>
            <ul className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
                <motion.li
                    className="col-span-12 md:col-span-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                    <CapabilityCard
                        imageSrc="/advanced-reasoning.webp"
                        imageAlt="Advanced reasoning"
                        title="Advanced reasoning"
                        description="Claude can perform complex cognitive tasks that go beyond simple pattern recognition or text generation"
                    />
                </motion.li>

                <motion.li
                    className="col-span-12 md:col-span-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                    <CapabilityCard
                        imageSrc="/vision-analysis.webp"
                        imageAlt="Vision analysis"
                        title="Vision analysis"
                        description="Transcribe and analyze almost any static image, from handwritten notes and graphs, to photographs"
                    />
                </motion.li>

                <motion.li
                    className="col-span-12 md:col-span-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                >
                    <CapabilityCard
                        imageSrc="/code-generation.webp"
                        imageAlt="Code generation"
                        title="Code generation"
                        description="Start creating websites in HTML and CSS, turning images into structured JSON data, or debugging complex code bases"
                    />
                </motion.li>

                <motion.li
                    className="col-span-12 md:col-span-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                >
                    <CapabilityCard
                        imageSrc="/multilingual-processing.webp"
                        imageAlt="Multilingual processing"
                        title="Multilingual processing"
                        description="Translate between various languages in real-time, practice grammar, or create multi-lingual content"
                    />
                </motion.li>
            </ul>
        </section>
    );
}
