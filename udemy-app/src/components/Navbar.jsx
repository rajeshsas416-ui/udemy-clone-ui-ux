import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  Bell, 
  Globe, 
  ChevronDown, 
  BookOpen, 
  PlusCircle, 
  GraduationCap,
  Sparkles,
  X
} from 'lucide-react';

export default function Navbar() {
  const { 
    cart, 
    wishlist, 
    enrolledCourses, 
    currentView, 
    setCurrentView, 
    searchQuery, 
    setSearchQuery,
    setIsInstructorModalOpen,
    setActiveCategory
  } = useApp();

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const categories = [
    { name: "Development", count: "12,400+ courses", icon: "💻" },
    { name: "Data Science", count: "6,800+ courses", icon: "🧠" },
    { name: "Cloud & DevOps", count: "4,200+ courses", icon: "☁️" },
    { name: "Design", count: "5,100+ courses", icon: "🎨" },
    { name: "Cybersecurity", count: "3,300+ courses", icon: "🛡️" }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentView('home');
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-udemy-border shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 h-18 flex items-center gap-4">
        
        {/* Udemy Brand Logo */}
        <button 
          onClick={() => { setCurrentView('home'); setSearchQuery(''); setActiveCategory('All'); }}
          className="flex items-center gap-2 group flex-shrink-0 cursor-pointer text-left"
        >
          <div className="w-9 h-9 rounded-lg bg-udemy-purple flex items-center justify-center text-white font-extrabold text-xl shadow-md group-hover:bg-udemy-darkPurple transition">
            U
          </div>
          <span className="font-bold text-2xl tracking-tighter text-udemy-charcoal font-serif">
            udemy<span className="text-udemy-purple font-sans text-xs ml-1 font-bold bg-udemy-lightPurple px-1.5 py-0.5 rounded">PRO</span>
          </span>
        </button>

        {/* Categories Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="hidden md:flex items-center gap-1.5 text-sm font-medium text-udemy-charcoal hover:text-udemy-purple py-2 px-2.5 rounded-md hover:bg-gray-100 transition cursor-pointer"
          >
            Categories
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`} />
          </button>

          {isCategoryOpen && (
            <div 
              className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-udemy-border py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              onMouseLeave={() => setIsCategoryOpen(false)}
            >
              <div className="px-4 py-2 border-b border-gray-100 font-semibold text-xs text-gray-500 uppercase tracking-wider">
                Explore Tech Domains
              </div>
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => {
                    setActiveCategory(cat.name);
                    setCurrentView('home');
                    setIsCategoryOpen(false);
                  }}
                  className="w-full text-left px-4 py-2.5 hover:bg-udemy-lightPurple hover:text-udemy-purple text-sm flex items-center justify-between group transition cursor-pointer"
                >
                  <span className="flex items-center gap-2 font-medium text-udemy-charcoal group-hover:text-udemy-purple">
                    <span>{cat.icon}</span> {cat.name}
                  </span>
                  <span className="text-xs text-gray-400 group-hover:text-udemy-purple">
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Global Live Search Bar */}
        <form onSubmit={handleSearchSubmit} className="flex-1 relative max-w-3xl">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 pointer-events-none" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for courses, skills (Python, React, AWS, AI...)"
              className="w-full pl-11 pr-10 py-2.5 bg-udemy-bgLight border border-udemy-charcoal/40 rounded-full text-sm text-udemy-charcoal focus:outline-none focus:border-udemy-purple focus:bg-white focus:ring-1 focus:ring-udemy-purple transition"
            />
            {searchQuery && (
              <button 
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-200 transition"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </form>

        {/* Right Navigation Actions */}
        <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0">
          
          {/* Teach on Udemy button */}
          <button 
            onClick={() => setIsInstructorModalOpen(true)}
            className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-udemy-purple hover:bg-gray-100 py-2 px-3 rounded-md transition cursor-pointer"
          >
            <PlusCircle className="w-4 h-4 text-udemy-purple" />
            Teach on Udemy
          </button>

          {/* My Learning Tab */}
          <button 
            onClick={() => setCurrentView('my-learning')}
            className={`flex items-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-md transition cursor-pointer relative ${
              currentView === 'my-learning' 
                ? 'text-udemy-purple bg-udemy-lightPurple font-bold' 
                : 'text-gray-700 hover:text-udemy-purple hover:bg-gray-100'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>My Learning</span>
            {enrolledCourses.length > 0 && (
              <span className="w-2 h-2 rounded-full bg-udemy-purple animate-pulse"></span>
            )}
          </button>

          {/* Wishlist Heart Icon */}
          <button 
            onClick={() => setCurrentView('my-learning')}
            className="p-2 text-gray-700 hover:text-udemy-purple hover:bg-gray-100 rounded-full relative transition cursor-pointer"
            title="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-udemy-purple text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Shopping Cart Button */}
          <button 
            onClick={() => setCurrentView('cart')}
            className={`p-2 rounded-full relative transition cursor-pointer ${
              currentView === 'cart' ? 'bg-udemy-lightPurple text-udemy-purple' : 'text-gray-700 hover:text-udemy-purple hover:bg-gray-100'
            }`}
            title="Shopping Cart"
          >
            <ShoppingCart className="w-5 h-5" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-udemy-purple text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow animate-bounce">
                {cart.length}
              </span>
            )}
          </button>

          {/* User Profile Avatar */}
          <div className="relative pl-1">
            <div className="w-8 h-8 rounded-full bg-udemy-charcoal text-white font-bold flex items-center justify-center text-xs ring-2 ring-udemy-purple/40 shadow cursor-pointer hover:ring-udemy-purple transition">
              RJ
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
