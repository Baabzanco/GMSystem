import React from 'react';

export default function AboutSection() {
  return (
    <section id="about-section" className="py-28 relative bg-white dark:bg-brand-950 border-t border-gray-200 dark:border-brand-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="text-accent-600 dark:text-accent-400 text-sm font-black tracking-widest uppercase mb-3 block">درباره پروتئین گل‌محمدی</span>
                <h2 className="text-3xl sm:text-5xl font-black text-brand-900 dark:text-white leading-tight mb-6">
                    کیفیت تصادفی نیست؛ حاصل یک زنجیره بی‌پایان از دقت است
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                    ما در پروتئین گل‌محمدی با تکیه بر اصالت تأمین مستقیم و چاشنی نوآوری و تمایز، پیوند مستقیمی میان دامداری‌های نمونه کشور و معتبرترین آشپزخانه‌ها، کترینگ‌های صنعتی و مصرف‌کنندگان خاص برقرار کرده‌ایم.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white dark:bg-brand-900/60 p-8 rounded-3xl border border-gray-200 dark:border-brand-800 hover:border-accent-500/50 hover:-translate-y-2 transition-all duration-300 group shadow-sm hover:shadow-xl dark:shadow-none">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-800 text-brand-600 dark:text-brand-300 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-accent-500 group-hover:text-white transition-all">
                        <i className="fa-solid fa-dna"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">ماربلینگ و بافت طلایی</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">انتخاب نژادهای برتر گوشتی با ضریب پراکندگی متوازن چربی درون‌بافتی...</p>
                </div>
                <div className="bg-white dark:bg-brand-900/60 p-8 rounded-3xl border border-gray-200 dark:border-brand-800 hover:border-accent-500/50 hover:-translate-y-2 transition-all duration-300 group shadow-sm hover:shadow-xl dark:shadow-none">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-800 text-brand-600 dark:text-brand-300 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-accent-500 group-hover:text-white transition-all">
                        <i className="fa-solid fa-temperature-arrow-down"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">زنجیره سرد گسست‌ناپذیر</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">تجهیز خودروهای توزیع به دیتالاگر آنلاین که دمای کانتینر را به صورت لحظه‌ای پایش کرده...</p>
                </div>
                <div className="bg-white dark:bg-brand-900/60 p-8 rounded-3xl border border-gray-200 dark:border-brand-800 hover:border-accent-500/50 hover:-translate-y-2 transition-all duration-300 group shadow-sm hover:shadow-xl dark:shadow-none">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-800 text-brand-600 dark:text-brand-300 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-accent-500 group-hover:text-white transition-all">
                        <i className="fa-solid fa-stamp"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">شناسنامه و کد رهگیری</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">هر بسته دارای بارکد و اطلاعات دقیق تاریخ ذبح، مزرعه مبدأ، تأییدیه دامپزشک ناظر است.</p>
                </div>
                <div className="bg-white dark:bg-brand-900/60 p-8 rounded-3xl border border-gray-200 dark:border-brand-800 hover:border-accent-500/50 hover:-translate-y-2 transition-all duration-300 group shadow-sm hover:shadow-xl dark:shadow-none">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-800 text-brand-600 dark:text-brand-300 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-accent-500 group-hover:text-white transition-all">
                        <i className="fa-solid fa-hand-holding-dollar"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">قیمت دست‌اول رقابتی</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">حذف واسطه‌ها و دلال‌های سنتی؛ تضمین اقتصادی‌ترین قیمت تمام‌شده برای رستوران‌ها.</p>
                </div>
            </div>

            <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-50 via-white to-brand-50 dark:from-brand-900/70 dark:via-brand-950 dark:to-brand-900/70 border border-gray-200 dark:border-brand-800 grid grid-cols-2 md:grid-cols-4 gap-8 text-center shadow-sm">
                <div>
                    <div className="text-3xl sm:text-5xl font-black text-brand-600 dark:text-accent-400 mb-2">+۱۵</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">سال سابقه تخصصی</div>
                </div>
                <div>
                    <div className="text-3xl sm:text-5xl font-black text-brand-600 dark:text-accent-400 mb-2">+۴۸۰</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">رستوران طرف قرارداد</div>
                </div>
                <div>
                    <div className="text-3xl sm:text-5xl font-black text-brand-600 dark:text-accent-400 mb-2">۱۰۰٪</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">تضمین مرجوعی</div>
                </div>
                <div>
                    <div className="text-3xl sm:text-5xl font-black text-brand-600 dark:text-accent-400 mb-2">&lt; ۳ ساعت</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">زمان تحویل گرم</div>
                </div>
            </div>
        </div>
    </section>
  );
}
