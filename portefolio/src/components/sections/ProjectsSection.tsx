import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Turing Machine",
      description: "A mathematical model of computation defining an abstract machine that manipulates symbols on a strip of tape according to a table of rules.",
      tags: ["Theory of Computation", "Mathematics"],
      link: "#"
    },
    {
      id: 2,
      title: "Enigma Code Breaker",
      description: "Development of techniques and machines to break German Enigma machine ciphers during World War II.",
      tags: ["Cryptography", "Wartime Innovation"],
      link: "#"
    },
    {
      id: 3,
      title: "Computing Machinery and Intelligence",
      description: "Research paper introducing the 'Turing Test' for evaluating machine intelligence.",
      tags: ["Artificial Intelligence", "Philosophy"],
      link: "#"
    },
    {
      id: 4,
      title: "ACE Computer Design",
      description: "Detailed design for the Automatic Computing Engine, one of the first designs for a stored-program computer.",
      tags: ["Computer Architecture", "Hardware Design"],
      link: "#"
    },
    {
      id: 5,
      title: "Morphogenesis",
      description: "Mathematical model of pattern formation in biological systems, explaining how patterns like stripes and spots occur in nature.",
      tags: ["Mathematical Biology", "Pattern Formation"],
      link: "#"
    },
    {
      id: 6,
      title: "Manchester Computer",
      description: "Contribution to the development of the Manchester Mark 1, one of the earliest electronic stored-program computers.",
      tags: ["Computer Engineering", "Hardware"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="inline-block pb-2 border-b-2 border-blue-600">My Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}