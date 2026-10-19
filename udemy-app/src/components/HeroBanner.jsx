import React from 'react';
import { Sparkles, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function HeroBanner() {
  const { openCourseDetail, courses } = useApp();
  const featured = courses[0];

  return (
    <div className="relative max-w-[1400px] mx-auto px-4 py-6">
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-gray-900 via-purple-950 to-indigo-950 text-white shadow-2xl min-h-[380px] flex items-center">
        
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-udemy-purple/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 lg:p-12 w-full">
          
          {/* Left Text Card */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-purple-200">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              Flash Sale • Ends in 24 Hours
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif leading-tight">
              Master Tomorrow’s Skills Today.
            </h1>

            <p className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed">
              Real-world engineering, generative AI, cloud architecture, and design taught by top practitioners. High-definition video curriculum, downloadable assets, and verifiable certificates.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={() => openCourseDetail(featured.id)}
                className="bg-white text-udemy-charcoal font-bold text-sm px-6 py-3 rounded-lg hover:bg-gray-100 shadow-lg hover:shadow-xl transition flex items-center gap-2 cursor-pointer"
              >
                Explore Top Course
                <ArrowRight className="w-4 h-4 text-udemy-purple" />
              </button>

              <div className="flex items-center gap-2 text-xs text-gray-300">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span>30-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Featured Preview Card */}
          <div className="lg:col-span-5 hidden lg:block">
            <div 
              onClick={() => openCourseDetail(featured.id)}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/15 transition cursor-pointer group shadow-2xl"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                <img 
                  src={featured.thumbnail} 
                  alt={featured.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-2 left-2 bg-yellow-400 text-gray-900 text-[11px] font-black uppercase px-2 py-0.5 rounded shadow">
                  Bestseller
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-white line-clamp-1 group-hover:text-purple-300 transition">
                  {featured.title}
                </h3>
                <p className="text-xs text-gray-300">{featured.instructor.name}</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-yellow-300 font-bold">★ {featured.rating} (382k ratings)</span>
                  <div className="text-right">
                    <span className="font-extrabold text-base text-white">₹{featured.price}</span>
                    <span className="text-xs text-gray-400 line-through ml-1.5">₹{featured.originalPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
