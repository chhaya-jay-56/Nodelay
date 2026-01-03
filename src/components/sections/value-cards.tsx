import React from 'react';

const cards = [
  {
    title: 'AI Orchestration',
    subtitle: 'Workflow Design',
    description: 'Design and run reliable multi-step AI workflows across tools and data.',
  },
  {
    title: 'AI Automation',
    subtitle: 'Process Efficiency',
    description: 'Automate business processes with measurable time savings and consistent outcomes.',
  },
  {
    title: 'Custom Intelligent Systems',
    subtitle: 'Bespoke Solutions',
    description: 'Build bespoke AI-driven products that solve real problems with stability.',
  },
];

export default function ValueCards() {
  return (
    <section id="solutions" className="py-20 lg:py-[120px] px-6 sm:px-[3.5rem] lg:px-[4.5rem] xl:px-[7rem] bg-[#F2F1E9]">
      <div className="max-w-[88rem] mx-auto">
        <div className="text-center mb-12">
          <p className="font-sans text-[14px] font-semibold text-brand-olive uppercase tracking-widest mb-4">
            What we deliver
          </p>
          <h2 className="text-[32px] md:text-[48px] font-medium leading-[115%] max-w-[700px] mx-auto font-display text-[#1A1A1A]">
            Practical products. Stable delivery. Working demos.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-white border border-[#1A1A1A] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[4px_4px_0px_#1A1A1A]"
            >
              <div className="bg-[#748347] p-8 min-h-[160px] flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-2xl font-semibold leading-tight font-sans mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#CBFF00] text-[14px] font-medium font-sans uppercase tracking-tight">
                    {card.subtitle}
                  </p>
                </div>
              </div>

              <div className="p-8 flex flex-col justify-between flex-grow">
                <p className="text-[#1A1A1A] text-[16px] md:text-[18px] font-light leading-relaxed font-sans">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
