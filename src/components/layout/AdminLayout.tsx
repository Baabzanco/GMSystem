import { Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import { useAppStore } from '@/src/store/appStore';
import { LayoutDashboard, ShoppingBag, LogOut } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function AdminLayout() {
  const isAuthenticated = useAppStore(state => state.isAuthenticated);
  const logout = useAppStore(state => state.logout);
  const location = useLocation();

  if (!isAuthenticated) return <Navigate to="/admin/login" />;

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-brand-950 font-sans">
      <aside className="w-64 bg-white dark:bg-brand-900 border-l border-gray-200 dark:border-brand-800 flex flex-col fixed inset-y-0 right-0">
        <div className="h-20 flex items-center px-6 border-b border-gray-200 dark:border-brand-800">
          <span className="text-lg font-black text-brand-700 dark:text-white">پنل مدیریت (لوکال)</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/admin" className={cn("flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors", location.pathname === '/admin' ? "bg-brand-50 text-brand-700 dark:bg-brand-800 dark:text-white" : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-brand-800/50")}>
            <LayoutDashboard className="w-5 h-5" /> داشبورد
          </Link>
          <Link to="/admin/products" className={cn("flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors", location.pathname.includes('/admin/products') ? "bg-brand-50 text-brand-700 dark:bg-brand-800 dark:text-white" : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-brand-800/50")}>
            <ShoppingBag className="w-5 h-5" /> مدیریت فروشگاه
          </Link>
          <Link to="/admin/orders" className={cn("flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors", location.pathname.includes('/admin/orders') ? "bg-brand-50 text-brand-700 dark:bg-brand-800 dark:text-white" : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-brand-800/50")}>
            <ShoppingBag className="w-5 h-5" /> سفارشات و استعلام‌ها
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-brand-800">
          <button onClick={() => logout()} className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
            <LogOut className="w-5 h-5" /> خروج
          </button>
        </div>
      </aside>
      <main className="flex-1 mr-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}
