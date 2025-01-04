export default function ClaudeModelFamilySection() {
    return (
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
    );
} 