import React from 'react';
import { Workflow, Zap, Shield, Rocket, Wrench, Eye } from 'lucide-react';

const features = [
  {
    icon: Workflow,
    title: "Orchestrates your AI workflows",
    description: "Connect models, data, and tools into a reliable pipeline that runs end-to-end."
  },
  {
    icon: Zap,
    title: "Minimal delay delivery",
    description: "Fast prototypes and demos so you see real capability early."
  },
  {
    icon: Shield,
    title: "Built for stability",
    description: "Quality-first engineering: predictable behavior, clean UX, and maintainable systems."
  },
  {
    icon: Rocket,
    title: "Automation that actually ships",
    description: "From idea to deployment with clear milestones and working outputs."
  },
  {
    icon: Wrench,
    title: "Tools + custom systems",
    description: "Use ready tools where possible, and build custom intelligent systems where needed."
  },
  {
    icon: Eye,
    title: "Demo-first trust",
    description: "We show working demonstrations to build confidence before scale."
  }
];

export default function FeatureBullets() {
  return (
    <section className="bg-[#F2F1E9] py-20 lg:py-28 px-6 sm:px-14 lg:px-[4.5rem] xl:px-[7rem]">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#1A1A1A] p-8 rounded-[12px] hover:shadow-[4px_4px_0px_#1A1A1A] transition-shadow duration-200"
            >
              <div className="w-12 h-12 bg-brand-lime border border-[#1A1A1A] rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-[#1A1A1A]" />
              </div>
              <h3 className="font-display text-[20px] font-semibold text-[#1A1A1A] mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="font-sans font-light text-[16px] text-[#4B5563] leading-[1.6]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
