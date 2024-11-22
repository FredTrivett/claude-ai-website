import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-2 gap-4 px-44 items-center h-screen">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-[600] line-height-[110%] font-copernicus">Meet Claude</h1>
          <p className="text-2xl font-normal line-height-[140%] leading-[0.1em]">Claude is AI for all of us. Whether you're brainstorming alone or building with a team of thousands, Claude is here to help.</p>
          <div className="flex gap-4 mt-2">
            <button className="bg-black text-white px-8 py-4 rounded-xl text-lg">Try Claude</button>
            <button className="text-black px-4 py-2 rounded-xl border border-black text-lg">Get api access</button>
          </div>
        </div>
        <div className="h-full">
          <Image className="w-full h-full object-contain" src="/meet-claude.gif" alt="Claude hero" width={700} height={700} />
        </div>
      </section>
      <section>
        <h2>Claude’s capabilities</h2>
        <ul className="grid grid-cols-4 gap-4">
          <li className="flex flex-col items-center gap-4">
            <Image src="/advanced-reasoning.webp" alt="Advanced reasoning" width={100} height={100} />
            <h3>Advanced reasoning</h3>
            <p className="text-center">Claude can perform complex cognitive tasks that go beyond simple pattern recognition or text generation</p>
          </li>
          <li className="flex flex-col items-center gap-4">
            <Image src="/vision-analysis.webp" alt="Vision analysis" width={100} height={100} />
            <h3>Vision analysis</h3>
            <p className="text-center">Transcribe and analyze almost any static image, from handwritten notes and graphs, to photographs</p>
          </li>
          <li className="flex flex-col items-center gap-4">
            <Image src="/code-generation.webp" alt="Code generation" width={100} height={100} />
            <h3>Code generation</h3>
            <p className="text-center">Start creating websites in HTML and CSS, turning images into structured JSON data, or debugging complex code bases</p>
          </li>
          <li className="flex flex-col items-center gap-4">
            <Image src="/multilingual-processing.webp" alt="Multilingual processing" width={100} height={100} />
            <h3>Multilingual processing</h3>
            <p className="text-center">Translate between various languages in real-time, practice grammar, or create multi-lingual content</p>
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
