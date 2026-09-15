import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  }

  const faqs = [
    { q: "آیا گوشت‌ها منجمد تحویل می‌شوند یا گرم و تازه؟", a: "تمام محصولات تحویلی به رستوران‌ها و مشتریان گرامی از دام‌های کشتار روز بوده و در بازه دمایی ۰ الی ۲ درجه سانتی‌گراد (گوشت گرم و تازه) با ناوگان اختصاصی ارسال می‌گردد." },
    { q: "حداقل حجم سفارش برای دریافت نمونه تستی رایگان چقدر است؟", a: "مدیران رستوران‌ها و کترینگ‌ها پس از ثبت درخواست مشاوره، می‌توانند یک پک تستی ۲ الی ۳ کیلوگرمی از استیک یا برش درخواستی را به صورت رایگان دریافت کنند." },
    { q: "آیا امکان برش با ضخامت سفارشی برای هر رستوران وجود دارد؟", a: "بله، تیم قصابی صنعتی ما قادر است استیک‌ها را در ضخامت‌های ۲.۵، ۳.۵ یا ۴ سانتی‌متر و با وزن پرسی دقیق طبق استاندارد منوی شما بسته‌بندی کند." }
  ]

  return (
    <section id="faq-section" className="py-24 relative bg-white dark:bg-brand-950 border-t border-gray-200 dark:border-brand-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-accent-600 dark:text-accent-400 text-xs font-black tracking-widest uppercase mb-2 block">پاسخ به سوالات شما</span>
                <h2 className="text-3xl font-extrabold text-brand-900 dark:text-white">سوالات متداول</h2>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 dark:bg-brand-900/60 rounded-2xl border border-gray-200 dark:border-brand-800 overflow-hidden">
                      <button onClick={() => toggle(idx)} className="w-full px-6 py-4 text-right flex items-center justify-between text-gray-900 dark:text-white font-bold text-sm sm:text-base focus:outline-none">
                          <span>{faq.q}</span>
                          <i className={cn("fa-solid fa-chevron-down text-accent-500 text-xs transition-transform duration-300", openIndex === idx && 'rotate-180')}></i>
                      </button>
                      {openIndex === idx && (
                        <div className="px-6 pb-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-200 dark:border-brand-800 pt-3">
                            {faq.a}
                        </div>
                      )}
                  </div>
                ))}
            </div>
        </div>
    </section>
  )
}
