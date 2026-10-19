import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Check, PlayCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function CourseCard({ course }) {
  const { openCourseDetail, addToCart, toggleWishlist, wishlist, cart, enrolledCourses, startLearning } = useApp();
  const [isHovered, setIsHovered] = useState(false);

  const isWishlisted = wishlist.includes(course.id);
  const isInCart = cart.some(c => c.id === course.id);
  const isEnrolled = enrolledCourses.some(e => e.courseId === course.id);

  return (
    <div 
      className="relative group flex flex-col cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Course Main Card */}
      <div 
        onClick={() => openCourseDetail(course.id)}
        className="flex flex-col h-full bg-white rounded-lg overflow-hidden transition-all duration-200"
      >
        {/* Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden bg-gray-100 rounded-lg border border-udemy-border/60">
          <img 
            src={course.thumbnail} 
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition flex items-center justify-center">
            <PlayCircle className="w-10 h-10 text-white/90 opacity-0 group-hover:opacity-100 transition transform scale-75 group-hover:scale-100" />
          </div>

          {/* Badge */}
          {course.badge && (
            <span className={`absolute top-2 left-2 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow ${
              course.badge === 'Bestseller' ? 'bg-[#eceb98] text-[#3d3c0a]' : 'bg-purple-100 text-udemy-darkPurple'
            }`}>
              {course.badge}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="pt-2 flex flex-col flex-1">
          <h3 className="font-bold text-sm text-udemy-charcoal leading-snug line-clamp-2 group-hover:text-udemy-purple transition">
            {course.title}
          </h3>

          <p className="text-xs text-udemy-gray mt-1 truncate">
            {course.instructor.name}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-1 text-xs">
            <span className="font-extrabold text-udemy-star">{course.rating}</span>
            <div className="flex text-udemy-starBg">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-udemy-gray text-[11px]">({course.ratingCount.toLocaleString()})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mt-2">
            <span className="font-extrabold text-base text-udemy-charcoal">
              ₹{course.price}
            </span>
            <span className="text-xs text-udemy-gray line-through">
              ₹{course.originalPrice}
            </span>
          </div>
        </div>
      </div>

      {/* Udemy Popover on Hover (Desktop) */}
      {isHovered && (
        <div 
          className="hidden lg:block absolute left-full top-0 ml-3 w-80 bg-white rounded-xl shadow-2xl border border-udemy-border p-4 z-40 animate-in fade-in zoom-in-95 duration-150"
          style={{ minWidth: '320px' }}
        >
          <h4 className="font-bold text-base text-udemy-charcoal leading-tight">
            {course.title}
          </h4>

          <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold mt-1">
            <span>Updated {course.lastUpdated}</span>
            <span>•</span>
            <span>{course.language}</span>
          </div>

          <p className="text-xs text-udemy-gray mt-2 line-clamp-3 leading-relaxed">
            {course.headline}
          </p>

          <div className="mt-3 pt-3 border-t border-gray-100 space-y-1.5">
            <p className="text-xs font-bold text-udemy-charcoal">What you'll learn:</p>
            {course.whatYouWillLearn.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="line-clamp-2">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2">
            {isEnrolled ? (
              <button 
                onClick={(e) => { e.stopPropagation(); startLearning(course.id); }}
                className="flex-1 bg-emerald-600 text-white font-bold text-xs py-2.5 rounded-lg hover:bg-emerald-700 transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                <PlayCircle className="w-4 h-4" /> Go to Course
              </button>
            ) : (
              <button 
                onClick={(e) => { e.stopPropagation(); addToCart(course); }}
                className={`flex-1 font-bold text-xs py-2.5 rounded-lg transition cursor-pointer flex items-center justify-center gap-1.5 ${
                  isInCart ? 'bg-gray-200 text-udemy-charcoal' : 'bg-udemy-purple hover:bg-udemy-darkPurple text-white shadow-md'
                }`}
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                {isInCart ? 'In Cart' : 'Add to cart'}
              </button>
            )}

            <button 
              onClick={(e) => { e.stopPropagation(); toggleWishlist(course.id); }}
              className={`p-2.5 rounded-lg border transition cursor-pointer ${
                isWishlisted 
                  ? 'border-red-400 bg-red-50 text-red-500' 
                  : 'border-udemy-border hover:bg-gray-100 text-gray-700'
              }`}
              title="Add to Wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
