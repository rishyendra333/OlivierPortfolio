import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="about" className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Alan Turing
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-6">
              Mathematician & Computer Scientist
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              Father of theoretical computer science and artificial intelligence. Known for formalizing the concepts of computation with the Turing machine and breaking the Enigma code during World War II.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-600">
            <Image 
                src="/turing.png" 
                alt="Alan Turing" 
                fill 
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}