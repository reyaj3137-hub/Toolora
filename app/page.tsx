'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TOOLS_LIST, CATEGORIES } from '@/config/tools-list';
import AdSlot from '@/components/ad-slot';
import { Search, Sparkles, ArrowRight, Wrench } from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredTools = TOOLS_LIST.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-6 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-semibold">
          <Sparkles className="w-4 h-4" />
          <span>100% Free & Browser-Based Security</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Powerful Tools. <br className="hidden sm:inline" />
          <span className="text-sky-600 dark:text-sky-400">Simple & Free.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300">
          Process your files quickly, securely, and completely in your browser without any installation, registration, or server uploads.
        </p>

        {/* Global Tool Search Bar */}
        <div className="max-w-2xl mx-auto relative pt-4">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search tools (e.g. PNG to PDF, Word Counter, JSON Formatter)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-lg shadow-slate-200/50 dark:shadow-none focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all text-sm sm:text-base"
            />
          </div>
        </div>
      </section>

      {/* Ad Placement */}
      <AdSlot slotId="home-top-ad" format="horizontal" />

      {/* Categories Filter Section */}
      <section id="categories" className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Categories</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-sky-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-sky-500'
            }`}
          >
            All Tools ({TOOLS_LIST.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-sky-500'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Tools Grid Section */}
      <section id="tools" className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {selectedCategory === 'all' ? 'All Web Tools' : `${CATEGORIES.find(c => c.id === selectedCategory)?.name}`}
          </h2>
          <span className="text-xs text-slate-500">{filteredTools.length} tools available</span>
        </div>

        {filteredTools.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
            <p className="text-slate-500 dark:text-slate-400 text-sm">No tools found matching your search term "{searchQuery}".</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.slug}`}
                className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 dark:hover:border-sky-500 hover:shadow-xl transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 rounded-xl group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <Wrench className="w-5 h-5" />
                    </div>
                    {tool.isPopular && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <div className="flex items-center text-xs font-semibold text-sky-600 dark:text-sky-400 gap-1 pt-2">
                  <span>Open Tool</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Bottom Ad Placement */}
      <AdSlot slotId="home-bottom-ad" format="rectangle" />
    </main>
  );
      }
