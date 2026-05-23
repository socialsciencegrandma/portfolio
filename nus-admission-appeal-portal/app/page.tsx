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
  Award, 
  BookOpen, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  ExternalLink, 
  CheckCircle, 
  Clock, 
  Filter, 
  Scale, 
  Globe, 
  Heart, 
  X,
  Database,
  Briefcase,
  Users
} from 'lucide-react';

// Custom Safe Image component that handles missing image fallbacks gracefully
function SafeAchievementImage({ 
  src, 
  alt, 
  category 
}: { 
  src: string; 
  alt: string; 
  category: 'policy' | 'advocacy' | 'academic' | 'culture' 
}) {
  const [hasError, setHasError] = useState(false);

  // Categorize colors
  const categoryStyles = {
    policy: {
      color: 'text-sky-400',
      bg: 'from-slate-900 via-sky-950/20 to-slate-900',
      border: 'border-sky-500/20',
      tag: 'Policy & Gov'
    },
    advocacy: {
      color: 'text-pink-400',
      bg: 'from-slate-900 via-pink-950/20 to-slate-900',
      border: 'border-pink-500/20',
      tag: 'Advocacy & Disability'
    },
    academic: {
      color: 'text-emerald-400',
      bg: 'from-slate-900 via-emerald-950/20 to-slate-900',
      border: 'border-emerald-500/20',
      tag: 'Academic & AI'
    },
    culture: {
      color: 'text-amber-400',
      bg: 'from-slate-900 via-amber-950/20 to-slate-900',
      border: 'border-amber-500/20',
      tag: 'Southeastern Culture'
    }
  };

  const style = categoryStyles[category] || categoryStyles.policy;

  return (
    <div className={`relative w-full h-48 rounded-lg overflow-hidden border ${style.border} bg-slate-950 flex items-center justify-center`}>
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(244,114,182,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,114,182,0.03)_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className={`absolute inset-0 bg-gradient-to-tr ${style.bg} opacity-80`} />

      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105 z-10"
          onError={() => setHasError(true)}
          referrerPolicy="no-referrer"
        />
      ) : null}

      {/* Structured Minimalistic Fallback - rendered with extreme aesthetic precision */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 z-0">
        <div className="flex justify-between items-start">
          <span className="text-[10px] uppercase tracking-widest font-mono text-pink-400/65 bg-pink-950/30 px-2 py-1 rounded border border-pink-500/10">
            {style.tag}
          </span>
          <Database className="w-4 h-4 text-sky-400/40" />
        </div>
        
        <div className="space-y-1">
          <p className="text-xs text-pink-300/80 font-mono truncate max-w-full">
            {src.split('/').pop()}
          </p>
          <div className="flex items-center space-x-1.5">
            <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-wider text-sky-400 uppercase font-semibold">
              Ready for Swapping
            </span>
          </div>
        </div>

        {/* Decorative Grid and Graphic */}
        <div className="absolute right-3 bottom-3 w-12 h-12 border border-dashed border-pink-500/15 rounded-full flex items-center justify-center rotate-45">
          <div className="w-8 h-8 rounded-full border border-sky-400/10 flex items-center justify-center">
            {category === 'policy' && <Scale className="w-4 h-4 text-sky-400/30" />}
            {category === 'advocacy' && <Heart className="w-4 h-4 text-pink-400/30" />}
            {category === 'academic' && <BookOpen className="w-4 h-4 text-emerald-400/30" />}
            {category === 'culture' && <Globe className="w-4 h-4 text-amber-400/30" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  // Page states
  const [selectedPillar, setSelectedPillar] = useState<'all' | 'policy' | 'advocacy' | 'academic' | 'culture'>('all');
  const [showHistorical, setShowHistorical] = useState(false);
  const [activeModalItem, setActiveModalItem] = useState<Achievement | null>(null);

  // Pillars list
  const pillars = [
    { id: 'all', name: 'All Milestones', icon: Sparkles },
    { id: 'policy', name: 'Policy & Governance', icon: Scale },
    { id: 'advocacy', name: 'Advocacy & Disability', icon: Heart },
    { id: 'academic', name: 'Academic & AI', icon: BookOpen },
    { id: 'culture', name: 'Culture & SEA Arts', icon: Globe },
  ];

  // Filters for New Achievements
  const filteredNewAchievements = NEW_ACHIEVEMENTS.filter(item => 
    selectedPillar === 'all' ? true : item.category === selectedPillar
  );

  // Filter for Historical Achievements
  const filteredOldAchievements = HISTORICAL_ACHIEVEMENTS.filter(item =>
    selectedPillar === 'all' ? true : item.category === selectedPillar
  );

  const handleEvidenceClick = (item: Achievement) => {
    setActiveModalItem(item);
  };

  const closeModal = () => {
    setActiveModalItem(null);
  };

  return (
    <main className="min-h-screen relative pb-24 overflow-hidden bg-slate-950 font-sans selection:bg-pink-500 selection:text-white">
      {/* Editorial Decorative Grid Backdrops */}
      <div className="absolute inset-x-0 top-0 h-[45rem] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-950/20 via-pink-950/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(244,114,182,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,114,182,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 relative z-10 space-y-12">
        
        {/* --- HERO HEADER --- */}
        <section id="hero-panel" className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-sky-500/20 rounded-2xl blur-xl opacity-75 transition duration-1000 group-hover:opacity-100" />
          <div className="relative bg-slate-900 border border-pink-500/20 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl glow-pink">
            
            {/* Top Badge Action */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-pink-500/10 pb-6 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-sky-500 animate-pulse" />
                <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-semibold">
                  EXTERNAL VERIFICATION NODE // CASE LEDGER
                </span>
              </div>
              <div className="bg-pink-950/40 border border-pink-500/20 rounded-full px-4 py-1 text-[11px] font-mono text-pink-300/90 tracking-wider">
                APPEAL ID: <span className="text-sky-400 font-bold">NUS-CHS-2026-NKM</span>
              </div>
            </div>

            {/* Profile Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-pink-400/80 font-bold bg-pink-950/30 px-3 py-1 rounded inline-block">
                  Candidate Case Portfolio
                </span>
                
                <h1 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-white space-x-2">
                  <span className="text-white">Ng Kai Ming</span>
                  <span className="text-pink-300 font-normal text-3xl font-sans opacity-95">(黄启明)</span>
                </h1>

                <p className="text-pink-100/90 text-md sm:text-lg leading-relaxed max-w-3xl">
                  Applying for <span className="text-sky-400 font-semibold underline decoration-sky-400/30 underline-offset-4">College of Humanities and Sciences (CHS) - Southeast Asian Studies</span> at the <span className="text-white font-medium">National University of Singapore (NUS)</span>. 
                </p>

                <p className="text-pink-200/60 text-sm leading-relaxed max-w-2xl">
                  This custom verification portal serves as the primary repository of <span className="text-sky-400 font-semibold">NEW academic and advocacy acceleration milestones</span> achieved post-submission (March 2026 to Present), fulfilling the admissions committee&apos;s strict criteria for reconsideration.
                </p>
              </div>

              {/* Administrative Stats Block */}
              <div className="lg:col-span-4 bg-slate-950/60 border border-pink-500/10 rounded-xl p-5 space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-sky-400 border-b border-pink-500/10 pb-2 flex items-center justify-between">
                  <span>METRIC SUMMARY</span>
                  <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono text-pink-400/70">POST-ARR EXPANSION</p>
                    <p className="text-2xl font-mono text-white font-bold text-sky-400">9 <span className="text-xs text-pink-300 font-normal">New</span></p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono text-pink-400/70">HISTORIC SUB BASE</p>
                    <p className="text-2xl font-mono text-white">32 <span className="text-xs text-pink-300/50 font-normal">Docs</span></p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono text-pink-400/70">CASE STATUS</p>
                    <p className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20 inline-block font-semibold">
                      VERIFIED EVID
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono text-pink-400/70">PILLARS ACTIVE</p>
                    <p className="text-2xl font-mono text-white">4 / 4</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Pillar Filter Controller */}
        <div className="relative z-20 flex flex-wrap gap-2.5 items-center justify-between bg-slate-900 border border-pink-500/10 p-3 rounded-xl shadow-lg">
          <div className="flex items-center space-x-2.5 text-xs text-pink-400 font-mono pl-2">
            <Filter className="w-4 h-4" />
            <span>FILTER DOSSIER BY CORE PILLAR:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = selectedPillar === pillar.id;
              return (
                <button
                  key={pillar.id}
                  id={`filter-btn-${pillar.id}`}
                  onClick={() => setSelectedPillar(pillar.id as any)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-300 border ${
                    isActive
                      ? 'bg-sky-500/10 text-sky-400 border-sky-400/40 shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                      : 'bg-transparent text-pink-300/75 border-transparent hover:border-pink-500/15 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{pillar.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- SECTION 2: THE ACCELERATION TIMELINE (MARCH 2026 - PRESENT) --- */}
        <section id="acceleration-timeline" className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-sky-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
                  Primary 60% Focus Viewport
                </span>
              </div>
              <h2 className="text-2xl font-display font-semibold text-white tracking-tight flex items-center space-x-3">
                <span>The Acceleration Portfolio</span>
                <span className="text-xs font-normal text-pink-400 bg-pink-950/40 px-2 py-0.5 rounded border border-pink-500/20 font-mono">
                  March 2026 - Present
                </span>
              </h2>
              <p className="text-xs text-pink-300/80 max-w-xl">
                Critical new certifications, board elections, and experimental research completed after the March general cycle.
              </p>
            </div>

            <div className="flex items-center space-x-2 bg-sky-950/20 border border-sky-500/20 p-2.5 rounded-lg">
              <span className="inline-flex w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping" />
              <span className="text-[11px] font-mono text-sky-300 font-bold uppercase tracking-wider">
                [NEW EVIDENCE CLASSIFIED]
              </span>
            </div>
          </div>

          {filteredNewAchievements.length === 0 ? (
            <div className="bg-slate-900 border border-pink-500/10 rounded-xl p-12 text-center space-y-4">
              <Globe className="w-10 h-10 text-pink-400/40 mx-auto" />
              <div className="space-y-1">
                <h4 className="font-semibold text-white">Preserved Cultural Foundations</h4>
                <p className="text-xs text-pink-300/70 max-w-md mx-auto leading-relaxed">
                  There are no post-March 2026 entries for Culture. Culturally, Ng Kai Ming&apos;s baseline assets represent a mature engagement with Southeast Asian traditional arts, allowing present acceleration to focus exclusively on socio-economic policy applications.
                </p>
              </div>
              <button 
                id="reset-filter-btn"
                onClick={() => setSelectedPillar('all')}
                className="text-xs font-mono text-sky-400 hover:text-sky-300 underline"
              >
                Reset Filter to View All
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredNewAchievements.map((item, index) => (
                  <motion.div
                    key={item.id}
                    id={`card-${item.id}`}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="relative bg-slate-900 border border-sky-500/20 hover:border-sky-400/40 rounded-xl overflow-hidden shadow-lg hover:shadow-sky-500/5 transition-all duration-300 flex flex-col justify-between glow-pink"
                  >
                    {/* Top Accent Strip */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sky-400 to-sky-600" />
                    
                    {/* Inner Content */}
                    <div className="p-5 space-y-4 flex-grow">
                      
                      {/* Badge Row */}
                      <div className="flex items-center justify-between gap-2 border-b border-pink-500/10 pb-3">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/30">
                          [NEW EVIDENCE]
                        </span>
                        <span className="text-[10px] font-mono text-pink-300/70">
                          {item.date}
                        </span>
                      </div>

                      {/* Title & Sub */}
                      <div className="space-y-1">
                        <h3 className="font-display font-semibold text-white text-md leading-snug group-hover:text-sky-300 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-pink-400 text-xs font-mono leading-tight">
                          {item.subtitle}
                        </p>
                      </div>

                      {/* Image Block - exactly one dedicated container */}
                      <SafeAchievementImage 
                        src={item.imagePath} 
                        alt={item.title} 
                        category={item.category} 
                      />

                      {/* Description Text */}
                      <p className="text-pink-200/70 text-xs leading-relaxed line-clamp-4">
                        {item.description}
                      </p>

                    </div>

                    {/* Footer Button Block */}
                    <div className="p-5 pt-0 mt-auto border-t border-pink-500/5 bg-slate-900/40">
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-[10px] font-mono text-pink-400/70">
                          ID: {item.dossierId}
                        </span>
                        
                        <button
                          id={`verify-btn-${item.id}`}
                          onClick={() => handleEvidenceClick(item)}
                          className="flex items-center space-x-1.5 bg-sky-500 hover:bg-sky-400 text-slate-950 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20 active:scale-95"
                        >
                          <span>Verify Evidence</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </section>


        {/* --- SECTION 3: HISTORICAL BASELINE DISCLOSURE SECTION --- */}
        <section id="historical-disclosure" className="border-t border-pink-500/10 pt-10 space-y-6">
          <div className="relative group p-1 rounded-xl">
            <button
              id="historical-toggle-btn"
              onClick={() => setShowHistorical(!showHistorical)}
              className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between text-left p-5 rounded-xl border border-pink-500/20 bg-slate-900/60 hover:bg-slate-900 transition-all duration-300 group shadow-lg"
            >
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-pink-400 font-semibold flex items-center gap-2">
                  <Database className="w-4 h-4 text-pink-400" />
                  Secondary Disclosure Section
                </span>
                <h3 className="text-xl font-display font-medium text-white tracking-tight flex items-center space-x-2">
                  <span>Historical Foundation Assets (Prior March 2026 Submission)</span>
                </h3>
                <p className="text-xs text-pink-300/60 max-w-2xl">
                  Inspect the academic, policy, and advocacy foundations representing Singaporean-regional alignment models submitted in the general cycle.
                </p>
              </div>

              <div className="mt-4 sm:mt-0 flex items-center space-x-3 bg-pink-950/40 border border-pink-500/20 px-3.5 py-2 rounded-lg text-pink-300 hover:text-white transition-colors">
                <span className="text-xs font-mono font-semibold">
                  {showHistorical ? 'Collapse Foundation Grid' : 'Expand Foundation Grid (32 items)'}
                </span>
                {showHistorical ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>
          </div>

          <AnimatePresence>
            {showHistorical && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="space-y-8 pt-4">
                  {/* Informational baseline declaration */}
                  <div className="bg-slate-900/40 border border-pink-500/10 p-5 rounded-xl text-center max-w-4xl mx-auto space-y-2">
                    <p className="text-xs font-mono text-sky-400">
                      ADMINISTRATIVE INTEGRITY MEMORANDUM // SECTION 3
                    </p>
                    <p className="text-xs text-pink-300/80 leading-relaxed">
                      All 32 underlying items below were verified during the primary Admissions Cycle. The Admissions Appeal considers how Ng Kai Ming&apos;s 9 new milestones above dynamically complement these existing assets, demonstrating continuous academic speed and exceptional resilience.
                    </p>
                  </div>

                  {filteredOldAchievements.length === 0 ? (
                    <div className="text-center py-10 bg-slate-900/20 rounded-xl border border-dashed border-pink-500/10">
                      <p className="text-xs text-pink-300/50 font-mono">No historical entries match this filter.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredOldAchievements.map((item, index) => (
                        <div
                          key={item.id}
                          id={`hist-card-${item.id}`}
                          className="bg-slate-900/45 border border-pink-500/10 hover:border-pink-500/20 rounded-xl overflow-hidden p-5 flex flex-col justify-between transition-all duration-300 group"
                        >
                          <div className="space-y-3.5">
                            <div className="flex items-center justify-between gap-2 border-b border-pink-500/10 pb-2">
                              <span className="text-[8px] font-mono uppercase tracking-widest text-pink-400/80 bg-pink-950/20 px-2 py-0.5 rounded border border-pink-500/10">
                                FOUNDATION DATA
                              </span>
                              <span className="text-[10px] font-mono text-pink-300/50">
                                Pre-2026
                              </span>
                            </div>

                            <div className="space-y-0.5">
                              <h4 className="font-display font-medium text-white text-sm tracking-tight group-hover:text-pink-300 transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-pink-400/70 text-[11px] font-mono leading-tight">
                                {item.subtitle}
                              </p>
                            </div>

                            {/* Image block required on every single card */}
                            <SafeAchievementImage 
                              src={item.imagePath} 
                              alt={item.title} 
                              category={item.category} 
                            />

                            <p className="text-pink-200/50 text-[11px] leading-relaxed line-clamp-3">
                              {item.description}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-pink-500/5 flex items-center justify-between mt-4">
                            <span className="text-[10px] font-mono text-pink-400/60">
                              CODE: {item.dossierId}
                            </span>
                            <button
                              id={`verify-hist-btn-${item.id}`}
                              onClick={() => handleEvidenceClick(item)}
                              className="text-xs font-mono text-sky-400 hover:text-sky-300 inline-flex items-center space-x-1"
                            >
                              <span>Inspect dossier</span>
                              <ExternalLink className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>


        {/* --- DYNAMIC EVENT INTERCEPTOR FLOATING MODAL --- */}
        <AnimatePresence>
          {activeModalItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="absolute inset-0 bg-slate-950/95 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                id="verification-modal"
                className="relative bg-slate-900 border border-sky-500/30 rounded-2xl p-6 sm:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl glow-blue space-y-6"
              >
                {/* Close Button */}
                <button
                  id="close-modal-btn"
                  onClick={closeModal}
                  className="absolute right-4 top-4 text-pink-300 hover:text-white p-1 rounded-lg border border-pink-500/10 hover:border-pink-500/30 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header Block */}
                <div className="border-b border-pink-500/10 pb-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/30">
                      LEDBER-VERIFIED INDEX
                    </span>
                    <span className="text-xs font-mono text-pink-400/80">
                      ID TOKEN: {activeModalItem.dossierId}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-display font-semibold text-white tracking-tight">
                    {activeModalItem.title}
                  </h2>
                  <p className="text-pink-300 text-xs font-mono">
                    {activeModalItem.subtitle}
                  </p>
                </div>

                {/* Body Content */}
                <div className="space-y-4">
                  
                  {/* Thumbnail and Meta Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <div>
                      <SafeAchievementImage 
                        src={activeModalItem.imagePath} 
                        alt={activeModalItem.title} 
                        category={activeModalItem.category} 
                      />
                    </div>
                    <div className="p-4 bg-slate-950/60 border border-pink-500/10 rounded-xl space-y-3 font-mono text-[11px] text-pink-300/80">
                      <div className="border-b border-pink-500/5 pb-1">
                        <span className="text-pink-400/50 uppercase">Date Logged:</span>
                        <p className="text-white font-semibold">{activeModalItem.date}</p>
                      </div>
                      <div className="border-b border-pink-500/5 pb-1">
                        <span className="text-pink-400/50 uppercase">Admissions Pillar:</span>
                        <p className="text-sky-400 font-semibold capitalize">{activeModalItem.category}</p>
                      </div>
                      <div>
                        <span className="text-pink-400/50 uppercase">Security Ledger Hash:</span>
                        <p className="text-white font-semibold break-all text-[10px] opacity-80">
                          {activeModalItem.id.toUpperCase()}-LEDGER-{activeModalItem.dossierId}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Elaborated Verification Details */}
                  <div className="space-y-3 bg-slate-950/40 border border-pink-500/5 rounded-xl p-4 sm:p-5">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-sky-400 flex items-center gap-1.5">
                      <FileText className="w-4 h-4" />
                      Physical Dossier Ledger Entry
                    </h4>
                    <p className="text-xs text-pink-200/80 leading-relaxed">
                      {activeModalItem.description}
                    </p>
                    <div className="pt-2 text-[11px] text-pink-300/60 leading-relaxed border-t border-pink-500/5">
                      This element is officially registered under verification code <span className="text-sky-400 font-mono font-bold font-semibold bg-slate-950 px-1 rounded">{activeModalItem.dossierId}</span>. A hardcopy, certified-true equivalent of this academic/advocacy credential is filed in the corresponding volume of the physical Admissions Appeal Dossier delivered directly to the NUS Office of Admissions.
                    </div>
                  </div>

                </div>

                {/* Actions Block */}
                <div className="flex flex-col sm:flex-row items-center sm:justify-end gap-3 border-t border-pink-500/10 pt-4">
                  <button
                    id="modal-close-secondary-btn"
                    onClick={closeModal}
                    className="w-full sm:w-auto text-xs font-mono text-pink-300 hover:text-white px-4 py-2 rounded-lg border border-pink-500/10 hover:border-pink-500/30 transition-all rounded"
                  >
                    Close Verification Block
                  </button>
                  
                  {activeModalItem.link ? (
                    <a
                      id="modal-external-link-btn"
                      href={activeModalItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center space-x-1.5 bg-sky-500 hover:bg-sky-400 text-slate-950 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25 active:scale-95"
                    >
                      <span>Launch External Verification Node</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 bg-slate-950 border border-sky-500/30 text-sky-400 px-4 py-2 rounded-lg text-xs font-mono select-none">
                      <span>Dossier Hardcopy Certified</span>
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  )}
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* --- PAGE FOOTER --- */}
        <footer className="border-t border-pink-500/10 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-pink-300/40 font-mono">
          <div className="space-y-1 text-center md:text-left">
            <p>Verification repository compiled for admissions evaluation audits.</p>
            <p className="text-pink-300/25">NUS College of Humanities and Sciences Submission Framework // Ng Kai Ming 2026</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Security Node Active</span>
            </span>
            <span className="text-pink-300/20">|</span>
            <span>Ref: 2026.NUS.CHS.SEAS.APPEAL</span>
          </div>
        </footer>

      </div>
    </main>
  );
}
