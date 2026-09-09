import Link from 'next/link';
import { Wrench } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <div className="p-2 bg-sky-600 text-white rounded-xl shadow-sm">
                <Wrench className="w-5 h-5" />
              </div>
              <span>Toolora</span>
            </Link>
            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              100% Free, fast, and privacy-focused online web tools. Everything runs locally in your browser for maximum security.
            </p>
          </div>

          {/* Quick Categories */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Top Categories</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/#categories" className="hover:text-sky-600">Image Tools</Link></li>
              <li><Link href="/#categories" className="hover:text-sky-600">PDF Tools</Link></li>
              <li><Link href="/#categories" className="hover:text-sky-600">Developer Tools</Link></li>
              <li><Link href="/#categories" className="hover:text-sky-600">Text Tools</Link></li>
            </ul>
          </div>

          {/* Legal & Policy */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Legal & Safety</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/privacy" className="hover:text-sky-600">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-sky-600">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-sky-600">Disclaimer</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">About Toolora</h3>
            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Built for speed and simplicity. No installations or registration required.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Toolora. All rights reserved.</p>
          <p className="text-slate-400">Global Web Tools Platform</p>
        </div>
      </div>
    </footer>
  );
      }
