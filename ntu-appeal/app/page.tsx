"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  NEW_ACHIEVEMENTS, 
  HISTORICAL_ACHIEVEMENTS, 
  Achievement 
} from '@/lib/data';
import { 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Globe, 
  Heart, 
  Scale, 
  Clock, 
  Sparkles,
  FileText,
  Bookmark,
  ExternalLink,
  GraduationCap
} from 'lucide-react';

// Custom Warm Editorial Image Component with robust layout mapping.
// It directly prints the precise asset path so the user can hot-swap files on GitHub without modifying layout code.
function EditorialAssetImage({ 
  src, 
  alt, 
  category 
}: { 
  src: string; 
  alt: string; 
  category: 'policy' | 'advocacy' | 'academic' | 'culture' 
}) {
  const [hasError, setHasError] = useState(false);

  const categoryMetadata = {
    policy: {
      tag: 'Policy',
      accent: 'text-stone-600 bg-stone-100',
      icon: Scale,
    },
    advocacy: {
      tag: 'Advocacy',
      accent: 'text-rose-600 bg-rose-50',
      icon: Heart,
    },
    academic: {
      tag: 'Academic',
      accent: 'text-stone-700 bg-stone-100',
      icon: BookOpen,
    },
    culture: {
      tag: 'Culture',
      accent: 'text-amber-700 bg-amber-50',
      icon: Globe,
    }
  };

  const meta = categoryMetadata[category] || categoryMetadata.policy;
  const IconComponent = meta.icon;

  return (
    <div className="relative w-full h-48 rounded-lg overflow-hidden border border-stone-200 bg-stone-50 flex flex-col justify-between p-4 group-hover:border-stone-300 transition-all duration-300">
      {/* Delicate editorial watermark grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,113,108,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,113,108,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
      
      {!hasError ? (
        <div className="flex items-center justify-center h-screen">
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02] z-10"
            onError={() => setHasError(true)}
            referrerPolicy="no-referrer"
          />
        </div>
      ) : null}

      {/* Styled Informational Layer (visible as background metadata and fallback) */}
      {/*
      <div className="relative z-0 flex flex-col justify-between h-full w-full">
        <div className="flex justify-between items-start">
          <span className={`text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded font-semibold border border-stone-200/50 ${meta.accent}`}>
            {meta.tag}
          </span>
          <IconComponent className="w-4 h-4 text-stone-400" />
        </div>

        <div className="space-y-1">
          <p className="text-xs text-stone-600 font-mono truncate bg-white/80 px-2 py-1 rounded border border-stone-200 max-w-full">
            {src}
          </p>
        </div>
      </div>
      */}
    </div>
  );
}

