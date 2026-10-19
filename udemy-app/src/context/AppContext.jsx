import React, { createContext, useContext, useState, useEffect } from 'react';
import { COURSES } from '../data/courses';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [courses, setCourses] = useState(COURSES);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  // Give user 1 pre-enrolled course so they can jump straight into the video learning dashboard!
  const [enrolledCourses, setEnrolledCourses] = useState([
    {
      courseId: "web-dev-bootcamp",
      enrolledAt: new Date().toLocaleDateString(),
      progressPercent: 25,
      completedLectures: ["l1"]
    }
  ]);
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'course-detail' | 'player' | 'cart' | 'my-learning'
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [activeLectureId, setActiveLectureId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isInstructorModalOpen, setIsInstructorModalOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  const selectedCourse = courses.find(c => c.id === selectedCourseId) || courses[0];

  const addToCart = (course) => {
    if (cart.some(item => item.id === course.id)) {
      showNotification('Course is already in your cart', 'info');
      return;
    }
    if (enrolledCourses.some(item => item.courseId === course.id)) {
      showNotification('You are already enrolled in this course!', 'info');
      return;
    }
    setCart(prev => [...prev, course]);
    showNotification(`"${course.title.slice(0, 30)}..." added to cart!`);
  };

  const removeFromCart = (courseId) => {
    setCart(prev => prev.filter(item => item.id !== courseId));
    showNotification('Item removed from cart', 'info');
  };

  const toggleWishlist = (courseId) => {
    setWishlist(prev => {
      const exists = prev.includes(courseId);
      if (exists) {
        showNotification('Removed from Wishlist', 'info');
        return prev.filter(id => id !== courseId);
      } else {
        showNotification('Added to Wishlist!', 'success');
        return [...prev, courseId];
      }
    });
  };

  const enrollCourse = (courseId) => {
    if (enrolledCourses.some(item => item.courseId === courseId)) {
      return;
    }
    const targetCourse = courses.find(c => c.id === courseId);
    setEnrolledCourses(prev => [
      ...prev,
      {
        courseId,
        enrolledAt: new Date().toLocaleDateString(),
        progressPercent: 0,
        completedLectures: []
      }
    ]);
    // remove from cart if present
    setCart(prev => prev.filter(item => item.id !== courseId));
    showNotification(`Successfully enrolled in ${targetCourse?.title}! 🎉`);
  };

  const checkoutAllInCart = () => {
    cart.forEach(c => {
      if (!enrolledCourses.some(item => item.courseId === c.id)) {
        enrollCourse(c.id);
      }
    });
    setCart([]);
    showNotification('Order completed! Courses added to My Learning 🚀');
    setCurrentView('my-learning');
  };

  const openCourseDetail = (courseId) => {
    setSelectedCourseId(courseId);
    setCurrentView('course-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startLearning = (courseId, lectureId = null) => {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;

    // Auto enroll if not already
    if (!enrolledCourses.some(e => e.courseId === courseId)) {
      enrollCourse(courseId);
    }

    setSelectedCourseId(courseId);
    const firstLectureId = lectureId || course.curriculum[0]?.lectures[0]?.id;
    setActiveLectureId(firstLectureId);
    setCurrentView('player');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLectureCompletion = (courseId, lectureId) => {
    setEnrolledCourses(prev => prev.map(item => {
      if (item.courseId !== courseId) return item;

      const alreadyCompleted = item.completedLectures.includes(lectureId);
      const newCompleted = alreadyCompleted
        ? item.completedLectures.filter(id => id !== lectureId)
        : [...item.completedLectures, lectureId];

      // Calculate new percentage
      const targetCourse = courses.find(c => c.id === courseId);
      let totalLectures = 0;
      targetCourse?.curriculum.forEach(sec => {
        totalLectures += sec.lectures.length;
      });
      const progressPercent = totalLectures > 0 ? Math.round((newCompleted.length / totalLectures) * 100) : 0;

      return {
        ...item,
        completedLectures: newCompleted,
        progressPercent
      };
    }));
  };

  const addCustomCourse = (newCourse) => {
    setCourses(prev => [newCourse, ...prev]);
    showNotification(`New course "${newCourse.title}" published successfully! 🚀`);
  };

  return (
    <AppContext.Provider
      value={{
        courses,
        cart,
        wishlist,
        enrolledCourses,
        currentView,
        setCurrentView,
        selectedCourse,
        selectedCourseId,
        activeLectureId,
        setActiveLectureId,
        searchQuery,
        setSearchQuery,
        activeCategory,
        setActiveCategory,
        isInstructorModalOpen,
        setIsInstructorModalOpen,
        notification,
        addToCart,
        removeFromCart,
        toggleWishlist,
        enrollCourse,
        checkoutAllInCart,
        openCourseDetail,
        startLearning,
        toggleLectureCompletion,
        addCustomCourse
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
