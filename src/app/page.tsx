import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-12 gap-4 px-20 items-center h-screen">
        <div className="flex flex-col gap-4 col-start-2 col-span-5">
          <h1 className="text-6xl font-[600] line-height-[110%] font-copernicus">Meet Claude</h1>
          <p className="text-lg -mt-2 font-medium font-tyrene line-height-[140%]">Claude is AI for all of us. Whether you're brainstorming alone or building with a team of thousands, Claude is here to help.</p>
          <div className="flex gap-4 mt-2">
            <button className="bg-black text-white font-serene px-8 py-4 rounded-xl text-sm font-serene-medium">Try Claude</button>
            <button className="text-black font-serene px-8 py-4 rounded-xl border border-black text-sm font-serene-medium">Get api access</button>
          </div>
        </div>
        <div className="h-full col-start-7 col-span-6 m-12">
          <Image className="w-full h-full object-contain" src="/meet-claude.gif" alt="Claude hero" width={700} height={700} />
        </div>
      </section>
      <section className="px-20 flex flex-col gap-8 justify-center items-center">
        <h2 className="text-[2.5rem] font-serene font-serene-black">Claude’s capabilities</h2>
        <ul className="grid grid-cols-12 gap-8">
          <li className="flex flex-col items-center px-6 gap-4 col-span-3">
            <Image src="/advanced-reasoning.webp" alt="Advanced reasoning" width={160} height={160} />
            <h3 className="text-[1.3rem] font-serene font-serene-black text-center">Advanced reasoning</h3>
            <p className="text-center font-copernicus font-copernicus-light text-[0.9rem] ">Claude can perform complex cognitive tasks that go beyond simple pattern recognition or text generation</p>
          </li>
          <li className="flex flex-col items-center px-6 gap-4 col-span-3">
            <Image src="/vision-analysis.webp" alt="Vision analysis" width={160} height={160} />
            <h3 className="text-[1.3rem] font-serene font-serene-black text-center">Vision analysis</h3>
            <p className="text-center font-copernicus font-copernicus-light text-[0.9rem]">Transcribe and analyze almost any static image, from handwritten notes and graphs, to photographs</p>
          </li>
          <li className="flex flex-col items-center px-6 gap-4 col-span-3">
            <Image src="/code-generation.webp" alt="Code generation" width={160} height={160} />
            <h3 className="text-[1.3rem] font-serene font-serene-black text-center">Code generation</h3>
            <p className="text-center font-copernicus font-copernicus-light text-[0.9rem]">Start creating websites in HTML and CSS, turning images into structured JSON data, or debugging complex code bases</p>
          </li>
          <li className="flex flex-col items-center px-6 gap-4 col-span-3">
            <Image src="/multilingual-processing.webp" alt="Multilingual processing" width={160} height={160} />
            <h3 className="text-[1.3rem] font-serene font-serene-black text-center">Multilingual processing</h3>
            <p className="text-center font-copernicus font-copernicus-light text-[0.9rem]">Translate between various languages in real-time, practice grammar, or create multi-lingual content</p>
          </li>
        </ul>
      </section>
      <section>
        <div>
          <h3>Announcements</h3>
          <h2>Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku</h2>
          <p>Oct 22, 2024</p>
        </div>
        <div>
          <h3>Model updates</h3>
          <h2>3.5 Sonnet</h2>
          <h2>3.5 Haiku</h2>
        </div>
      </section>
      <section>
        <h2>The Claude model family</h2>
        <p>Right-sized for any task, the Claude family of models offers the best combination of speed and performance.</p>
        <ul>
          <li>
            <h3>Light & fast</h3>
            <h2>Haiku</h2>
            <p>Our fastest model that can execute lightweight actions, with industry-leading speed.</p>
          </li>
          <li>
            <h3>Hard-working</h3>
            <h2>Sonnet</h2>
            <p>Our best combination of performance and speed for efficient, high-throughput tasks.</p>
          </li>
          <li>
            <h3>Powerful</h3>
            <h2>Opus</h2>
            <p>Our highest-performing model, which can handle complex analysis, longer tasks with many steps, and higher-order math and coding tasks.</p>
          </li>
        </ul>
      </section>
    </>
  );
}
