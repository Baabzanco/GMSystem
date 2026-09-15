import { useAppStore } from '@/src/store/appStore';

export default function AdminDashboard() {
  const productCount = useAppStore(state => state.products.length);
  const inquiryCount = useAppStore(state => state.inquiries.length);

  return (
    <div dir="rtl">
      <h1 className="text-2xl font-black text-brand-900 dark:text-white mb-6">داشبورد</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-brand-900 p-6 rounded-2xl border border-gray-200 dark:border-brand-800 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">تعداد محصولات</h3>
          <p className="text-3xl font-black text-brand-700 dark:text-white">{productCount}</p>
        </div>
        <div className="bg-white dark:bg-brand-900 p-6 rounded-2xl border border-gray-200 dark:border-brand-800 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">سفارشات/استعلام‌ها</h3>
          <p className="text-3xl font-black text-brand-700 dark:text-white">{inquiryCount}</p>
        </div>
      </div>
    </div>
  );
}
