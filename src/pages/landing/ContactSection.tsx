import React, { useState } from 'react';
import { useAppStore } from '@/src/store/appStore';
import { Input } from '@/src/components/ui/input';
import { Button } from '@/src/components/ui/button';

export default function ContactSection() {
  const addInquiry = useAppStore(state => state.addInquiry);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    restaurant: '',
    details: '',
    comments: ''
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addInquiry(formData);
    setSuccess(true);
    setFormData({ name: '', phone: '', restaurant: '', details: '', comments: '' });
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id="contact-section" className="py-24 relative bg-gray-100/70 dark:bg-brand-950/60 border-t border-gray-200 dark:border-brand-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-brand-900/80 p-8 sm:p-12 rounded-3xl border border-gray-200 dark:border-brand-800 shadow-xl relative">
                <div className="text-center max-w-xl mx-auto mb-10">
                    <span className="text-accent-600 dark:text-accent-400 text-xs font-black tracking-widest uppercase mb-2 block">ارتباط مستقیم با واحد بازرگانی</span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-900 dark:text-white mb-3">ثبت سفارش و دریافت سمپل</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">مشخصات خود را ثبت کنید؛ کارشناسان ما در سریع‌ترین زمان با شما تماس خواهند گرفت.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">نام و نام خانوادگی:</label>
                            <Input required placeholder="مثال: مهندس رضایی" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">شماره تماس مستقیم (موبایل):</label>
                            <Input required placeholder="۰۹۱۲..." type="tel" dir="ltr" className="text-left" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">نام مجموعه یا رستوران:</label>
                            <Input placeholder="مثال: کترینگ صنعتی..." value={formData.restaurant} onChange={e => setFormData({...formData, restaurant: e.target.value})} />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">نوع محصول و حجم تقریبی:</label>
                            <Input id="contact-order-details" placeholder="مثال: ۵۰ کیلو استیک ریب‌آی" value={formData.details} onChange={e => setFormData({...formData, details: e.target.value})} />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">توضیحات تکمیلی:</label>
                        <textarea rows={3} placeholder="توضیحات مربوط به زمان تحویل یا درخواست سمپل تستی..." className="w-full bg-gray-50 dark:bg-brand-950 border border-gray-300 dark:border-brand-700 rounded-xl px-4 py-3 text-sm text-gray-800 dark:text-white focus:outline-none focus:border-accent-500" value={formData.comments} onChange={e => setFormData({...formData, comments: e.target.value})}></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200 dark:border-brand-800">
                        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                            <i className="fa-solid fa-lock text-accent-500"></i>
                            <span>اطلاعات شما نزد ما کاملاً محرمانه خواهد ماند.</span>
                        </div>
                        <Button type="submit" className="w-full sm:w-auto px-8 h-12 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 shadow-xl shadow-brand-700/25 border-none">
                            <span>ارسال درخواست و هماهنگی سمپل</span>
                            <i className="fa-solid fa-paper-plane mr-2"></i>
                        </Button>
                    </div>
                </form>

                {success && (
                  <div className="mt-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm text-center">
                      <i className="fa-solid fa-circle-check ml-2"></i>
                      درخواست شما با موفقیت ثبت شد. به زودی با شما تماس خواهیم گرفت.
                  </div>
                )}
            </div>
        </div>
    </section>
  );
}
