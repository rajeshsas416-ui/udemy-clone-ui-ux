import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Play, 
  Pause, 
  CheckCircle2, 
  Circle, 
  ChevronDown, 
  ChevronLeft, 
  ArrowLeft, 
  Award, 
  FileText, 
  MessageSquare, 
  Share2, 
  Download,
  RotateCcw,
  Volume2,
  Maximize2,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LearningPlayer() {
  const { 
    selectedCourse, 
    setCurrentView, 
    enrolledCourses, 
    toggleLectureCompletion,
    activeLectureId,
    setActiveLectureId
  } = useApp();

  const videoRef = useRef(null);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'notes' | 'qa'
  const [notes, setNotes] = useState([
    { id: 1, time: "02:15", text: "Key takeaway: Always use semantic HTML tags like <main> and <section> for SEO and accessibility." }
  ]);
  const [newNote, setNewNote] = useState('');
  const [expandedSections, setExpandedSections] = useState({ s1: true, s2: true, ml1: true, c1: true, u1: true, s1_h: true, p1: true });

  const enrollment = enrolledCourses.find(e => e.courseId === selectedCourse.id) || {
    completedLectures: [],
    progressPercent: 0
  };

  // Find active lecture
  let currentLecture = null;
  let allLecturesList = [];
  selectedCourse.curriculum.forEach(section => {
    section.lectures.forEach(lec => {
      allLecturesList.push({ ...lec, sectionTitle: section.title });
      if (lec.id === activeLectureId) {
        currentLecture = lec;
      }
    });
  });

  if (!currentLecture && allLecturesList.length > 0) {
    currentLecture = allLecturesList[0];
  }

  const isCurrentCompleted = enrollment.completedLectures.includes(currentLecture?.id);

  const handleNextLecture = () => {
    const currentIndex = allLecturesList.findIndex(l => l.id === currentLecture.id);
    if (currentIndex < allLecturesList.length - 1) {
      setActiveLectureId(allLecturesList[currentIndex + 1].id);
    }
  };

  const handlePreviousLecture = () => {
    const currentIndex = allLecturesList.findIndex(l => l.id === currentLecture.id);
    if (currentIndex > 0) {
      setActiveLectureId(allLecturesList[currentIndex - 1].id);
    }
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    const currentTimeStr = videoRef.current ? formatTime(videoRef.current.currentTime) : "00:00";
    setNotes(prev => [...prev, { id: Date.now(), time: currentTimeStr, text: newNote }]);
    setNewNote('');
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleCelebrateCompletion = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="bg-[#1c1d1f] text-white min-h-screen flex flex-col">
      
      {/* Top Header Navigation */}
      <header className="h-16 border-b border-gray-800 bg-[#1c1d1f] px-4 flex items-center justify-between z-20 flex-shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCurrentView('my-learning')}
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to My Learning
          </button>
          
          <div className="hidden sm:block">
            <h1 className="text-sm font-bold text-white line-clamp-1 max-w-lg">
              {selectedCourse.title}
            </h1>
            <p className="text-[11px] text-gray-400">
              Instructor: {selectedCourse.instructor.name}
            </p>
          </div>
        </div>

        {/* Progress & Certificate Badge */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>Your progress: {enrollment.progressPercent}%</span>
            </div>
            <div className="w-36 h-1.5 bg-gray-700 rounded-full overflow-hidden mt-1">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${enrollment.progressPercent}%` }}
              ></div>
            </div>
          </div>

          {enrollment.progressPercent === 100 ? (
            <button 
              onClick={handleCelebrateCompletion}
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-extrabold text-xs px-3.5 py-1.5 rounded-lg shadow flex items-center gap-1.5 transition cursor-pointer animate-pulse"
            >
              <Sparkles className="w-4 h-4" /> Claim Certificate!
            </button>
          ) : (
            <button 
              onClick={handleCelebrateCompletion}
              className="text-xs text-gray-400 hover:text-yellow-400 flex items-center gap-1 cursor-pointer transition"
              title="Preview Certificate celebration"
            >
              <Award className="w-4 h-4" />
              <span className="hidden sm:inline">Certificate Preview</span>
            </button>
          )}
        </div>
      </header>

      {/* Main Learning Grid */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left Column: Video Player & Lecture Tabs */}
        <div className="flex-1 flex flex-col overflow-y-auto bg-black">
          
          {/* HTML5 Video Player Container */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center">
            {currentLecture ? (
              <video 
                key={currentLecture.id}
                ref={videoRef}
                src={currentLecture.videoUrl} 
                controls 
                autoPlay 
                onEnded={() => {
                  toggleLectureCompletion(selectedCourse.id, currentLecture.id);
                  handleNextLecture();
                }}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="text-gray-500 text-sm">No lecture selected</div>
            )}
          </div>

          {/* Player Bottom Control Bar */}
          <div className="p-4 bg-[#1c1d1f] border-b border-gray-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs text-udemy-purple font-bold uppercase tracking-wider">
                Now Playing
              </span>
              <h2 className="text-lg font-bold text-white">
                {currentLecture?.title}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => toggleLectureCompletion(selectedCourse.id, currentLecture?.id)}
                className={`flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-lg transition cursor-pointer ${
                  isCurrentCompleted 
                    ? 'bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-600/40' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {isCurrentCompleted ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Circle className="w-4 h-4 text-gray-400" />}
                <span>{isCurrentCompleted ? 'Completed' : 'Mark as complete'}</span>
              </button>

              <div className="flex items-center gap-1">
                <button 
                  onClick={handlePreviousLecture}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold cursor-pointer transition"
                  title="Previous Lecture"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={handleNextLecture}
                  className="px-3 py-2 rounded-lg bg-udemy-purple hover:bg-udemy-darkPurple text-white text-xs font-bold cursor-pointer transition"
                >
                  Next Lecture →
                </button>
              </div>
            </div>
          </div>

          {/* Tabbed Content (Overview, Notes, Q&A) */}
          <div className="p-6 bg-white text-udemy-charcoal flex-1">
            <div className="flex items-center gap-6 border-b border-gray-200 pb-3 text-sm font-bold">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`cursor-pointer transition pb-1 ${activeTab === 'overview' ? 'text-udemy-purple border-b-2 border-udemy-purple' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('notes')}
                className={`cursor-pointer transition pb-1 flex items-center gap-1.5 ${activeTab === 'notes' ? 'text-udemy-purple border-b-2 border-udemy-purple' : 'text-gray-500 hover:text-gray-900'}`}
              >
                <FileText className="w-4 h-4" />
                Notes ({notes.length})
              </button>
              <button 
                onClick={() => setActiveTab('qa')}
                className={`cursor-pointer transition pb-1 flex items-center gap-1.5 ${activeTab === 'qa' ? 'text-udemy-purple border-b-2 border-udemy-purple' : 'text-gray-500 hover:text-gray-900'}`}
              >
                <MessageSquare className="w-4 h-4" />
                Q&A
              </button>
            </div>

            {/* Overview Tab Content */}
            {activeTab === 'overview' && (
              <div className="mt-4 space-y-4 max-w-3xl">
                <div>
                  <h3 className="font-bold text-base text-udemy-charcoal">About this lecture</h3>
                  <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                    In this session, we dive deep into practical code implementations. Make sure you have your local development environment running alongside the video.
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center gap-6 text-xs text-gray-600">
                  <span>Skill Level: All Levels</span>
                  <span>Students: {selectedCourse.studentsCount.toLocaleString()}</span>
                  <span>Languages: English</span>
                  <span>Captions: Yes</span>
                </div>
              </div>
            )}

            {/* Notes Tab Content */}
            {activeTab === 'notes' && (
              <div className="mt-4 space-y-4 max-w-2xl">
                <form onSubmit={handleAddNote} className="flex gap-2">
                  <input 
                    type="text" 
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Create a new note at current video timestamp..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-udemy-purple"
                  />
                  <button 
                    type="submit"
                    className="bg-udemy-purple hover:bg-udemy-darkPurple text-white text-xs font-bold px-4 py-2 rounded-lg transition cursor-pointer"
                  >
                    Save Note
                  </button>
                </form>

                <div className="space-y-2.5">
                  {notes.map(note => (
                    <div key={note.id} className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-start gap-3">
                      <span className="bg-udemy-purple text-white text-[11px] font-bold px-2 py-0.5 rounded">
                        {note.time}
                      </span>
                      <p className="text-xs text-gray-800 leading-relaxed">{note.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Q&A Tab */}
            {activeTab === 'qa' && (
              <div className="mt-4 space-y-3 max-w-2xl text-sm">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                    <span className="font-bold text-udemy-charcoal">Alex M.</span>
                    <span>3 days ago</span>
                  </div>
                  <p className="text-xs font-semibold text-gray-900">
                    What is the best way to handle token refresh in Next.js middleware?
                  </p>
                  <p className="text-xs text-gray-600 mt-2 pl-3 border-l-2 border-udemy-purple">
                    <strong>Dr. Angela Yu (Instructor):</strong> You can intercept expired JWTs in the middleware and issue a background refresh token exchange before passing the request forward.
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Right Column: Course Content Playlist Accordion */}
        <div className="w-full lg:w-96 bg-[#2d2f31] border-l border-gray-800 flex flex-col flex-shrink-0">
          <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-[#1c1d1f]">
            <h3 className="font-bold text-sm text-white">Course Content</h3>
            <span className="text-xs text-gray-400">
              {enrollment.completedLectures.length}/{allLecturesList.length} completed
            </span>
          </div>

          <div className="overflow-y-auto flex-1 divide-y divide-gray-800">
            {selectedCourse.curriculum.map((section) => {
              const isOpen = expandedSections[section.sectionId] !== false;
              return (
                <div key={section.sectionId}>
                  {/* Section Title Header */}
                  <button
                    onClick={() => setExpandedSections(prev => ({ ...prev, [section.sectionId]: !isOpen }))}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-800/80 transition cursor-pointer"
                  >
                    <div>
                      <h4 className="font-bold text-xs text-gray-200 leading-snug">
                        {section.title}
                      </h4>
                      <span className="text-[11px] text-gray-400">
                        {section.lectures.length} lectures • {section.totalDuration}
                      </span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Lecture List */}
                  {isOpen && (
                    <div className="bg-[#1c1d1f] divide-y divide-gray-800/50">
                      {section.lectures.map((lecture) => {
                        const isPlaying = lecture.id === currentLecture?.id;
                        const isDone = enrollment.completedLectures.includes(lecture.id);

                        return (
                          <div 
                            key={lecture.id}
                            onClick={() => setActiveLectureId(lecture.id)}
                            className={`p-3.5 pl-5 flex items-start gap-3 cursor-pointer transition text-xs ${
                              isPlaying 
                                ? 'bg-udemy-purple/20 border-l-4 border-udemy-purple text-white' 
                                : 'hover:bg-gray-800/50 text-gray-300'
                            }`}
                          >
                            {/* Checkbox */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleLectureCompletion(selectedCourse.id, lecture.id);
                              }}
                              className="mt-0.5 text-gray-400 hover:text-emerald-400 transition cursor-pointer"
                            >
                              {isDone ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 fill-emerald-950" />
                              ) : (
                                <Circle className="w-4 h-4 text-gray-500" />
                              )}
                            </button>

                            <div className="flex-1">
                              <p className={`font-medium line-clamp-2 ${isPlaying ? 'text-white font-bold' : ''}`}>
                                {lecture.title}
                              </p>
                              <div className="flex items-center gap-2 text-[11px] text-gray-400 mt-1">
                                <Play className="w-3 h-3 text-gray-400" />
                                <span>{lecture.duration}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
