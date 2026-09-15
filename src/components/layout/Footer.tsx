import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-brand-950 border-t border-gray-200 dark:border-brand-800 py-12 text-gray-500 dark:text-gray-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold">
                    <i className="fa-solid fa-drumstick-bite"></i>
                </div>
                <span className="text-brand-900 dark:text-white font-bold text-sm">پروتئین گل‌محمدی</span>
                <span className="text-gray-400">|</span>
                <span>تأمین گوشت ممتاز و زنجیره سرد اختصاصی</span>
            </div>

            <div className="flex items-center gap-6">
                <a href="#story-wrapper" className="hover:text-brand-600 dark:hover:text-white transition-colors">بازگشت به بالای صفحه</a>
                <a href="#products-section" className="hover:text-brand-600 dark:hover:text-white transition-colors">کاتالوگ محصولات</a>
                <a href="#calculator-section" className="hover:text-brand-600 dark:hover:text-white transition-colors">محاسبه‌گر</a>
            </div>

            <div className="text-gray-500 text-[11px]">
                تمامی حقوق محفوظ است © ۲۰۲۶ — پروتئین گل‌محمدی
            </div>
        </div>
    </footer>
  );
}
