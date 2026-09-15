import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { Button } from '@/src/components/ui/button';

export default function CalculatorSection() {
  const [weight, setWeight] = useState<number>(50);
  const [productType, setProductType] = useState('ribeye');
  const [userType, setUserType] = useState('restaurant');

  const productNames: Record<string, string> = {
    'ribeye': 'استیک ریب‌آی (Ribeye Steak)',
    'tenderloin': 'فیله گوساله تمیز (Tenderloin)',
    'lamb': 'راسته و شیشلیک بره گوسفندی',
    'burger': 'میکس گوشت برگر آرتیزان',
    'mixed_catering': 'پک میکس کترینگی (ران، راسته، چرخ‌کرده)'
  };

  const estPortions = Math.round(weight / 0.28);

  const transferToContactForm = () => {
    const detailInput = document.getElementById('contact-order-details') as HTMLInputElement;
    if (detailInput) {
        detailInput.value = `${weight} کیلوگرم ${productNames[productType]}`;
    }
    const contactSec = document.getElementById('contact-section');
    if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator-section" className="py-24 relative bg-white dark:bg-brand-950 border-t border-gray-200 dark:border-brand-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-b from-gray-50 to-white dark:from-brand-900 dark:to-brand-950 p-8 sm:p-14 rounded-3xl border border-gray-200 dark:border-brand-800 shadow-xl relative overflow-hidden">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="text-accent-600 dark:text-accent-400 text-xs font-black tracking-widest uppercase mb-2 block">ابزار هوشمند تخمین سفارش</span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-900 dark:text-white mb-3">محاسبه حجم مصرف و درخواست پیش‌فاکتور</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">حجم تقریبی مورد نیاز مجموعه خود را انتخاب کنید تا فوراً برآورد اولیه را دریافت کنید.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <div>
                            <label className="text-xs font-bold text-gray-700 dark:text-gray-300 block mb-2">نوع برش یا محصول مورد نظر:</label>
                            <select 
                              value={productType}
                              onChange={(e) => setProductType(e.target.value)}
                              className="w-full bg-white dark:bg-brand-950 border border-gray-300 dark:border-brand-700 rounded-xl px-4 py-3 text-sm text-gray-800 dark:text-white focus:outline-none focus:border-accent-500"
                            >
                                {Object.entries(productNames).map(([val, label]) => (
                                  <option key={val} value={val}>{label}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">میزان سفارش هفتگی / ماهانه:</label>
                                <span className="text-sm font-black text-accent-600 dark:text-accent-400"><span>{weight.toLocaleString('fa-IR')}</span> کیلوگرم</span>
                            </div>
                            <input 
                              type="range" min="10" max="1000" step="10" 
                              value={weight} 
                              onChange={(e) => setWeight(Number(e.target.value))} 
                              className="w-full h-2 bg-gray-200 dark:bg-brand-800 rounded-lg cursor-pointer" 
                            />
                            <div className="flex justify-between text-[11px] text-gray-500 dark:text-gray-400 mt-1">
                                <span>۱۰ کیلو (تستی)</span>
                                <span>۵۰۰ کیلو (رستوران متوسط)</span>
                                <span>+۱ تن (کترینگ بزرگ)</span>
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-bold text-gray-700 dark:text-gray-300 block mb-2">نوع کاربری شما:</label>
                            <div className="grid grid-cols-3 gap-2 text-xs">
                                {[{id: 'restaurant', label: 'رستوران / کافه'}, {id: 'catering', label: 'کترینگ صنعتی'}, {id: 'home', label: 'مصرف شخصی'}].map(u => (
                                  <button 
                                    key={u.id}
                                    onClick={() => setUserType(u.id)}
                                    className={cn("py-2.5 px-3 rounded-xl font-semibold transition-all border", userType === u.id ? "bg-accent-500/10 dark:bg-accent-500/20 text-accent-600 dark:text-accent-300 border-accent-500/30" : "bg-white dark:bg-brand-950 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-brand-800 font-medium")}
                                  >
                                    {u.label}
                                  </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-brand-950/80 p-8 rounded-2xl border border-gray-200 dark:border-brand-800 flex flex-col justify-between h-full shadow-md">
                        <div>
                            <div className="text-xs text-gray-500 dark:text-brand-300 font-medium mb-1">نتیجه برآورد اولیه:</div>
                            <div className="text-2xl font-black text-brand-800 dark:text-white mb-4">سفارش {weight.toLocaleString('fa-IR')} کیلوگرم {productNames[productType].split(' ')[0]}</div>
                            
                            <ul className="space-y-3 text-xs text-gray-600 dark:text-gray-300 mb-6">
                                <li className="flex items-center justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">تخمین تعداد پرس استیک:</span>
                                    <span className="font-bold text-accent-600 dark:text-accent-300">حدود {estPortions.toLocaleString('fa-IR')} الی {(estPortions + 30).toLocaleString('fa-IR')} پرس</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">ارسال با کانتینر یخچال‌دار:</span>
                                    <span className="font-bold text-emerald-600 dark:text-emerald-400">رایگان و تضمینی</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">نمونه تستی رایگان:</span>
                                    <span className="font-bold text-brand-700 dark:text-white">امکان ارسال ۲ کیلو سمپل تستی</span>
                                </li>
                            </ul>
                        </div>

                        <Button onClick={transferToContactForm} className="w-full py-3.5 h-12 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 text-white font-bold text-sm shadow-xl shadow-brand-700/20 transition-all border-none">
                            <i className="fa-solid fa-file-invoice-dollar ml-2"></i>
                            <span>دریافت پیش‌فاکتور رسمی و ارسال نمونه</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
