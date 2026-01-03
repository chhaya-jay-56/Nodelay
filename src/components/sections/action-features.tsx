import React from 'react';
import { Cog, FileText, MessageSquare, BarChart3, GraduationCap, Puzzle } from 'lucide-react';

const useCases = [
  {
    icon: Cog,
    title: "Automate operations",
    description: "Turn repetitive tasks into reliable AI-assisted workflows."
  },
  {
    icon: FileText,
    title: "Document intelligence",
    description: "Extract, summarize, classify, and route documents into your systems."
  },
  {
    icon: MessageSquare,
    title: "Support & internal copilots",
    description: "Create assistants that answer questions and draft responses using your org context."
  },
  {
    icon: BarChart3,
    title: "Analytics & decision tools",
    description: "Build dashboards and analysis tools that convert data into decisions."
  },
  {
    icon: GraduationCap,
    title: "Education-focused tools",
    description: "Create smart assistants and scoring tools for learners and institutes."
  },
  {
    icon: Puzzle,
    title: "Custom intelligent systems",
    description: "When templates don't fit, we build tailored solutions that match your exact needs."
  }
];

export default function NoDelayInAction() {
  return (
    <section className="bg-[#F2F1E9] py-24 sm:py-32">
      <div className="container mx-auto px-6 sm:px-[3.5rem] lg:px-[4.5rem] xl:px-[7rem] max-w-[88rem]">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-medium font-display text-[#1A1A1A] mb-4">
            NoDelay in action
          </h2>
          <p className="text-lg lg:text-xl font-light font-sans text-[#748347]">
            Helping you automate, analyze, and build intelligent systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#1A1A1A] rounded-[16px] p-8 hover:shadow-[4px_4px_0px_#1A1A1A] transition-all duration-200 group"
            >
              <div className="w-14 h-14 bg-brand-olive border border-[#1A1A1A] rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-lime transition-colors">
                <useCase.icon className="w-7 h-7 text-white group-hover:text-brand-dark transition-colors" />
              </div>
              <h3 className="font-display text-[22px] font-semibold text-[#1A1A1A] mb-3 leading-tight">
                {useCase.title}
              </h3>
              <p className="font-sans font-light text-[16px] text-[#4B5563] leading-[1.6]">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
