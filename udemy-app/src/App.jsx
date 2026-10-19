import React from 'react';
import { useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CategoryPills from './components/CategoryPills';
import CourseCard from './components/CourseCard';
import CourseDetailPage from './components/CourseDetailPage';
import LearningPlayer from './components/LearningPlayer';
import CartPage from './components/CartPage';
import MyLearning from './components/MyLearning';
import InstructorModal from './components/InstructorModal';
import Footer from './components/Footer';
import { Sparkles, TrendingUp, Award, Users, CheckCircle, ArrowRight } from 'lucide-react';

export default function App() {
  const { 
    currentView, 
    courses, 
    activeCategory, 
    searchQuery, 
    notification,
    openCourseDetail
  } = useApp();

  // Filter courses based on activeCategory and searchQuery
  const filteredCourses = courses.filter(c => {
    const matchesCategory = activeCategory === 'All' || c.category === activeCategory;
    const matchesSearch = !searchQuery.trim() || 
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-200">
          <div className={`px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-xs font-bold text-white border ${
            notification.type === 'info' 
              ? 'bg-gray-900 border-gray-700' 
              : 'bg-emerald-600 border-emerald-500'
          }`}>
            <CheckCircle className="w-4 h-4 text-emerald-300 flex-shrink-0" />
            <span>{notification.message}</span>
          </div>
        </div>
      )}

      {/* Instructor Modal */}
      <InstructorModal />

      {/* Render Main App Views */}
      {currentView === 'player' ? (
        <LearningPlayer />
      ) : (
        <>
          <Navbar />

          <main className="flex-1">
            {currentView === 'course-detail' && <CourseDetailPage />}
            
            {currentView === 'cart' && <CartPage />}

            {currentView === 'my-learning' && <MyLearning />}

            {currentView === 'home' && (
              <>
                {/* Hero Banner */}
                <HeroBanner />

                {/* Category Navigation Pills */}
                <CategoryPills />

                {/* Social Proof Logos Bar */}
                <div className="bg-udemy-bgLight py-6 border-y border-gray-100 mb-8">
                  <div className="max-w-[1400px] mx-auto px-4 text-center">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                      Trusted by over 16,000 enterprise teams worldwide
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition duration-300">
                      <span className="font-extrabold text-base tracking-tight text-gray-700">VOLKSWAGEN</span>
                      <span className="font-bold text-base tracking-tight text-gray-700">SAMSUNG</span>
                      <span className="font-black text-base tracking-tight text-gray-700">CISCO</span>
                      <span className="font-bold text-base tracking-tight text-gray-700">AT&T</span>
                      <span className="font-bold text-base tracking-tight text-gray-700">PROCTER & GAMBLE</span>
                      <span className="font-extrabold text-base tracking-tight text-gray-700">HEWLETT PACKARD</span>
                    </div>
                  </div>
                </div>

                {/* Primary Courses Grid */}
                <div className="max-w-[1400px] mx-auto px-4 py-4 space-y-12">
                  
                  {/* Category Title & Count */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold font-serif text-udemy-charcoal flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-udemy-purple" />
                          {searchQuery ? `Search Results for "${searchQuery}"` : activeCategory === 'All' ? 'Learners are viewing' : `Top Courses in ${activeCategory}`}
                        </h2>
                        <p className="text-xs text-gray-500 mt-1">
                          Showing {filteredCourses.length} top-rated video masterclasses
                        </p>
                      </div>
                    </div>

                    {filteredCourses.length === 0 ? (
                      <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-200">
                        <p className="text-gray-500 text-sm">No courses found matching your criteria.</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredCourses.map(course => (
                          <CourseCard key={course.id} course={course} />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* High Value Value Proposition Feature Section */}
                  <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50 rounded-2xl p-8 border border-purple-100 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-udemy-purple text-white flex items-center justify-center flex-shrink-0 shadow">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-udemy-charcoal">Learn in-demand skills</h3>
                        <p className="text-xs text-gray-600 mt-1">Over 220,000 video courses across trending frameworks, cloud, and AI engineering.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-udemy-purple text-white flex items-center justify-center flex-shrink-0 shadow">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-udemy-charcoal">Expert Real-World Instructors</h3>
                        <p className="text-xs text-gray-600 mt-1">Courses created by experienced practitioners who work in Fortune 500 tech companies.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-udemy-purple text-white flex items-center justify-center flex-shrink-0 shadow">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-udemy-charcoal">Lifetime Access & Certificates</h3>
                        <p className="text-xs text-gray-600 mt-1">Learn at your own pace with on-demand video streaming, quizzes, and certificates.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </>
            )}
          </main>

          <Footer />
        </>
      )}

    </div>
  );
}
