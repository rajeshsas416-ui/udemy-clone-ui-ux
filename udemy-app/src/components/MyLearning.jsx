import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PlayCircle, Award, Heart, BookOpen, Clock } from 'lucide-react';
import CourseCard from './CourseCard';

export default function MyLearning() {
  const { enrolledCourses, courses, startLearning, wishlist, setCurrentView } = useApp();
  const [tab, setTab] = useState('enrolled'); // 'enrolled' | 'wishlist'

  const enrolledCourseObjects = enrolledCourses.map(e => {
    const course = courses.find(c => c.id === e.courseId);
    return {
      ...course,
      ...e
    };
  }).filter(c => !!c.title);

  const wishlistedCourses = courses.filter(c => wishlist.includes(c.id));

  return (
    <div className="bg-white min-h-screen pb-16">
      
      {/* Dark Header */}
      <div className="bg-[#1c1d1f] text-white py-8 border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4">
          <h1 className="text-3xl font-extrabold font-serif">My Learning</h1>
          <div className="flex items-center gap-6 mt-6 text-sm font-semibold border-b border-gray-700">
            <button 
              onClick={() => setTab('enrolled')}
              className={`pb-2.5 transition cursor-pointer flex items-center gap-2 ${
                tab === 'enrolled' ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>All courses ({enrolledCourseObjects.length})</span>
            </button>
            <button 
              onClick={() => setTab('wishlist')}
              className={`pb-2.5 transition cursor-pointer flex items-center gap-2 ${
                tab === 'wishlist' ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Wishlist ({wishlistedCourses.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Body Content */}
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        
        {tab === 'enrolled' && (
          <div>
            {enrolledCourseObjects.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-sm">You haven't enrolled in any courses yet.</p>
                <button 
                  onClick={() => setCurrentView('home')}
                  className="mt-4 bg-udemy-purple hover:bg-udemy-darkPurple text-white text-xs font-bold px-5 py-2.5 rounded-lg transition cursor-pointer"
                >
                  Browse Courses
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {enrolledCourseObjects.map((item) => (
                  <div 
                    key={item.courseId}
                    className="bg-white rounded-xl border border-udemy-border overflow-hidden shadow-sm hover:shadow-md transition flex flex-col group cursor-pointer"
                    onClick={() => startLearning(item.courseId)}
                  >
                    <div className="relative aspect-video overflow-hidden bg-gray-100">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition flex items-center justify-center">
                        <PlayCircle className="w-12 h-12 text-white" />
                      </div>
                    </div>

                    <div className="p-4 flex flex-col flex-1 justify-between space-y-3">
                      <div>
                        <h3 className="font-bold text-sm text-udemy-charcoal group-hover:text-udemy-purple line-clamp-2 transition leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">{item.instructor?.name}</p>
                      </div>

                      <div className="space-y-1.5 pt-2 border-t border-gray-100">
                        <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className="bg-udemy-purple h-full rounded-full transition-all duration-300"
                            style={{ width: `${item.progressPercent || 0}%` }}
                          ></div>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-gray-500">
                          <span>{item.progressPercent || 0}% complete</span>
                          <span className="text-udemy-purple font-bold">Continue →</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === 'wishlist' && (
          <div>
            {wishlistedCourses.length === 0 ? (
              <div className="text-center py-16">
                <Heart className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                <p className="text-gray-500 text-sm">Your wishlist is empty.</p>
                <button 
                  onClick={() => setCurrentView('home')}
                  className="mt-4 bg-udemy-purple hover:bg-udemy-darkPurple text-white text-xs font-bold px-5 py-2.5 rounded-lg transition cursor-pointer"
                >
                  Explore Courses
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {wishlistedCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
