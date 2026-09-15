import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/85 dark:bg-brand-950/85 border-b border-gray-200 dark:border-brand-800/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 dark:from-brand-500 dark:to-brand-900 flex items-center justify-center shadow-lg shadow-brand-600/30 text-white font-black text-xl border border-brand-400/40">
                    <i className="fa-solid fa-drumstick-bite text-white"></i>
                </div>
                <div>
                    <span className="text-xl font-black tracking-tight text-brand-700 dark:text-white block">پروتئین گل‌محمدی</span>
                    <span className="text-[11px] text-gray-500 dark:text-brand-300 font-light block -mt-1">زنجیره اختصاصی تأمین گوشت و استیک اعلا</span>
                </div>
            </div>

            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600 dark:text-gray-300">
                <a href="#story-wrapper" className="hover:text-accent-500 dark:hover:text-accent-400 transition-colors flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-500 animate-ping inline-block"></span>
                    داستان از مرتع تا بشقاب
                </a>
                <a href="#about-section" className="hover:text-brand-600 dark:hover:text-accent-400 transition-colors">درباره ما</a>
                <a href="#products-section" className="hover:text-brand-600 dark:hover:text-accent-400 transition-colors">برش‌های تخصصی</a>
                <a href="#standards-section" className="hover:text-brand-600 dark:hover:text-accent-400 transition-colors">زنجیره سرد</a>
                <a href="#calculator-section" className="hover:text-brand-600 dark:hover:text-accent-400 transition-colors">محاسبه‌گر سفارش</a>
                <a href="#faq-section" className="hover:text-brand-600 dark:hover:text-accent-400 transition-colors">سوالات متداول</a>
            </nav>

            <div className="flex items-center gap-3">
                <button onClick={toggleTheme} className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-brand-900/80 dark:hover:bg-brand-800 border border-gray-200 dark:border-brand-700 text-gray-700 dark:text-brand-200 flex items-center justify-center transition-all shadow-sm">
                    <i className="fa-solid fa-sun text-amber-500 dark:text-amber-300 text-base dark:hidden"></i>
                    <i className="fa-solid fa-moon text-brand-700 text-base hidden dark:block"></i>
                </button>
                <Link to="/admin/login" className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-brand-900/80 dark:hover:bg-brand-800 border border-gray-200 dark:border-brand-700 text-gray-700 dark:text-brand-200 flex items-center justify-center transition-all shadow-sm">
                    <ShoppingBag className="w-4 h-4" />
                </Link>
                <a href="#contact-section" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 text-white text-xs md:text-sm font-semibold shadow-lg shadow-brand-700/25 transition-all border border-brand-500/30 flex items-center gap-2">
                    <i className="fa-solid fa-phone text-xs"></i>
                    <span>مشاوره و خرید عمده</span>
                </a>
            </div>
        </div>

        <div className="w-full h-1 bg-gray-200 dark:bg-brand-950 relative">
            <div id="story-progress-bar" className="h-full bg-gradient-to-r from-brand-600 via-accent-500 to-amber-400 w-0 transition-all duration-75"></div>
        </div>
    </header>
  );
}
