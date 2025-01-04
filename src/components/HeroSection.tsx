import Image from "next/image";
import { motion } from "motion/react";

export default function HeroSection() {
    return (
        <section className="grid grid-cols-12 gap-4 px-6 md:px-20 items-center min-h-screen">
            <motion.div
                className="h-full col-span-12 md:col-start-7 md:col-span-6 m-4 md:m-12 order-1 md:order-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Image className="w-full h-full object-contain" src="/meet-claude.gif" alt="Claude hero" width={700} height={700} priority />
            </motion.div>

            <div className="flex flex-col gap-4 col-span-12 md:col-start-2 md:col-span-5 text-center md:text-left order-2 md:order-1">
                <div className="flex flex-row gap-3">
                    <motion.span
                        className="text-4xl md:text-6xl font-[600] line-height-[110%] font-copernicus"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >
                        Meet
                    </motion.span>
                    <motion.span
                        className="text-4xl md:text-6xl font-[600] line-height-[110%] font-copernicus"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                    >
                        Claude
                    </motion.span>
                </div>

                <motion.p
                    className="text-base md:text-lg -mt-2 font-medium font-tyrene line-height-[140%] text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                    Claude is AI for all of us. Whether you&apos;re brainstorming alone or building with a team of thousands, Claude is here to help.
                </motion.p>

                <div className="flex flex-col md:flex-row gap-4 mt-2">
                    <motion.button
                        className="bg-black text-white font-serene px-8 py-4 rounded-xl text-sm font-serene-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                    >
                        Try Claude
                    </motion.button>
                    <motion.button
                        className="text-black font-serene px-8 py-4 rounded-xl border border-black text-sm font-serene-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
                    >
                        Get api access
                    </motion.button>
                </div>
            </div>
        </section>
    );
}