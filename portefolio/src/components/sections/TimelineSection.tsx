type TimelineItem = {
    id: number;
    year: string;
    title: string;
    organization: string;
    description: string;
    isLeft: boolean;
  };
  
  export default function TimelineSection() {
    const timelineItems: TimelineItem[] = [
      {
        id: 1,
        year: "1931-1934",
        title: "Undergraduate Studies",
        organization: "King's College, Cambridge",
        description: "Studied mathematics with distinction, graduating with first-class honors.",
        isLeft: true
      },
      {
        id: 2,
        year: "1935-1938",
        title: "PhD in Mathematics",
        organization: "Princeton University",
        description: "Doctoral work on 'Systems of Logic Based on Ordinals' under Alonzo Church.",
        isLeft: false
      },
      {
        id: 3,
        year: "1939-1945",
        title: "Cryptanalyst",
        organization: "Government Code and Cypher School, Bletchley Park",
        description: "Led the team that cracked the Enigma code, significantly contributing to Allied victory in WWII.",
        isLeft: true
      },
      {
        id: 4,
        year: "1945-1948",
        title: "Research Scientist",
        organization: "National Physical Laboratory",
        description: "Designed the Automatic Computing Engine (ACE), one of the first designs for a stored-program computer.",
        isLeft: false
      },
      {
        id: 5,
        year: "1948-1952",
        title: "Deputy Director",
        organization: "Computing Laboratory, University of Manchester",
        description: "Worked on software for the Manchester Mark 1, one of the earliest electronic computers.",
        isLeft: true
      },
      {
        id: 6,
        year: "1952-1954",
        title: "Research Fellow",
        organization: "University of Manchester",
        description: "Pioneering work in mathematical biology, focusing on morphogenesis and pattern formation.",
        isLeft: false
      }
    ];
  
    return (
      <section id="experience" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="inline-block pb-2 border-b-2 border-blue-600">My Experience</span>
          </h2>
          
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-600"></div>
            
            <div className="space-y-12">
              {timelineItems.map((item) => (
                <div key={item.id} className="relative flex items-center justify-between">
                  <div className={`w-5/12 ${item.isLeft ? '' : 'ml-auto'} ${item.isLeft ? 'text-right' : 'text-left'}`}>
                    <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md`}>
                      <h3 className="text-xl font-bold text-blue-600">{item.year}</h3>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.organization}</p>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }