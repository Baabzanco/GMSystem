import { useAppStore } from '@/src/store/appStore';
import { Trash2 } from 'lucide-react';

export default function AdminOrders() {
  const inquiries = useAppStore(state => state.inquiries);
  const deleteInquiry = useAppStore(state => state.deleteInquiry);

  const handleDelete = (id: string) => {
    if (confirm('آیا از حذف این استعلام اطمینان دارید؟')) {
      deleteInquiry(id);
    }
  };

  return (
    <div dir="rtl">
      <h1 className="text-2xl font-black text-brand-900 dark:text-white mb-6">مدیریت سفارشات و استعلام‌ها</h1>
      
      <div className="bg-white dark:bg-brand-900 rounded-2xl border border-gray-200 dark:border-brand-800 overflow-hidden">
        <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-brand-950 dark:text-gray-300">
            <tr>
              <th className="px-6 py-3">نام</th>
              <th className="px-6 py-3">شماره تماس</th>
              <th className="px-6 py-3">رستوران/مجموعه</th>
              <th className="px-6 py-3">جزئیات سفارش</th>
              <th className="px-6 py-3">توضیحات تکمیلی</th>
              <th className="px-6 py-3">تاریخ</th>
              <th className="px-6 py-3">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inq) => (
              <tr key={inq.id} className="bg-white border-b dark:bg-brand-900 dark:border-brand-800">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{inq.name}</td>
                <td className="px-6 py-4 font-mono text-left" dir="ltr">{inq.phone}</td>
                <td className="px-6 py-4">{inq.restaurant || '-'}</td>
                <td className="px-6 py-4">{inq.details}</td>
                <td className="px-6 py-4">{inq.comments || '-'}</td>
                <td className="px-6 py-4">
                  {new Date(inq.createdAt).toLocaleString('fa-IR')}
                </td>
                <td className="px-6 py-4">
                  <button onClick={() => handleDelete(inq.id)} className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-white"><Trash2 className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
            {inquiries.length === 0 && (
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center">استعلامی یافت نشد.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
