import React from 'react';
import { useApp } from '../context/AppContext';
import { CATEGORIES } from '../data/courses';

export default function CategoryPills() {
  const { activeCategory, setActiveCategory, setSearchQuery } = useApp();

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-4">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSearchQuery('');
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer whitespace-nowrap flex-shrink-0 ${
                isActive
                  ? 'bg-udemy-charcoal text-white shadow-sm'
                  : 'bg-gray-100 text-udemy-charcoal hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
