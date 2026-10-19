import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Star, 
  Play, 
  Check, 
  Globe, 
  Calendar, 
  FileText, 
  Award, 
  Smartphone, 
  Infinity as InfinityIcon, 
  ChevronDown, 
  Lock, 
  PlayCircle, 
  Heart, 
  Share2, 
  ArrowLeft,
  X,
  ShieldCheck
} from 'lucide-react';

export default function CourseDetailPage() {
  const { 
    selectedCourse, 
    setCurrentView, 
    addToCart, 
    cart, 
    wishlist, 
    toggleWishlist, 
    startLearning, 
    enrolledCourses 
  } = useApp();

  const [expandedSections, setExpandedSections] = useState({ s1: true });
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [previewVideoUrl, setPreviewVideoUrl] = useState(selectedCourse.previewVideo);

  const isEnrolled = enrolledCourses.some(e => e.courseId === selectedCourse.id);
  const isInCart = cart.some(c => c.id === selectedCourse.id);
  const isWishlisted = wishlist.includes(selectedCourse.id);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleOpenPreview = (videoUrl) => {
    setPreviewVideoUrl(videoUrl || selectedCourse.previewVideo);
    setIsPreviewModalOpen(true);
  };

  // Calculate total lectures & duration
  let totalLectures = 0;
  selectedCourse.curriculum.forEach(sec => {
    totalLectures += sec.lectures.length;
  });

  return (
    <div className="bg-white min-h-screen pb-16">
      
      {/* Top Breadcrumb Bar */}
      <div className="bg-gray-900 text-gray-300 py-3 border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between text-xs">
          <button 
            onClick={() => setCurrentView('home')}
            className="flex items-center gap-1.5 text-purple-300 hover:text-white transition cursor-pointer font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to courses
          </button>
          <div className="flex items-center gap-2 text-gray-400">
            <span>{selectedCourse.category}</span>
            <span>/</span>
            <span className="text-white font-medium">{selectedCourse.subCategory}</span>
          </div>
        </div>
      </div>

      {/* Dark Hero Section */}
      <div className="bg-gray-900 text-white py-8 lg:py-12 border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Info Header */}
          <div className="lg:col-span-8 space-y-4">
            {selectedCourse.badge && (
              <span className="inline-block bg-yellow-400 text-gray-900 text-xs font-black uppercase px-2.5 py-0.5 rounded shadow">
                {selectedCourse.badge}
              </span>
            )}

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif leading-tight">
              {selectedCourse.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              {selectedCourse.headline}
            </p>

            {/* Ratings & Metadata */}
            <div className="flex flex-wrap items-center gap-3 text-sm pt-1">
              <div className="flex items-center gap-1.5 bg-white/10 px-2 py-0.5 rounded">
                <span className="font-extrabold text-yellow-400">{selectedCourse.rating}</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              <span className="text-purple-300 underline font-medium cursor-pointer">
                ({selectedCourse.ratingCount.toLocaleString()} ratings)
              </span>

              <span className="text-gray-300">
                {selectedCourse.studentsCount.toLocaleString()} students
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300 pt-2">
              <div className="flex items-center gap-1.5">
                <span>Created by</span>
                <span className="text-purple-300 underline font-bold cursor-pointer">
                  {selectedCourse.instructor.name}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Last updated {selectedCourse.lastUpdated}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>{selectedCourse.language}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          
          {/* Left Column: Course Details */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* What you'll learn Box */}
            <div className="border border-udemy-border rounded-xl p-6 bg-udemy-bgLight">
              <h2 className="text-xl font-bold text-udemy-charcoal mb-4">
                What you'll learn
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedCourse.whatYouWillLearn.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-800">
                    <Check className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Content / Curriculum Accordion */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-udemy-charcoal">
                    Course content
                  </h2>
                  <p className="text-xs text-gray-600 mt-0.5">
                    {selectedCourse.curriculum.length} sections • {totalLectures} lectures • Lifetime access
                  </p>
                </div>
              </div>

              {/* Accordion List */}
              <div className="border border-udemy-border rounded-xl overflow-hidden divide-y divide-udemy-border">
                {selectedCourse.curriculum.map((section) => {
                  const isOpen = !!expandedSections[section.sectionId];
                  return (
                    <div key={section.sectionId} className="bg-white">
                      {/* Section Header */}
                      <button
                        onClick={() => toggleSection(section.sectionId)}
                        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition text-left cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5 font-bold text-sm text-udemy-charcoal">
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                          <span>{section.title}</span>
                        </div>
                        <span className="text-xs text-gray-500 font-medium">
                          {section.lectures.length} lectures • {section.totalDuration}
                        </span>
                      </button>

                      {/* Section Lectures */}
                      {isOpen && (
                        <div className="divide-y divide-gray-100 bg-white">
                          {section.lectures.map((lecture) => (
                            <div 
                              key={lecture.id}
                              className="p-3.5 pl-9 flex items-center justify-between hover:bg-purple-50/50 transition text-sm"
                            >
                              <div className="flex items-center gap-3">
                                {lecture.preview ? (
                                  <button 
                                    onClick={() => handleOpenPreview(lecture.videoUrl)}
                                    className="p-1 rounded-full text-udemy-purple hover:bg-purple-100 transition cursor-pointer"
                                    title="Preview Lecture"
                                  >
                                    <PlayCircle className="w-4 h-4" />
                                  </button>
                                ) : (
                                  <Lock className="w-3.5 h-3.5 text-gray-400" />
                                )}
                                <span className={`text-sm ${lecture.preview ? 'text-udemy-charcoal font-medium hover:text-udemy-purple cursor-pointer' : 'text-gray-700'}`}
                                      onClick={() => lecture.preview && handleOpenPreview(lecture.videoUrl)}>
                                  {lecture.title}
                                </span>
                              </div>

                              <div className="flex items-center gap-3 text-xs text-gray-500">
                                {lecture.preview && (
                                  <button 
                                    onClick={() => handleOpenPreview(lecture.videoUrl)}
                                    className="text-udemy-purple font-bold underline cursor-pointer hover:text-udemy-darkPurple"
                                  >
                                    Preview
                                  </button>
                                )}
                                <span>{lecture.duration}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Requirements */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-bold text-udemy-charcoal mb-3">Requirements</h2>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
                {selectedCourse.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-bold text-udemy-charcoal mb-3">Description</h2>
              <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                {selectedCourse.description}
              </p>
            </div>

            {/* Instructor Bio */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-bold text-udemy-charcoal mb-4">Instructor</h2>
              <div className="flex items-start gap-4">
                <img 
                  src={selectedCourse.instructor.avatar} 
                  alt={selectedCourse.instructor.name}
                  className="w-18 h-18 rounded-full object-cover ring-2 ring-udemy-purple/20 shadow"
                />
                <div className="space-y-1">
                  <h3 className="font-bold text-base text-udemy-purple underline cursor-pointer">
                    {selectedCourse.instructor.name}
                  </h3>
                  <p className="text-xs text-gray-600">{selectedCourse.instructor.role}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-700 pt-1">
                    <span>★ {selectedCourse.instructor.rating} Rating</span>
                    <span>• {selectedCourse.instructor.reviews} Reviews</span>
                    <span>• {selectedCourse.instructor.students} Students</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                {selectedCourse.instructor.bio}
              </p>
            </div>

            {/* Student Reviews */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-bold text-udemy-charcoal mb-4">Featured Reviews</h2>
              <div className="space-y-4">
                {selectedCourse.reviews.map(rev => (
                  <div key={rev.id} className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img src={rev.userAvatar} alt={rev.userName} className="w-8 h-8 rounded-full object-cover" />
                        <div>
                          <p className="text-xs font-bold text-udemy-charcoal">{rev.userName}</p>
                          <div className="flex text-yellow-400 text-xs">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] text-gray-400">{rev.date}</span>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed">{rev.comment}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sticky Purchase Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-xl border border-udemy-border p-5 sticky top-24 space-y-5">
              
              {/* Video Preview thumbnail with play trigger */}
              <div 
                onClick={() => handleOpenPreview(selectedCourse.previewVideo)}
                className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group shadow"
              >
                <img 
                  src={selectedCourse.thumbnail} 
                  alt={selectedCourse.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex flex-col items-center justify-center gap-2 text-white">
                  <div className="w-14 h-14 rounded-full bg-white/90 text-udemy-charcoal flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                    <Play className="w-6 h-6 fill-current ml-1 text-udemy-purple" />
                  </div>
                  <span className="font-bold text-xs">Preview this course</span>
                </div>
              </div>

              {/* Price & Discount */}
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-extrabold text-udemy-charcoal">
                    ₹{selectedCourse.price}
                  </span>
                  <span className="text-base text-gray-500 line-through">
                    ₹{selectedCourse.originalPrice}
                  </span>
                  <span className="bg-purple-100 text-udemy-darkPurple text-xs font-bold px-2 py-0.5 rounded">
                    {selectedCourse.discountPercent}% OFF
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-red-600 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
                  <span>1 day left at this price!</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                {isEnrolled ? (
                  <button 
                    onClick={() => startLearning(selectedCourse.id)}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm py-3.5 rounded-lg shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <PlayCircle className="w-5 h-5" />
                    Go to Course / Watch Lectures
                  </button>
                ) : (
                  <>
                    <button 
                      onClick={() => addToCart(selectedCourse)}
                      className={`w-full font-extrabold text-sm py-3.5 rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer ${
                        isInCart ? 'bg-gray-200 text-udemy-charcoal' : 'bg-udemy-purple hover:bg-udemy-darkPurple text-white'
                      }`}
                    >
                      {isInCart ? 'View in Cart' : 'Add to cart'}
                    </button>

                    <button 
                      onClick={() => startLearning(selectedCourse.id)}
                      className="w-full border-2 border-udemy-charcoal hover:bg-gray-100 text-udemy-charcoal font-bold text-sm py-3 rounded-lg transition cursor-pointer"
                    >
                      Buy now (Instant Enroll)
                    </button>
                  </>
                )}

                <div className="flex items-center justify-center pt-2">
                  <button 
                    onClick={() => toggleWishlist(selectedCourse.id)}
                    className="text-xs font-semibold text-gray-700 hover:text-udemy-purple flex items-center gap-1.5 cursor-pointer py-1"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'text-red-500 fill-current' : ''}`} />
                    <span>{isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}</span>
                  </button>
                </div>
              </div>

              {/* Guarantees & Features Checklist */}
              <div className="border-t border-gray-100 pt-4 space-y-2.5 text-xs text-gray-700">
                <p className="font-bold text-udemy-charcoal">This course includes:</p>
                <div className="flex items-center gap-2.5">
                  <PlayCircle className="w-4 h-4 text-gray-500" />
                  <span>On-demand HD streaming video</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <InfinityIcon className="w-4 h-4 text-gray-500" />
                  <span>Full lifetime access</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-4 h-4 text-gray-500" />
                  <span>Access on mobile and TV</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-gray-500" />
                  <span>Certificate of completion</span>
                </div>
                <div className="flex items-center gap-2.5 text-emerald-700 font-semibold pt-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>30-Day Money-Back Guarantee</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Video Preview Modal */}
      {isPreviewModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-gray-700 animate-in fade-in zoom-in-95 duration-200">
            <div className="p-4 border-b border-gray-800 flex items-center justify-between text-white">
              <div>
                <span className="text-xs text-purple-400 font-bold uppercase tracking-wider">Free Preview</span>
                <h3 className="font-bold text-sm sm:text-base line-clamp-1">{selectedCourse.title}</h3>
              </div>
              <button 
                onClick={() => setIsPreviewModalOpen(false)}
                className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video bg-black relative">
              <video 
                src={previewVideoUrl} 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-4 bg-gray-900 flex items-center justify-between">
              <span className="text-xs text-gray-400">Ready to unlock the full course?</span>
              <button 
                onClick={() => {
                  setIsPreviewModalOpen(false);
                  startLearning(selectedCourse.id);
                }}
                className="bg-udemy-purple hover:bg-udemy-darkPurple text-white text-xs font-bold px-4 py-2 rounded-lg transition cursor-pointer"
              >
                Enroll Now • ₹{selectedCourse.price}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
