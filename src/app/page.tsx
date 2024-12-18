"use client"

import Image from "next/image";
import FeaturedCard from "@/components/FeaturedCard";
import CapabilityCard from "@/components/CapabilityCard";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

export default function Home() {
  const capabilitiesRef = useRef(null);
  const isInView = useInView(capabilitiesRef, {
    once: true,
    margin: "-100px"
  });

  return (
    <>
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
            className="text-base md:text-lg -mt-2 font-medium font-tyrene line-height-[140%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            Claude is AI for all of us. Whether you're brainstorming alone or building with a team of thousands, Claude is here to help.
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

      <section className="grid grid-cols-12 gap-4 px-6 md:px-20 items-center my-16 md:my-32">
        <div className="bg-[#EBDBBC] col-span-12 rounded-3xl p-6 md:p-12">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="space-y-4 md:space-y-6 flex-1">
              <h2 className="text-md font-serene font-black">Announcements</h2>
              <h1 className="text-2xl md:text-4xl font-serene font-serene-black">
                Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku
              </h1>
              <p className="text-sm font-serene font-serene-medium">Oct 22, 2024</p>
            </div>
            <div className="bg-[#f1e6d0] p-6 md:p-8 rounded-2xl h-full w-full md:w-fit">
              <h3 className="text-sm font-serene font-serene-medium mb-2">Model updates</h3>
              <div>
                <a href="#" className="block text-lg md:text-xl font-serene font-serene-medium underline hover:opacity-70">
                  3.5 Sonnet
                </a>
                <a href="#" className="block text-lg md:text-xl font-serene font-serene-medium underline hover:opacity-70">
                  3.5 Haiku
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-4 px-6 md:px-20 items-center my-16 md:my-32 relative">
        <div className="col-span-12 flex flex-col gap-4 mb-8">
          <h2 className="text-3xl md:text-[2.8rem] font-serene font-serene-black text-center max-w-[500px] mx-auto leading-[110%]">The Claude model family</h2>
          <p className="text-lg md:text-[1.3rem] max-w-[700px] mx-auto font-copernicus font-copernicus-light text-center">Right-sized for any task, the Claude family of models offers the best combination of speed and performance.</p>
        </div>

        <div className="col-span-12 flex flex-col md:grid md:grid-cols-12 md:grid-rows-[repeat(10,48px)] md:relative">
          <div className="z-30 mb-4 md:mb-0 md:col-start-1 md:col-span-4 md:row-start-5 md:row-span-6 bg-white rounded-3xl p-8">
            <div className="mb-4">
              <span className="px-4 py-1 bg-[#E88D72] text-white rounded-full text-sm font-serene font-serene-medium">
                Light & fast
              </span>
            </div>
            <h2 className="text-2xl font-serene font-serene-black mb-2">Haiku</h2>
            <p className="font-copernicus font-copernicus-light">
              Our fastest model that can execute lightweight actions, with industry-leading speed.
            </p>
          </div>

          <div className="z-20 mb-4 md:mb-0 md:col-start-1 md:col-span-8 md:row-start-3 md:row-span-8 bg-[#F5F5F3] rounded-3xl p-8">
            <div className="md:grid md:grid-cols-2 md:gap-16">
              <div className="md:col-start-2 md:col-span-1">
                <div className="mb-4">
                  <span className="px-4 py-1 bg-[#E88D72] text-white rounded-full text-sm font-serene font-serene-medium">
                    Hard-working
                  </span>
                </div>
                <h2 className="text-2xl font-serene font-serene-black mb-2">Sonnet</h2>
                <p className="font-copernicus font-copernicus-light">
                  Our best combination of performance and speed for efficient, high-throughput tasks.
                </p>
              </div>
            </div>
          </div>

          <div className="z-10 md:col-start-1 md:col-span-12 md:row-start-1 md:row-span-10 bg-[#F0EFEA] rounded-3xl p-8">
            <div className="md:grid md:grid-cols-3 md:gap-16">
              <div className="md:col-start-3 md:col-span-1">
                <div className="mb-4">
                  <span className="px-4 py-1 bg-[#E88D72] text-white rounded-full text-sm font-serene font-serene-medium">
                    Powerful
                  </span>
                </div>
                <h2 className="text-2xl font-serene font-serene-black mb-2">Opus</h2>
                <p className="font-copernicus font-copernicus-light">
                  Our highest-performing model, which can handle complex analysis, longer tasks with many steps, and higher-order math and coding tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-4 px-6 md:px-20 items-center my-16 md:my-32 relative">
        <div className="col-span-12 flex flex-col gap-4 mb-8">
          <h2 className="text-3xl md:text-[2.8rem] font-serene font-serene-black text-center max-w-[500px] mx-auto leading-[110%]">Why Claude ?</h2>
          <p className="text-lg md:text-[1.3rem] max-w-[700px] mx-auto font-copernicus font-copernicus-light text-center">Anthropic builds frontier AI models backed by uncompromising integrity.</p>
        </div>

        <div className="col-span-12 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <h2 className="text-xl md:text-2xl font-serene font-serene-black mb-2">Secure</h2>
            <p className="text-base md:text-lg font-copernicus font-copernicus-light">With accessibility via AWS and GCP, SOC 2 Type II certification, and HIPAA compliance options, Claude adheres to the security practices your enterprise demands.</p>
          </div>

          <div className="col-span-12 md:col-span-4">
            <FeaturedCard
              backgroundColor="bg-[#EBDBBC]"
              imageSrc="/lock-thing.webp"
              title="Many-shot jailbreaking"
              label="Featured paper"
            />
          </div>

          <div className="col-span-12 md:col-span-4">
            <FeaturedCard
              backgroundColor="bg-[#F0EFEA]"
              imageSrc="/flame-thing.webp"
              title="Challenges in red teaming AI systems"
              label="Featured post"
            />
          </div>
        </div>

        <div className="col-span-12 my-6 border-b border-black"></div>

        <div className="col-span-12 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <h2 className="text-xl md:text-2xl font-serene font-serene-black mb-2">Trustworthy</h2>
            <p className="text-base md:text-lg font-copernicus font-copernicus-light">Claude combines best-in-class jailbreak resistance and misuse prevention to mitigate brand risk for our customers.</p>
          </div>

          <div className="col-span-12 md:col-span-4">
            <FeaturedCard
              backgroundColor="bg-[#E6E4DD]"
              imageSrc="/search-thing.webp"
              title="Red Teaming Language Models to Reduce Harms: Methods, Scaling Behaviors, and Lessons Learned"
              label="Featured paper"
            />
          </div>

          <div className="col-span-12 md:col-span-4">
            <FeaturedCard
              backgroundColor="bg-[#EBDBBC]"
              imageSrc="/pilar-thing.webp"
              title="Evaluating and Mitigating Discrimination in Language Model Decisions"
              label="Featured paper"
            />
          </div>
        </div>

        <div className="col-span-12 my-6 border-b border-black"></div>

        <div className="col-span-12 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <h2 className="text-xl md:text-2xl font-serene font-serene-black mb-2">Reliable</h2>
            <p className="text-base md:text-lg font-copernicus font-copernicus-light">Claude empowers you to deploy AI to business critical use cases, with very low hallucination rates and very high accuracy over long documents.</p>
          </div>

          <div className="col-span-12 md:col-span-4">
            <FeaturedCard
              backgroundColor="bg-[#CC785C]"
              imageSrc="/person-thing.webp"
              title="Open development"
              label="Featured paper"
            />
          </div>

          <div className="col-span-12 md:col-span-4">
            <FeaturedCard
              backgroundColor="bg-[#F0EFEA]"
              imageSrc="/arm-thing.webp"
              title="Clear communication"
              label="Featured post"
            />
          </div>
        </div>
      </section>

    </>
  );
}
