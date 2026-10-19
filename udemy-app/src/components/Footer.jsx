import React from 'react';
import { Globe } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Footer() {
  const { setCurrentView, setIsInstructorModalOpen } = useApp();

  return (
    <footer className="bg-[#1c1d1f] text-white border-t border-gray-800 text-xs mt-auto">
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        
        {/* Top Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-3">
            <h4 className="font-bold text-gray-200">Udemy Business</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => setIsInstructorModalOpen(true)} className="hover:text-white transition">Teach on Udemy</button></li>
              <li><a href="#" className="hover:text-white transition">Get the app</a></li>
              <li><a href="#" className="hover:text-white transition">About us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact us</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-gray-200">Careers</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Engineering Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Help and Support</a></li>
              <li><a href="#" className="hover:text-white transition">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-white transition">Investors</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-gray-200">Legal & Terms</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Cookie Settings</a></li>
              <li><a href="#" className="hover:text-white transition">Sitemap</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-start md:items-end justify-start">
            <button className="border border-white/40 hover:border-white px-4 py-2 rounded-md flex items-center gap-2 text-xs font-semibold hover:bg-white/10 transition cursor-pointer">
              <Globe className="w-4 h-4" />
              <span>English</span>
            </button>
          </div>
        </div>

        {/* Bottom Logo & Copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-udemy-purple flex items-center justify-center text-white font-black text-sm">
              U
            </div>
            <span className="font-bold text-lg tracking-tight text-white font-serif">
              udemy
            </span>
          </div>

          <p className="text-[11px]">
            © 2026 Udemy Platform Architecture Demo, Inc. Built for high-performance learning.
          </p>
        </div>

      </div>
    </footer>
  );
}
