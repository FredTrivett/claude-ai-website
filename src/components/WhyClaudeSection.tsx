import FeaturedCard from "./FeaturedCard";

export default function WhyClaudeSection() {
    return (
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
    );
}