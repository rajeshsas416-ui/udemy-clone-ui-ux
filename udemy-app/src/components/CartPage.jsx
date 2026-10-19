import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Trash2, Heart, ArrowRight, Tag, ShieldCheck, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, toggleWishlist, wishlist, checkoutAllInCart, setCurrentView, courses, openCourseDetail } = useApp();
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0); // in percent
  const [couponMessage, setCouponMessage] = useState(null);

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const originalSubtotal = cart.reduce((acc, item) => acc + item.originalPrice, 0);
  const finalTotal = Math.round(subtotal * (1 - appliedDiscount / 100));

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'UDEMY2026' || couponCode.toUpperCase() === 'SPECIAL') {
      setAppliedDiscount(20);
      setCouponMessage({ text: 'Coupon UDEMY2026 applied! Extra 20% discount!', type: 'success' });
    } else {
      setCouponMessage({ text: 'Invalid coupon code. Try "UDEMY2026"', type: 'error' });
    }
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-[1400px] mx-auto px-4 py-16 text-center">
        <div className="w-24 h-24 bg-udemy-lightPurple rounded-full flex items-center justify-center mx-auto text-udemy-purple mb-4">
          <ShoppingBag className="w-12 h-12" />
        </div>
        <h2 className="text-2xl font-bold text-udemy-charcoal">Your cart is empty.</h2>
        <p className="text-sm text-gray-500 mt-2 mb-6">
          Explore thousands of world-class courses and build your skills today.
        </p>
        <button 
          onClick={() => setCurrentView('home')}
          className="bg-udemy-purple hover:bg-udemy-darkPurple text-white font-bold text-sm px-6 py-3 rounded-lg shadow-md transition cursor-pointer"
        >
          Keep Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold font-serif text-udemy-charcoal mb-6">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Cart Items */}
        <div className="lg:col-span-8 space-y-4">
          <p className="text-sm font-bold text-gray-700">
            {cart.length} {cart.length === 1 ? 'Course' : 'Courses'} in Cart
          </p>

          <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {cart.map((course) => {
              const isWishlisted = wishlist.includes(course.id);
              return (
                <div key={course.id} className="py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex gap-4 items-center cursor-pointer" onClick={() => openCourseDetail(course.id)}>
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-24 h-16 sm:w-32 sm:h-20 object-cover rounded-lg border border-gray-200 flex-shrink-0"
                    />
                    <div className="space-y-1">
                      <h3 className="font-bold text-sm text-udemy-charcoal hover:text-udemy-purple line-clamp-2 transition">
                        {course.title}
                      </h3>
                      <p className="text-xs text-gray-500">By {course.instructor.name}</p>
                      <div className="flex items-center gap-1.5 text-xs text-yellow-600 font-bold">
                        <span>★ {course.rating}</span>
                        <span className="text-gray-400 font-normal">({course.ratingCount.toLocaleString()} ratings)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2">
                    <div className="text-right">
                      <span className="text-lg font-extrabold text-udemy-purple">₹{course.price}</span>
                      <span className="text-xs text-gray-400 line-through ml-2">₹{course.originalPrice}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => removeFromCart(course.id)}
                        className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1 cursor-pointer transition font-medium"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Remove
                      </button>
                      <button 
                        onClick={() => toggleWishlist(course.id)}
                        className="text-xs text-gray-600 hover:text-udemy-purple flex items-center gap-1 cursor-pointer transition font-medium"
                      >
                        <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'text-red-500 fill-current' : ''}`} />
                        {isWishlisted ? 'Wishlisted' : 'Move to Wishlist'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Checkout Summary */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-2xl shadow-xl border border-udemy-border p-6 space-y-5 sticky top-24">
            <h2 className="text-lg font-bold text-udemy-charcoal">Order Summary</h2>

            <div className="space-y-2 border-b border-gray-100 pb-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Original Price</span>
                <span className="line-through">₹{originalSubtotal}</span>
              </div>
              <div className="flex justify-between text-sm text-emerald-600 font-semibold">
                <span>Discounts</span>
                <span>-₹{originalSubtotal - finalTotal}</span>
              </div>
              <div className="flex justify-between text-xl font-extrabold text-udemy-charcoal pt-2 border-t border-gray-100">
                <span>Total:</span>
                <span className="text-udemy-purple">₹{finalTotal}</span>
              </div>
            </div>

            {/* Coupon Code Input */}
            <form onSubmit={handleApplyCoupon} className="space-y-2">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter Coupon (UDEMY2026)"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-xs font-mono uppercase focus:outline-none focus:border-udemy-purple"
                />
                <button 
                  type="submit"
                  className="bg-gray-800 hover:bg-gray-900 text-white text-xs font-bold px-3 py-2 rounded-lg transition cursor-pointer"
                >
                  Apply
                </button>
              </div>
              {couponMessage && (
                <p className={`text-xs ${couponMessage.type === 'success' ? 'text-emerald-600' : 'text-red-500'}`}>
                  {couponMessage.text}
                </p>
              )}
            </form>

            <button 
              onClick={checkoutAllInCart}
              className="w-full bg-udemy-purple hover:bg-udemy-darkPurple text-white font-extrabold text-sm py-3.5 rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Complete Checkout (₹{finalTotal})</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-center text-xs text-gray-500 flex items-center justify-center gap-1.5 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>30-Day Money-Back Guarantee • Secure Checkout</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
