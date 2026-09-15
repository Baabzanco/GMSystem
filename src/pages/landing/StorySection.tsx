import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/src/lib/utils';

export default function StorySection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const isSeeking = useRef(false);
  const targetTime = useRef(0);
  const smoothTime = useRef(0);

  useEffect(() => {
    let animationFrameId: number;
    let videoDuration = 19; // Fallback duration

    const renderVideoScrub = () => {
      const vid = videoRef.current;
      if (vid) {
        if (vid.duration && !isNaN(vid.duration)) {
          videoDuration = vid.duration;
        }
        
        // Linear interpolation for smooth scrubbing
        smoothTime.current += (targetTime.current - smoothTime.current) * 0.15;
        
        // Only seek if difference is significant and not currently seeking
        if (Math.abs(vid.currentTime - smoothTime.current) > 0.05 && !isSeeking.current) {
          isSeeking.current = true;
          vid.currentTime = smoothTime.current;
        }

        // Update time display
        const curSec = Math.floor(vid.currentTime || 0);
        const durSec = Math.floor(videoDuration);
        const timeDisplay = document.getElementById('video-time-display');
        if (timeDisplay) {
          timeDisplay.textContent = `00:${curSec < 10 ? '0' + curSec : curSec} / 00:${durSec < 10 ? '0' + durSec : durSec}`;
        }
      }
      animationFrameId = requestAnimationFrame(renderVideoScrub);
    };

    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const wrapperTop = rect.top;
      const scrollDistance = wrapperRef.current.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) return;

      const rawProgress = -wrapperTop / scrollDistance;
      const prog = Math.min(Math.max(rawProgress, 0), 1);
      setProgress(prog);

      targetTime.current = prog * videoDuration;

      // Update navbar progress bar manually for performance
      const bar = document.getElementById('story-progress-bar');
      if (bar) bar.style.width = `${prog * 100}%`;
    };

    const vid = videoRef.current;
    if (vid) {
      vid.pause();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    animationFrameId = requestAnimationFrame(renderVideoScrub);
    
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const getCardClass = (start: number, end: number) => {
    // Exact continuous boundaries to prevent empty disappearing gaps
    const isActive = progress >= start && (progress < end || (end === 1 && progress === 1));
    if (isActive) return 'active';
    if (progress < start) return 'inactive-next';
    return 'inactive-prev';
  };

  const getChapterClass = (num: number) => {
    const currentChapter = Math.min(Math.floor(progress * 5) + 1, 5);
    return currentChapter === num;
  };

  const jumpToStoryProgress = (prog: number) => {
    if (!wrapperRef.current) return;
    const scrollDistance = wrapperRef.current.offsetHeight - window.innerHeight;
    const targetY = wrapperRef.current.offsetTop + (prog * scrollDistance);
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <section ref={wrapperRef} id="story-wrapper" className="relative w-full h-[550vh] bg-brand-950">
        <div id="story-sticky" className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-black">
            <video 
                ref={videoRef}
                id="story-video" 
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none transition-opacity duration-300"
                src="https://golmohamadi.com/wp-content/uploads/2026/09/Create-A-Single-Continuous-Cin-3.mp4"
                preload="auto" 
                muted 
                playsInline
                onSeeked={() => isSeeking.current = false}
                onLoadedMetadata={() => {
                   if (videoRef.current) {
                       videoRef.current.currentTime = 0.01;
                       videoRef.current.pause();
                   }
                }}
            ></video>

            <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/40 to-brand-950/70 pointer-events-none"></div>
            <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/20 to-black/75 pointer-events-none"></div>

            <div className="absolute top-24 right-6 z-30 flex items-center gap-2 bg-brand-900/80 dark:bg-brand-900/80 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-brand-700/50 shadow-2xl text-xs text-white">
                <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span id="video-time-display">00:00 / 00:19</span>
                </span>
                <span className="text-brand-400 ml-2">|</span>
                <span className="text-accent-300 mr-2 flex items-center gap-1.5 hidden sm:flex">
                    <i className="fa-solid fa-film"></i>
                    ویدیو آنلاین
                </span>
            </div>

            <div className="absolute left-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-5 bg-brand-950/80 backdrop-blur-md p-4 rounded-3xl border border-brand-800/80 shadow-2xl text-white">
                <div className="text-[11px] font-bold text-brand-300 text-center tracking-wider pb-1 border-b border-brand-800/60">فصل‌ها</div>
                {[
                  { id: 1, p: 0.00, label: 'مرتع و پرورش' },
                  { id: 2, p: 0.20, label: 'برش تخصصی' },
                  { id: 3, p: 0.40, label: 'زنجیره سرد' },
                  { id: 4, p: 0.60, label: 'هنر سرآشپز' },
                  { id: 5, p: 0.80, label: 'ضیافت طعم' },
                ].map(chap => (
                  <button key={chap.id} onClick={() => jumpToStoryProgress(chap.p)} className="chapter-dot group flex items-center gap-3 text-right text-xs">
                      <span className={cn("w-8 h-8 rounded-full border flex items-center justify-center font-bold transition-all", getChapterClass(chap.id) ? "bg-accent-500 text-white border-accent-400" : "bg-brand-900 border-brand-700 text-gray-300 group-hover:border-accent-500 group-hover:text-accent-400")}>{chap.id.toLocaleString('fa-IR')}</span>
                      <span className={cn("transition-colors", getChapterClass(chap.id) ? "text-accent-300 font-bold" : "text-gray-300 group-hover:text-white")}>{chap.label}</span>
                  </button>
                ))}
            </div>

            <div className="relative z-20 w-full max-w-4xl mx-auto px-6 h-full flex flex-col justify-between py-24 sm:py-28 pointer-events-none">
                <div className="flex items-center justify-center">
                    <div className="px-4 py-1.5 rounded-full bg-brand-950/70 border border-brand-700/60 backdrop-blur-md text-xs font-light text-brand-200 flex items-center gap-2">
                        <i className="fa-solid fa-route text-accent-400"></i>
                        <span>روایت تعاملی: برای سفر در جریان زنجیره تأمین به پایین اسکرول کنید</span>
                    </div>
                </div>

                <div className="relative w-full min-h-[220px] flex items-center justify-center">
                    
                    <div className={cn("story-card absolute w-full max-w-2xl bg-brand-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-brand-700 shadow-2xl text-white", getCardClass(0, 0.20))}>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">فصل اول • ریشه در طبیعت</span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 leading-snug">پرورش در پاک‌ترین مراتع سرسبز</h2>
                        <p className="text-brand-100 text-sm sm:text-base leading-relaxed mb-4 font-light">داستان کیفیت از مزارع باز و هوای پاک مراتع آغاز می‌شود. بدون مکمل‌های هورمونی و در چرخه‌ای مبتنی بر سلامت، دام‌هایی با بافت عضلانی بی‌نقص پرورش می‌یابند.</p>
                        <div className="flex items-center gap-4 text-xs text-brand-300 border-t border-brand-800/80 pt-3">
                            <span className="flex items-center gap-1.5"><i className="fa-solid fa-check text-emerald-400"></i> ۱۰۰٪ تغذیه طبیعی</span>
                            <span className="flex items-center gap-1.5"><i className="fa-solid fa-check text-emerald-400"></i> عاری از هورمون</span>
                        </div>
                    </div>

                    <div className={cn("story-card absolute w-full max-w-2xl bg-brand-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-brand-700 shadow-2xl text-white", getCardClass(0.20, 0.40))}>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent-500/20 text-accent-300 border border-accent-500/30">فصل دوم • دقت و بهداشت</span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 leading-snug">فرآوری استریل و برش‌های تخصصی</h2>
                        <p className="text-brand-100 text-sm sm:text-base leading-relaxed mb-4 font-light">در خطوط بهداشتی مکانیزه تحت نظارت مستقیم دامپزشکان، قطعه‌بندی با ابزارهای استاندارد روز دنیا انجام می‌گیرد تا رگه‌های مرمرین چربی کاملاً دست‌نخورده بماند.</p>
                    </div>

                    <div className={cn("story-card absolute w-full max-w-2xl bg-brand-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-brand-700 shadow-2xl text-white", getCardClass(0.40, 0.60))}>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">فصل سوم • سرمایش مداوم</span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 leading-snug">زنجیره سرد هوشمند تا آخرین متر</h2>
                        <p className="text-brand-100 text-sm sm:text-base leading-relaxed mb-4 font-light">بسته‌بندی وکیوم اسکین‌پک و ناوگان مجهز به دیتالاگر آنلاین، دمای استاندارد بین ۰ الی ۲ درجه سانتی‌گراد را حفظ کرده و طراوت گوشت گرم را نگه‌میدارد.</p>
                    </div>

                    <div className={cn("story-card absolute w-full max-w-2xl bg-brand-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-brand-700 shadow-2xl text-white", getCardClass(0.60, 0.80))}>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">فصل چهارم • عیارسنجی تخصصی</span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 leading-snug">ورود به قلمرو سرآشپزان بنام</h2>
                        <p className="text-brand-100 text-sm sm:text-base leading-relaxed mb-4 font-light">سرآشپز با لمس بافت ارتجاعی و مشاهده توزیع متوازن چربی مرمرین، نشان اصالت محصول را تأیید می‌کند؛ گوشتی آماده برای خلق تجربه‌ای به‌یادماندنی.</p>
                    </div>

                    <div className={cn("story-card absolute w-full max-w-2xl bg-brand-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-brand-700 shadow-2xl text-white", getCardClass(0.80, 1.00))}>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent-500/20 text-accent-300 border border-accent-500/40">فصل پنجم • کمال در طعم</span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 leading-snug">شاهکار نهایی در بشقاب شما</h2>
                        <p className="text-brand-100 text-sm sm:text-base leading-relaxed mb-4 font-light">صدای دلنشین جلز و ولز در تابه، کاراملی شدن لایه رویی و بافتی بی‌نهایت ترد و آبدار. اکنون سفر به کمال رسید و ضیافت طعم آغاز می‌شود!</p>
                        <div className="flex items-center gap-3 pt-2">
                            <a href="#about-section" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-lg shadow-brand-700/30 pointer-events-auto">
                                <span>ورود به کاتالوگ و سفارش</span>
                                <i className="fa-solid fa-arrow-down"></i>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col items-center justify-center gap-2 text-brand-200 mt-8 pointer-events-auto">
                    <div className="text-xs font-medium flex items-center gap-2 animate-bounce">
                        <i className="fa-solid fa-arrow-down-long text-accent-400"></i>
                        <span>برای ادامه ورق زدن داستان به پایین اسکرول کنید</span>
                        <i className="fa-solid fa-arrow-down-long text-accent-400"></i>
                    </div>
                    <div className="w-24 h-1 rounded-full bg-brand-800/80 overflow-hidden">
                        <div className="h-full bg-accent-500 transition-all duration-75" style={{ width: `${progress * 100}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
