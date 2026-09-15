import React, { useState } from 'react';
import { useAppStore } from '@/src/store/appStore';
import { cn } from '@/src/lib/utils';

export default function ProductsSection() {
  const products = useAppStore(state => state.products);
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all' ? products : products.filter(p => p.category === filter);

  return (
    <section id="products-section" className="py-28 relative bg-gray-100/60 dark:bg-brand-950/60 border-t border-gray-200 dark:border-brand-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                    <span className="text-accent-600 dark:text-accent-400 text-sm font-black tracking-widest uppercase mb-3 block">کاتالوگ محصولات ممتاز</span>
                    <h2 className="text-3xl sm:text-5xl font-black text-brand-900 dark:text-white leading-tight">
                        برش‌های آناتومیک اختصاصی استیک و پروتئین
                    </h2>
                </div>
                
                <div className="flex items-center gap-2 p-1.5 bg-white dark:bg-brand-900 rounded-2xl border border-gray-200 dark:border-brand-800 self-start md:self-auto overflow-x-auto max-w-full shadow-sm">
                    {['all', 'steak', 'lamb', 'b2b'].map(cat => (
                      <button 
                        key={cat}
                        onClick={() => setFilter(cat)} 
                        className={cn("px-4 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap", filter === cat ? "bg-brand-600 text-white font-bold" : "text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-white")}
                      >
                        {cat === 'all' ? 'همه برش‌ها' : cat === 'steak' ? 'استیک و گریل' : cat === 'lamb' ? 'گوشت بره تازه' : 'بسته‌های رستورانی'}
                      </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((prod) => (
                  <div key={prod.id} className="product-item bg-white dark:bg-brand-900/70 rounded-3xl border border-gray-200 dark:border-brand-800 overflow-hidden hover:border-accent-500/60 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group shadow-sm">
                      <div>
                          <div className="relative h-60 bg-gradient-to-br from-brand-50 to-brand-100 dark:from-brand-950 dark:to-brand-900 flex items-center justify-center overflow-hidden">
                              {prod.badge && (
                                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-accent-500 text-white text-xs font-black shadow-md">
                                  {prod.badge}
                                </div>
                              )}
                              <div className="w-36 h-36 rounded-full bg-white dark:bg-brand-800/50 border border-brand-200 dark:border-brand-700 flex items-center justify-center text-6xl text-brand-600 dark:text-brand-300 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-sm">
                                  <i className={prod.icon || "fa-solid fa-bacon"}></i>
                              </div>
                              {prod.grade && (
                                <div className="absolute bottom-3 left-4 text-xs font-medium text-brand-800 dark:text-amber-300 bg-white/90 dark:bg-black/60 px-3 py-1 rounded-lg backdrop-blur-md border border-gray-200 dark:border-white/5">
                                    <i className="fa-solid fa-star text-amber-500 mr-1"></i> {prod.grade}
                                </div>
                              )}
                          </div>
                          <div className="p-6">
                              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-accent-500 transition-colors">{prod.title}</h3>
                              <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-4">
                                  {prod.description}
                              </p>
                              <div className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300 mb-6 bg-gray-50 dark:bg-brand-950/60 p-3.5 rounded-xl border border-gray-100 dark:border-brand-800">
                                  {prod.thickness && <div className="flex justify-between"><span>ویژگی اول:</span> <span className="font-bold text-brand-800 dark:text-white">{prod.thickness}</span></div>}
                                  {prod.packaging && <div className="flex justify-between"><span>ویژگی دوم:</span> <span className="font-bold text-brand-800 dark:text-white">{prod.packaging}</span></div>}
                              </div>
                          </div>
                      </div>
                      <div className="p-6 pt-0 flex items-center justify-between border-t border-gray-100 dark:border-brand-800 mt-auto">
                          <div>
                              <span className="text-[11px] text-gray-500 dark:text-gray-400 block">قیمت ویژه هر کیلو:</span>
                              <span className="text-lg font-black text-brand-700 dark:text-emerald-400">{prod.price || 'استعلام تماس'}</span>
                          </div>
                          <a href="#contact-section" className="px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-md">
                              <i className="fa-solid fa-cart-plus"></i>
                              <span>سفارش برش</span>
                          </a>
                      </div>
                  </div>
                ))}
            </div>
        </div>
    </section>
  );
}
