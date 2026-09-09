'use client';

import { useState } from 'react';
import Link from 'next/link';
import AdSlot from '@/components/ad-slot';
import { Type, Copy, Trash2, Check, ArrowLeft } from 'lucide-react';

export default function WordCounterPage() {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  // Real-time Analytics Calculations
  const charCount = text.length;
  const charNoSpacesCount = text.replace(/\s+/g, '').length;
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const sentenceCount = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphCount = text.trim() === '' ? 0 : text.split(/\n+/).filter(Boolean).length;
  const readingTime = Math.ceil(wordCount / 200); // Avg 200 words per minute

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setText('');
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Back Button & Header */}
      <div className="space-y-4">
        <Link href="/" className="inline-flex items-center text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline gap-1">
          <ArrowLeft className="w-4 h-4" /> Back to All Tools
        </Link>
        
        <div className="flex items-center gap-3">
          <div className="p-3 bg-sky-600 text-white rounded-2xl shadow-md">
            <Type className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Word Counter</h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Count words, characters, sentences, and reading time in real-time.
            </p>
          </div>
        </div>
      </div>

      {/* Ad Placement */}
      <AdSlot slotId="word-counter-top" format="horizontal" />

      {/* Interactive Tool Section */}
      <div className="space-y-6 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* Statistics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center">
            <span className="block text-xl font-bold text-sky-600 dark:text-sky-400">{wordCount}</span>
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase">Words</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center">
            <span className="block text-xl font-bold text-sky-600 dark:text-sky-400">{charCount}</span>
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase">Characters</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center">
            <span className="block text-xl font-bold text-sky-600 dark:text-sky-400">{charNoSpacesCount}</span>
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase">No Spaces</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center">
            <span className="block text-xl font-bold text-sky-600 dark:text-sky-400">{sentenceCount}</span>
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase">Sentences</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center">
            <span className="block text-xl font-bold text-sky-600 dark:text-sky-400">{paragraphCount}</span>
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase">Paragraphs</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center">
            <span className="block text-xl font-bold text-sky-600 dark:text-sky-400">~{readingTime} min</span>
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase">Read Time</span>
          </div>
        </div>

        {/* Textarea Input Box */}
        <div className="space-y-3">
          <textarea
            rows={8}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text here to count words and characters..."
            className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm leading-relaxed"
          ></textarea>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                disabled={!text}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-sky-600 hover:bg-sky-700 text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 transition-all shadow-sm"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy Text'}</span>
              </button>

              <button
                onClick={handleClear}
                disabled={!text}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-red-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 transition-all"
              >
                <Trash2 className="w-4 h-4" />
                <span>Clear</span>
              </button>
            </div>

            <span className="text-xs text-slate-400">100% Private & Browser Processed</span>
          </div>
        </div>
      </div>

      {/* Mid Ad Placement */}
      <AdSlot slotId="word-counter-mid" format="rectangle" />

      {/* SEO Article & Documentation */}
      <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">How to Use Toolora Word Counter</h2>
        <p>
          Toolora's free Word Counter tool helps writers, bloggers, students, and social media managers measure text length with instant precision. Simply paste or type your document directly into the editor above to view real-time metrics including total word count, character count (with and without spaces), sentence structures, paragraphs, and estimated reading duration.
        </p>

        <h3 className="text-base font-semibold text-slate-900 dark:text-white">Key Features:</h3>
        <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm pl-2">
          <li><strong>Instant Word & Character Tracking:</strong> Updates live as you type or modify text.</li>
          <li><strong>Reading Speed Estimation:</strong> Calculated based on an standard average adult reading speed of 200 words per minute.</li>
          <li><strong>100% Client-Side Privacy:</strong> Your data never uploads to external servers. All text analysis is computed inside your local web browser.</li>
          <li><strong>Zero Limits:</strong> No registration, sign-up, or character limit required.</li>
        </ul>

        <h3 className="text-base font-semibold text-slate-900 dark:text-white">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-3 text-xs sm:text-sm">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white">Is my text stored or saved on any server?</h4>
            <p className="text-slate-500 dark:text-slate-400">No. Toolora processes all text entirely inside your web browser via local JavaScript engine. We do not store, copy, or transmit your input anywhere.</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white">What is considered a character count without spaces?</h4>
            <p className="text-slate-500 dark:text-slate-400">It measures the total count of letters, numbers, and symbols while completely excluding blank spaces between words.</p>
          </div>
        </div>
      </section>
    </main>
  );
      }