export default function Home() {
  const [selectedPillar, setSelectedPillar] = useState<'all' | 'policy' | 'advocacy' | 'academic' | 'culture'>('all');
  const [showHistorical, setShowHistorical] = useState(false);

  // Group historical achievements cleanly by their four focus pillars
  const historicalSubsections = [
    {
      id: 'academic',
      title: 'Academic',
      description: '',
      icon: BookOpen,
      color: 'border-stone-200 hover:border-stone-300',
      badgeColor: 'text-stone-700 bg-stone-100',
      items: HISTORICAL_ACHIEVEMENTS.filter((item) => item.category === 'academic'),
    },
    {
      id: 'policy',
      title: 'Policy',
      description: '',
      icon: Scale,
      color: 'border-stone-200 hover:border-stone-300',
      badgeColor: 'text-stone-700 bg-stone-100',
      items: HISTORICAL_ACHIEVEMENTS.filter((item) => item.category === 'policy'),
    },
    {
      id: 'advocacy',
      title: 'Advocacy',
      description: '',
      icon: Heart,
      color: 'border-stone-200 hover:border-rose-200',
      badgeColor: 'text-rose-600 bg-rose-50 border-rose-100',
      items: HISTORICAL_ACHIEVEMENTS.filter((item) => item.category === 'advocacy'),
    },
    {
      id: 'culture',
      title: 'Culture',
      description: '',
      icon: Globe,
      color: 'border-stone-200 hover:border-stone-300',
      badgeColor: 'text-amber-700 bg-amber-50',
      items: HISTORICAL_ACHIEVEMENTS.filter((item) => item.category === 'culture'),
    }
  ];

  // Filtering list for interactive headers
  const filterPillars = [
    { id: 'all', name: 'All Milestones', icon: Sparkles },
    { id: 'policy', name: 'Policy', icon: Scale },
    { id: 'advocacy', name: 'Advocacy', icon: Heart },
    { id: 'academic', name: 'Academic', icon: BookOpen },
    { id: 'culture', name: 'Culture', icon: Globe },
  ];

  // Filter the 10 distinct post-application milestones
  const filteredNewAchievements = NEW_ACHIEVEMENTS.filter((item) =>
    selectedPillar === 'all' ? true : item.category === selectedPillar
  );

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-rose-100 selection:text-rose-900 pb-24">
      
      {/* Decorative Warm Accent Gradient Blur - Muted and classy */}
      <div className="absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-200/50 via-stone-50 to-transparent pointer-events-none" />

      {/* Main Structural Layout Container */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12 relative z-10">
        
        {/* --- HERO SECTION --- */}
        <header id="appeal-header" className="bg-white border border-stone-200 rounded-xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-stone-100 pb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold tracking-widest text-stone-500 uppercase">
                NANYANG TECHNOLOGICAl UNIVERSITY (NTU)
              </span>
              <p className="text-xs text-rose-600 font-semibold uppercase tracking-wider">
                Bachelor of Computing (Hons) in Artificial Intelligence & Society (AISC) — Undergraduate Appeal
              </p>
            </div>
            <div className="text-right text-[11px] font-mono text-stone-500 bg-stone-100 border border-stone-200 px-3 py-1 rounded">
              Application No: <span className="font-bold text-stone-800">A00271476</span>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-stone-900 tracking-tight">
              Ng Kai Ming
            </h1>
            <a 
              href="https://drive.google.com/file/d/14HKICBLmvL57F4OWcuEr5JiJPBcEti3z/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-xl font-display font-medium text-stone-900 tracking-tight underline">
                https://drive.google.com/file/d/14HKICBLmvL57F4OWcuEr5JiJPBcEti3z/view?usp=sharing
              </h2>
            </a>
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed max-w-3xl font-display">
              Official appeal portfolio for admission to <span className="font-semibold text-stone-900">AI & Society</span>. Included description and proof of recent abstract acceptances, board appointments, and multinational policy work completed between <span className="text-rose-600 font-medium">March 2026 and Present</span>.
            </p>
            <embed 
              src="/assets/docs/A00271476.pdf" 
              type="application/pdf" 
              width="100%" 
              height="600px" 
            />
          </div>
        </header>

        {/* --- HUMBLE REFLECTION SUMMARIES --- */}
        <section id="reflection-summaries" className="space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <h2 className="text-xl font-display font-semibold text-stone-900 tracking-tight">
              Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Academic Infrastructure */}
            <div className="bg-white border border-stone-200 p-6 rounded-xl hover:border-stone-300 transition-colors space-y-3">
              <div className="flex items-center space-x-2 border-b border-stone-100 pb-2.5">
                <div className="p-1 rounded bg-stone-100 text-stone-600">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider">
                  Academic
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                The achievements in this category seek to establish my academic proficiency and credibility. During my A Levels, I navigated an undiagnosed disability, lacked financial resources for glasses, and served as the primary caretaker for multiple immediate relatives undergoing battles with cancer and Alzheimer&apos;s. 
              </p>
            </div>

            {/* Advocacy & Disability Access */}
            <div className="bg-white border border-stone-200 p-6 rounded-xl hover:border-stone-300 transition-colors space-y-3">
              <div className="flex items-center space-x-2 border-b border-stone-100 pb-2.5">
                <div className="p-1 rounded bg-rose-50 text-rose-600">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider">
                  Advocacy
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                My personal journey drives my commitment to equitable access, treatment and opportunity for PWDs.
              </p>
            </div>

            {/* Regional Alliances & Policy */}
            <div className="bg-white border border-stone-200 p-6 rounded-xl hover:border-stone-300 transition-colors space-y-3">
              <div className="flex items-center space-x-2 border-b border-stone-100 pb-2.5">
                <div className="p-1 rounded bg-stone-100 text-stone-600">
                  <Scale className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider">
                  Policy
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                On-the-ground projects with real-world impact.
              </p>
            </div>

            {/* Community Mobilization & Culture */}
            <div className="bg-white border border-stone-200 p-6 rounded-xl hover:border-stone-300 transition-colors space-y-3">
              <div className="flex items-center space-x-2 border-b border-stone-100 pb-2.5">
                <div className="p-1 rounded bg-amber-50 text-amber-700">
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider">
                  Culture
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                My early exposure to anthropology formed the basis of my humanistic and humanitarian approach to policy research and programme design.
              </p>
            </div>

          </div>
        </section>

        {/* --- INTERACTIVE CATEGORY SELECTOR FOR NEW EVIDENCE --- */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white border border-stone-200 p-4 rounded-xl shadow-sm">
          <div className="flex items-center space-x-2 font-mono text-xs text-stone-500 font-semibold pl-1">
            <Bookmark className="w-4 h-4 text-stone-500" />
            <span>FILTER NEW MILESTONES:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {filterPillars.map((p) => {
              const Icon = p.icon;
              const isActive = selectedPillar === p.id;
              return (
                <button
                  key={p.id}
                  id={`filter-btn-${p.id}`}
                  onClick={() => setSelectedPillar(p.id as any)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border ${
                    isActive
                      ? 'bg-rose-50 text-rose-700 border-rose-200 font-semibold'
                      : 'bg-transparent text-stone-600 border-transparent hover:border-stone-200 hover:text-stone-950'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{p.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- THE ACCELERATION TIMELINE (MARCH 2026 - PRESENT) --- */}
        <section id="new-evidence-portfolio" className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase font-bold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-rose-600" />
                March 2026 To Present (Post-Application)
              </span>
              <h2 className="text-2xl font-display font-semibold text-stone-900 tracking-tight">
                New Achievements
              </h2>
            </div>
            <div className="hidden sm:block text-xs font-mono text-rose-600 bg-rose-50 border border-rose-200 px-2.5 py-1 rounded font-semibold uppercase">
              New Evidence
            </div>
          </div>

          {filteredNewAchievements.length === 0 ? (
            <div className="bg-white border border-stone-200 rounded-xl p-12 text-center space-y-4">
              <Globe className="w-8 h-8 text-stone-300 mx-auto" />
              <div className="space-y-1">
                <h4 className="font-semibold text-stone-800">Preserved Cultural Foundations</h4>
                <p className="text-xs text-stone-500 max-w-md mx-auto leading-relaxed">
                  Ng Kai Ming&apos;s cultural foundations represent a mature, long-term dedication to Southeast Asian performance and village projects. As there are no post-March items for culture, please reset the filter to view active milestones in policy, advocacy, and ethics.
                </p>
              </div>
              <button 
                id="reset-filter-btn"
                onClick={() => setSelectedPillar('all')}
                className="text-xs font-mono font-medium text-rose-600 hover:text-rose-700 underline"
              >
                Show All Milestones
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredNewAchievements.map((item) => (
                  <motion.div
                    key={item.id}
                    id={`card-${item.id}`}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                    className="group bg-white border border-stone-200 hover:border-stone-400 hover:shadow-md transition-all duration-300 rounded-xl p-5 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Meta header, simplified */}
                      <div className="flex justify-between items-center text-[10px] font-mono text-stone-400 border-b border-stone-100 pb-2">
                        <span className="font-semibold text-rose-600 tracking-wider">
                          [RECENT ACHIEVEMENT]
                        </span>
                        <span>{item.date}</span>
                      </div>

                      {/* Header block */}
                      <div className="space-y-1">
                        <h3 className="font-display font-semibold text-stone-900 group-hover:text-rose-600 text-sm leading-snug transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs font-mono text-stone-500">
                          {item.subtitle}
                        </p>
                      </div>

                      {/* Single Dedicated Preview Image block */}
                      <EditorialAssetImage 
                        src={item.imagePath} 
                        alt={item.title} 
                        category={item.category} 
                      />

                      {/* Summary text - simplified */}
                      <p className="text-stone-600 text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* External Link Option (Unified non-overlay flow) */}
                    {item.link && (
                      <div className="pt-4 mt-4 border-t border-stone-100">
                        <a
                          id={`link-${item.id}`}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-mono text-stone-500 hover:text-rose-600 transition-colors inline-flex items-center space-x-1"
                        >
                          <span>Link</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </section>

        {/* --- SECTION 3: HISTORICAL BASELINE DISCLOSURE SECTION --- */}
        <section id="historical-disclosure" className="border-t border-stone-200 pt-10 space-y-6">
          <button
            id="historical-toggle-btn"
            onClick={() => setShowHistorical(!showHistorical)}
            className="w-full text-left p-6 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-stone-400" />
                PRE-MARCH 2026 ACHIEVEMENTS
              </span>
              <h3 className="text-lg font-display font-semibold text-stone-900 tracking-tight">
                Achievements Included in Original Submission (Added Evidence)
              </h3>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono text-stone-600 border border-stone-200 px-3 py-1.5 rounded-lg bg-white">
              <span>{showHistorical ? 'Hide' : 'Show (32 items)'}</span>
              {showHistorical ? <ChevronUp className="w-4 h-4 text-stone-500" /> : <ChevronDown className="w-4 h-4 text-stone-500" />}
            </div>
          </button>

          <AnimatePresence>
            {showHistorical && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden space-y-12"
              >

                {/* Iterate through subsections organized by pillar */}
                {historicalSubsections.map((sub) => {
                  // If standard filter is active, only show the subsection if it matches
                  if (selectedPillar !== 'all' && sub.id !== selectedPillar) {
                    return null;
                  }

                  return (
                    <div key={sub.id} id={`history-group-${sub.id}`} className="space-y-4">
                      
                      {/* Subsection Header */}
                      <div className="flex items-center space-x-2 border-b border-stone-200 pb-2">
                        <sub.icon className="w-4 h-4 text-stone-500" />
                        <h4 className="font-display font-semibold text-stone-900 text-sm tracking-wider uppercase">
                          {sub.title}
                        </h4>
                        <span className="text-xs text-stone-400 font-mono bg-stone-100 px-2 py-0.5 rounded">
                          {sub.items.length} items
                        </span>
                      </div>
                      
                      <p className="text-xs text-stone-500 leading-relaxed italic">
                        {sub.description}
                      </p>

                      {/* Subsection Cards Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sub.items.map((item) => (
                          <div
                            key={item.id}
                            id={`hist-card-${item.id}`}
                            className="bg-white border border-stone-200 rounded-xl p-5 flex flex-col justify-between hover:border-stone-300 transition-all duration-300"
                          >
                            <div className="space-y-4">
                              <div className="flex justify-between items-center text-[9px] font-mono text-stone-400 border-b border-stone-100 pb-2">
                                <span>{item.date}</span>
                              </div>

                              <div className="space-y-1">
                                <h5 className="font-display font-semibold text-stone-900 text-xs">
                                  {item.title}
                                </h5>
                                <p className="text-[11px] text-stone-400 font-mono">
                                  {item.subtitle}
                                </p>
                              </div>

                              {/* Responsive thumbnail container required for every card */}
                              <EditorialAssetImage 
                                src={item.imagePath} 
                                alt={item.title} 
                                category={item.category} 
                              />

                              <p className="text-stone-600 text-xs leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* --- HUMAN EDITORIAL FOOTER --- */}
        <footer className="border-t border-stone-200 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400 font-mono">
          <div className="space-y-1 text-center md:text-left">
            <p>Compiled for NTU 2026 Undergraduate Appeal Exercise</p>
            <p className="text-[11px] text-stone-400/85">College of Computing and Data Science (CCDS) AISC Appeal</p>
          </div>
        </footer>

      </div>
    </main>
  );
}
