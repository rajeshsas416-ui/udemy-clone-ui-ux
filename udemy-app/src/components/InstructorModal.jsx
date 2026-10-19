import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Plus, Trash2, Video, DollarSign, BookOpen } from 'lucide-react';
import { SAMPLE_VIDEOS } from '../data/courses';

export default function InstructorModal() {
  const { isInstructorModalOpen, setIsInstructorModalOpen, addCustomCourse, openCourseDetail } = useApp();

  const [title, setTitle] = useState('');
  const [headline, setHeadline] = useState('');
  const [category, setCategory] = useState('Development');
  const [price, setPrice] = useState(389);
  const [lectureTitle, setLectureTitle] = useState('Introduction & Overview');

  if (!isInstructorModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newId = `custom-${Date.now()}`;
    const newCourse = {
      id: newId,
      title,
      headline: headline || "Practical step-by-step masterclass with real-world applications.",
      rating: 5.0,
      ratingCount: 1,
      studentsCount: 1,
      instructor: {
        name: "You (Instructor)",
        role: "Expert Practitioner & Course Creator",
        rating: 5.0,
        reviews: "100+",
        students: "500+",
        courses: 1,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
        bio: "Passionate developer and educator sharing industry techniques and workflows."
      },
      lastUpdated: "10/2026",
      language: "English",
      subtitles: ["English [Auto]"],
      price: Number(price) || 389,
      originalPrice: (Number(price) || 389) * 8,
      discountPercent: 88,
      badge: "Hot & New",
      category,
      subCategory: "Software Engineering",
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      previewVideo: SAMPLE_VIDEOS.intro,
      whatYouWillLearn: [
        "Hands-on architectural foundations and best practices",
        "Build modular real-world applications",
        "Deploy and scale reliably to production"
      ],
      requirements: [
        "A computer with internet access and excitement to learn!"
      ],
      description: "An intensive course crafted to take you from foundational understanding to production competence.",
      curriculum: [
        {
          sectionId: `sec-${Date.now()}`,
          title: "Section 1: Course Kickoff & Core Concepts",
          lecturesCount: 1,
          totalDuration: "12m",
          lectures: [
            {
              id: `lec-${Date.now()}`,
              title: lectureTitle || "Introduction & Setup",
              duration: "12:00",
              preview: true,
              videoUrl: SAMPLE_VIDEOS.dev
            }
          ]
        }
      ],
      reviews: []
    };

    addCustomCourse(newCourse);
    setIsInstructorModalOpen(false);
    openCourseDetail(newId);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-200 animate-in fade-in zoom-in-95 duration-200">
        
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-udemy-lightPurple">
          <div>
            <span className="text-xs font-bold text-udemy-purple uppercase tracking-wider">Instructor Studio</span>
            <h3 className="text-lg font-bold text-udemy-charcoal">Create & Publish a New Course</h3>
          </div>
          <button 
            onClick={() => setIsInstructorModalOpen(false)}
            className="p-1 rounded-full text-gray-400 hover:text-gray-700 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Course Title</label>
            <input 
              type="text" 
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Master React 19 & Next.js Architecture"
              className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-udemy-purple"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Subtitle / Headline</label>
            <input 
              type="text" 
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              placeholder="e.g. Build fast, production-ready web applications from scratch"
              className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-udemy-purple"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Category</label>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-udemy-purple bg-white"
              >
                <option value="Development">Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Cloud & DevOps">Cloud & DevOps</option>
                <option value="Design">Design</option>
                <option value="Cybersecurity">Cybersecurity</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Price (₹)</label>
              <input 
                type="number" 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-udemy-purple"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">First Lecture Title</label>
            <input 
              type="text" 
              value={lectureTitle}
              onChange={(e) => setLectureTitle(e.target.value)}
              placeholder="e.g. Lecture 1: Architecture Overview"
              className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-udemy-purple"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3 border-t border-gray-100">
            <button 
              type="button"
              onClick={() => setIsInstructorModalOpen(false)}
              className="px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-lg transition cursor-pointer"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="bg-udemy-purple hover:bg-udemy-darkPurple text-white text-xs font-bold px-5 py-2.5 rounded-lg shadow-md transition cursor-pointer"
            >
              Publish to Catalog 🚀
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
