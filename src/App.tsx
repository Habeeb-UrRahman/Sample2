// import React, { useState, useEffect, useRef } from 'react';
// import { Beaker, Leaf, Recycle, Award, ChevronDown, Play, Building2, FlaskRound as Flask, Lightbulb, Factory } from 'lucide-react';

// function App() {
//   const [activeSection, setActiveSection] = useState('intro');
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionsRef = useRef<(HTMLElement | null)[]>([]);

//   useEffect(() => {
//     setIsVisible(true);

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('.section-animate').forEach((section) => {
//       observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//       setActiveSection(sectionId);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 py-4 px-4">
//         <div className="max-w-6xl mx-auto flex justify-between items-center">
//           <div className="flex items-center space-x-2">
//             <Beaker className="w-6 h-6 text-green-600 animate-float" />
//             <h1 className="text-2xl font-light text-gray-800">Green Chemistry</h1>
//           </div>
//           <nav className="hidden md:flex space-x-8">
//             {['intro', 'principles', 'industry', 'benefits', 'presentation'].map((section) => (
//               <button
//                 key={section}
//                 onClick={() => scrollToSection(section)}
//                 className={`nav-link text-gray-600 hover:text-green-600 transition-colors capitalize ${
//                   activeSection === section ? 'text-green-600' : ''
//                 }`}
//               >
//                 {section}
//               </button>
//             ))}
//           </nav>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-6xl mx-auto px-4 pt-24">
//         {/* Introduction Section */}
//         <section id="intro" className="min-h-screen flex items-center section-animate mb-16">
//           <div className="w-full grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-6xl font-light text-gray-800 mb-8">
//                 The Future of
//                 <span className="block text-green-600 font-normal mt-2">Sustainable Chemistry</span>
//               </h2>
//               <div className="prose prose-lg max-w-2xl">
//                 <p className="text-gray-600 leading-relaxed mb-4">
//                   Green Chemistry represents a revolutionary approach to environmental protection through the design of chemical 
//                   processes and products that reduce or eliminate the use and generation of hazardous substances.
//                 </p>
//                 <p className="text-gray-600 leading-relaxed">
//                   Developed in the 1990s, this innovative field has become increasingly crucial in addressing global 
//                   environmental challenges, climate change, and sustainable development goals. Through careful molecular 
//                   design and efficient processes, green chemistry is transforming how we approach chemical manufacturing, 
//                   research, and development.
//                 </p>
//               </div>
//             </div>
//             <div className="image-card rounded-lg overflow-hidden shadow-lg">
//               <img 
//                 src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
//                 alt="Green Chemistry Lab"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </section>

//         {/* Principles Section */}
//         <section id="principles" className="min-h-screen py-16 section-animate">
//           <h2 className="text-4xl font-light text-gray-800 mb-12">
//             Core Principles
//             <span className="block text-sm text-green-600 mt-2">The foundations of green chemistry</span>
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               {
//                 title: "Prevention",
//                 desc: "Preventing waste is better than treating or cleaning up waste after it's created"
//               },
//               {
//                 title: "Atom Economy",
//                 desc: "Synthetic methods should maximize the incorporation of all materials used in the process into the final product"
//               },
//               {
//                 title: "Less Hazardous Synthesis",
//                 desc: "Design synthetic methods to use and generate substances with little or no toxicity to human health and the environment"
//               },
//               {
//                 title: "Safer Design",
//                 desc: "Chemical products should be designed to preserve efficacy of function while reducing toxicity"
//               },
//               {
//                 title: "Safer Solvents",
//                 desc: "The use of auxiliary substances should be made unnecessary wherever possible and innocuous when used"
//               },
//               {
//                 title: "Energy Efficiency",
//                 desc: "Energy requirements of chemical processes should be recognized for their environmental and economic impacts"
//               },
//               {
//                 title: "Renewable Feedstocks",
//                 desc: "Raw materials or feedstock should be renewable rather than depleting whenever technically and economically practicable"
//               },
//               {
//                 title: "Reduce Derivatives",
//                 desc: "Unnecessary derivatization should be minimized or avoided if possible"
//               },
//               {
//                 title: "Catalysis",
//                 desc: "Catalytic reagents are superior to stoichiometric reagents"
//               },
//               {
//                 title: "Degradability",
//                 desc: "Chemical products should be designed so that they break down into innocuous degradation products"
//               },
//               {
//                 title: "Real-time Analysis",
//                 desc: "Analytical methodologies need to be developed to allow for real-time monitoring and control"
//               },
//               {
//                 title: "Accident Prevention",
//                 desc: "Substances and their forms used in chemical processes should be chosen to minimize the potential for accidents"
//               }
//             ].map((principle, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-50 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:bg-green-50"
//                 style={{ transitionDelay: `${index * 50}ms` }}
//               >
//                 <span className="text-green-600 text-sm font-medium block mb-2">0{index + 1}</span>
//                 <h3 className="text-xl text-gray-800 font-medium mb-2">{principle.title}</h3>
//                 <p className="text-gray-600 text-sm">{principle.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Industry Use Cases Section */}
//         <section id="industry" className="min-h-screen py-16 section-animate">
//           <h2 className="text-4xl font-light text-gray-800 mb-12">
//             Industry Applications
//             <span className="block text-sm text-green-600 mt-2">Real-world implementation</span>
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="image-card rounded-lg overflow-hidden shadow-lg">
//               <img 
//                 src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
//                 alt="Pharmaceutical Industry"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6 bg-white">
//                 <h3 className="text-xl font-medium text-gray-800 mb-2">Pharmaceutical Industry</h3>
//                 <p className="text-gray-600 mb-4">Development of greener drug synthesis processes and sustainable manufacturing practices.</p>
//                 <ul className="text-gray-600 text-sm list-disc list-inside">
//                   <li>Reduced solvent usage in drug manufacturing</li>
//                   <li>Implementation of continuous flow chemistry</li>
//                   <li>Development of biocatalytic processes</li>
//                 </ul>
//               </div>
//             </div>
//             <div className="image-card rounded-lg overflow-hidden shadow-lg">
//               <img 
//                 src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
//                 alt="Renewable Energy"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6 bg-white">
//                 <h3 className="text-xl font-medium text-gray-800 mb-2">Renewable Energy</h3>
//                 <p className="text-gray-600 mb-4">Production of solar cells and energy storage solutions using sustainable methods.</p>
//                 <ul className="text-gray-600 text-sm list-disc list-inside">
//                   <li>Advanced battery technologies</li>
//                   <li>Perovskite solar cell development</li>
//                   <li>Green hydrogen production methods</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mt-12">
//             <div className="stat-card bg-white p-8 rounded-lg shadow-sm">
//               <Factory className="w-8 h-8 text-green-600 mb-4" />
//               <h4 className="text-2xl font-bold text-gray-800 mb-2">70%</h4>
//               <p className="text-gray-600">Reduction in waste production through green chemistry practices</p>
//             </div>
//             <div className="stat-card bg-white p-8 rounded-lg shadow-sm">
//               <Lightbulb className="w-8 h-8 text-green-600 mb-4" />
//               <h4 className="text-2xl font-bold text-gray-800 mb-2">40%</h4>
//               <p className="text-gray-600">Energy efficiency improvement in chemical processes</p>
//             </div>
//             <div className="stat-card bg-white p-8 rounded-lg shadow-sm">
//               <Flask className="w-8 h-8 text-green-600 mb-4" />
//               <h4 className="text-2xl font-bold text-gray-800 mb-2">85%</h4>
//               <p className="text-gray-600">Implementation of safer chemical processes in modern industries</p>
//             </div>
//           </div>
//         </section>

//         {/* Benefits Section */}
//         <section id="benefits" className="min-h-screen py-16 section-animate">
//           <h2 className="text-4xl font-light text-gray-800 mb-12">
//             Impact & Benefits
//             <span className="block text-sm text-green-600 mt-2">Why green chemistry matters</span>
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="p-8 bg-gray-50 rounded-lg hover:bg-green-50 transition-all duration-300 hover:-translate-y-2">
//               <Leaf className="w-8 h-8 text-green-600 mb-4" />
//               <h3 className="text-xl font-medium text-gray-800 mb-4">Environmental Impact</h3>
//               <ul className="text-gray-600 space-y-2">
//                 <li>• Reduced carbon footprint</li>
//                 <li>• Minimized waste generation</li>
//                 <li>• Conservation of natural resources</li>
//                 <li>• Improved air and water quality</li>
//               </ul>
//             </div>
//             <div className="p-8 bg-gray-50 rounded-lg hover:bg-green-50 transition-all duration-300 hover:-translate-y-2">
//               <Building2 className="w-8 h-8 text-green-600 mb-4" />
//               <h3 className="text-xl font-medium text-gray-800 mb-4">Economic Benefits</h3>
//               <ul className="text-gray-600 space-y-2">
//                 <li>• Reduced production costs</li>
//                 <li>• Lower waste disposal expenses</li>
//                 <li>• Improved resource efficiency</li>
//                 <li>• Enhanced market competitiveness</li>
//               </ul>
//             </div>
//             <div className="p-8 bg-gray-50 rounded-lg hover:bg-green-50 transition-all duration-300 hover:-translate-y-2">
//               <Award className="w-8 h-8 text-green-600 mb-4" />
//               <h3 className="text-xl font-medium text-gray-800 mb-4">Safety Improvements</h3>
//               <ul className="text-gray-600 space-y-2">
//                 <li>• Reduced workplace hazards</li>
//                 <li>• Safer chemical processes</li>
//                 <li>• Improved public health</li>
//                 <li>• Enhanced product safety</li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* Presentation Section */}
//         <section id="presentation" className="min-h-screen py-16 section-animate mb-16">
//           <h2 className="text-4xl font-light text-gray-800 mb-12">
//             Presentation
//             <span className="block text-sm text-green-600 mt-2">Watch and learn</span>
//           </h2>
//           <div className="bg-gray-50 rounded-lg p-8">
//             <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center mb-6 hover:bg-gray-200 transition-all duration-300 group cursor-pointer">
//               <div className="text-center p-12 transform transition-transform group-hover:scale-110">
//                 <Play className="w-16 h-16 text-green-600 mx-auto mb-4" />
//                 <p className="text-gray-600">Video presentation coming soon</p>
//               </div>
//             </div>
//             <div className="text-center">
//               <p className="text-gray-600">Presenter: <span className="text-gray-800 font-medium">Shabul Hussain</span></p>
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="py-8 border-t border-gray-100">
//           <p className="text-center text-gray-500">
//             Developed by <span className="text-gray-800 font-medium">Shabul Hussian - WIX</span>
//           </p>
//         </footer>
//       </main>
//     </div>
//   );
// }

// export default App;






import React, { useState, useEffect, useRef } from 'react';
import { Beaker, Leaf, Recycle, Award, ChevronDown, Play, Building2, FlaskRound as Flask, Lightbulb, Factory } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isVisible, setIsVisible] = useState(false);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section-animate').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 py-4 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Beaker className="w-6 h-6 text-green-600 animate-float" />
            <h1 className="text-2xl font-light text-gray-800">Green Chemistry</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            {['intro', 'principles', 'industry', 'benefits', 'presentation'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link text-gray-600 hover:text-green-600 transition-colors capitalize ${
                  activeSection === section ? 'text-green-600' : ''
                }`}
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pt-24">
        {/* Introduction Section */}
        <section id="intro" className="min-h-screen flex items-center section-animate mb-16">
          <div className="w-full grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-6xl font-light text-gray-800 mb-8">
                The Future of
                <span className="block text-green-600 font-normal mt-2">Sustainable Chemistry</span>
              </h2>
              <div className="prose prose-lg max-w-2xl">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Green Chemistry represents a revolutionary approach to environmental protection through the design of chemical 
                  processes and products that reduce or eliminate the use and generation of hazardous substances.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Developed in the 1990s, this innovative field has become increasingly crucial in addressing global 
                  environmental challenges, climate change, and sustainable development goals. Through careful molecular 
                  design and efficient processes, green chemistry is transforming how we approach chemical manufacturing, 
                  research, and development.
                </p>
              </div>
            </div>
            <div className="image-card rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Green Chemistry Lab"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section id="principles" className="min-h-screen py-16 section-animate">
          <h2 className="text-4xl font-light text-gray-800 mb-12">
            Core Principles
            <span className="block text-sm text-green-600 mt-2">The foundations of green chemistry</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Prevention",
                desc: "Preventing waste is better than treating or cleaning up waste after it's created"
              },
              {
                title: "Atom Economy",
                desc: "Synthetic methods should maximize the incorporation of all materials used in the process into the final product"
              },
              {
                title: "Less Hazardous Synthesis",
                desc: "Design synthetic methods to use and generate substances with little or no toxicity to human health and the environment"
              },
              {
                title: "Safer Design",
                desc: "Chemical products should be designed to preserve efficacy of function while reducing toxicity"
              },
              {
                title: "Safer Solvents",
                desc: "The use of auxiliary substances should be made unnecessary wherever possible and innocuous when used"
              },
              {
                title: "Energy Efficiency",
                desc: "Energy requirements of chemical processes should be recognized for their environmental and economic impacts"
              },
              {
                title: "Renewable Feedstocks",
                desc: "Raw materials or feedstock should be renewable rather than depleting whenever technically and economically practicable"
              },
              {
                title: "Reduce Derivatives",
                desc: "Unnecessary derivatization should be minimized or avoided if possible"
              },
              {
                title: "Catalysis",
                desc: "Catalytic reagents are superior to stoichiometric reagents"
              },
              {
                title: "Degradability",
                desc: "Chemical products should be designed so that they break down into innocuous degradation products"
              },
              {
                title: "Real-time Analysis",
                desc: "Analytical methodologies need to be developed to allow for real-time monitoring and control"
              },
              {
                title: "Accident Prevention",
                desc: "Substances and their forms used in chemical processes should be chosen to minimize the potential for accidents"
              }
            ].map((principle, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:bg-green-50"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="text-green-600 text-sm font-medium block mb-2">0{index + 1}</span>
                <h3 className="text-xl text-gray-800 font-medium mb-2">{principle.title}</h3>
                <p className="text-gray-600 text-sm">{principle.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Use Cases Section */}
        <section id="industry" className="min-h-screen py-16 section-animate">
          <h2 className="text-4xl font-light text-gray-800 mb-12">
            Industry Applications
            <span className="block text-sm text-green-600 mt-2">Real-world implementation</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="image-card rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Pharmaceutical Industry"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Pharmaceutical Industry</h3>
                <p className="text-gray-600 mb-4">Development of greener drug synthesis processes and sustainable manufacturing practices.</p>
                <ul className="text-gray-600 text-sm list-disc list-inside">
                  <li>Reduced solvent usage in drug manufacturing</li>
                  <li>Implementation of continuous flow chemistry</li>
                  <li>Development of biocatalytic processes</li>
                </ul>
              </div>
            </div>
            <div className="image-card rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Renewable Energy"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Renewable Energy</h3>
                <p className="text-gray-600 mb-4">Production of solar cells and energy storage solutions using sustainable methods.</p>
                <ul className="text-gray-600 text-sm list-disc list-inside">
                  <li>Advanced battery technologies</li>
                  <li>Perovskite solar cell development</li>
                  <li>Green hydrogen production methods</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="stat-card bg-white p-8 rounded-lg shadow-sm">
              <Factory className="w-8 h-8 text-green-600 mb-4" />
              <h4 className="text-2xl font-bold text-gray-800 mb-2">70%</h4>
              <p className="text-gray-600">Reduction in waste production through green chemistry practices</p>
            </div>
            <div className="stat-card bg-white p-8 rounded-lg shadow-sm">
              <Lightbulb className="w-8 h-8 text-green-600 mb-4" />
              <h4 className="text-2xl font-bold text-gray-800 mb-2">40%</h4>
              <p className="text-gray-600">Energy efficiency improvement in chemical processes</p>
            </div>
            <div className="stat-card bg-white p-8 rounded-lg shadow-sm">
              <Flask className="w-8 h-8 text-green-600 mb-4" />
              <h4 className="text-2xl font-bold text-gray-800 mb-2">85%</h4>
              <p className="text-gray-600">Implementation of safer chemical processes in modern industries</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="min-h-screen py-16 section-animate">
          <h2 className="text-4xl font-light text-gray-800 mb-12">
            Impact & Benefits
            <span className="block text-sm text-green-600 mt-2">Why green chemistry matters</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-lg hover:bg-green-50 transition-all duration-300 hover:-translate-y-2">
              <Leaf className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-medium text-gray-800 mb-4">Environmental Impact</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Reduced carbon footprint</li>
                <li>• Minimized waste generation</li>
                <li>• Conservation of natural resources</li>
                <li>• Improved air and water quality</li>
              </ul>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg hover:bg-green-50 transition-all duration-300 hover:-translate-y-2">
              <Building2 className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-medium text-gray-800 mb-4">Economic Benefits</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Reduced production costs</li>
                <li>• Lower waste disposal expenses</li>
                <li>• Improved resource efficiency</li>
                <li>• Enhanced market competitiveness</li>
              </ul>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg hover:bg-green-50 transition-all duration-300 hover:-translate-y-2">
              <Award className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-medium text-gray-800 mb-4">Safety Improvements</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Reduced workplace hazards</li>
                <li>• Safer chemical processes</li>
                <li>• Improved public health</li>
                <li>• Enhanced product safety</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Presentation Section
        <section id="presentation" className="min-h-screen py-16 section-animate mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-12">
            Presentation
            <span className="block text-sm text-green-600 mt-2">Watch and learn</span>
          </h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center mb-6 hover:bg-gray-200 transition-all duration-300 group cursor-pointer">
              <div className="text-center p-12 transform transition-transform group-hover:scale-110">
                <Play className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <p className="text-gray-600">Video presentation coming soon</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-600">Presenter: <span className="text-gray-800 font-medium">Shabul Hussain</span></p>
            </div>
          </div>
        </section> */}

          {/* Presentation Section */}
          <section id="presentation" className="min-h-screen py-16 section-animate mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-12">
              Presentation
              <span className="block text-sm text-green-600 mt-2">Watch and learn</span>
            </h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden mb-6">
                <video controls className="w-full h-full rounded-lg">
                  <source src="/path-to-your-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="text-center">
                <p className="text-gray-600">Presenter: <span className="text-gray-800 font-medium">Shabul Hussain</span></p>
              </div>
            </div>
          </section>


        {/* Footer */}
        <footer className="py-8 border-t border-gray-100">
          <p className="text-center text-gray-500">
            Developed by <span className="text-gray-800 font-medium">Shabul Hussian - WIX</span>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
