import { useState } from 'react';
import { useAppStore, Product } from '@/src/store/appStore';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export default function AdminProducts() {
  const products = useAppStore(state => state.products);
  const addProduct = useAppStore(state => state.addProduct);
  const updateProduct = useAppStore(state => state.updateProduct);
  const deleteProduct = useAppStore(state => state.deleteProduct);

  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    title: '',
    description: '',
    badge: '',
    icon: '',
    grade: '',
    thickness: '',
    packaging: '',
    price: '',
    category: 'steak',
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      updateProduct(isEditing, formData);
    } else {
      addProduct(formData);
    }
    setFormData({ title: '', description: '', badge: '', icon: '', grade: '', thickness: '', packaging: '', price: '', category: 'steak' });
    setIsEditing(null);
  };

  const handleEdit = (prod: Product) => {
    setIsEditing(prod.id);
    const { id, ...rest } = prod;
    setFormData(rest);
  };

  const handleDelete = (id: string) => {
    if (confirm('آیا از حذف این محصول اطمینان دارید؟')) {
      deleteProduct(id);
    }
  };

  return (
    <div dir="rtl">
      <h1 className="text-2xl font-black text-brand-900 dark:text-white mb-6">مدیریت محصولات</h1>
      
      <form onSubmit={handleSave} className="bg-white dark:bg-brand-900 p-6 rounded-2xl border border-gray-200 dark:border-brand-800 mb-8 space-y-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{isEditing ? 'ویرایش محصول' : 'افزودن محصول جدید'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">عنوان محصول</label>
            <Input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
          </div>
          <div>
            <label className="block text-sm mb-1">دسته‌بندی</label>
            <select className="flex h-10 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm dark:border-brand-700 dark:bg-brand-950" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
              <option value="steak">استیک و گریل</option>
              <option value="lamb">گوشت بره تازه</option>
              <option value="b2b">بسته‌های رستورانی</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">بج (Badge)</label>
            <Input value={formData.badge} onChange={e => setFormData({...formData, badge: e.target.value})} placeholder="مثل: پرفروش‌ترین استیک" />
          </div>
          <div>
            <label className="block text-sm mb-1">آیکون (FontAwesome class)</label>
            <Input value={formData.icon} onChange={e => setFormData({...formData, icon: e.target.value})} placeholder="fa-solid fa-bacon" dir="ltr" />
          </div>
          <div>
            <label className="block text-sm mb-1">نمره کیفیت / گرید</label>
            <Input value={formData.grade} onChange={e => setFormData({...formData, grade: e.target.value})} placeholder="مثل: نمره ماربلینگ A4+" />
          </div>
          <div>
            <label className="block text-sm mb-1">قیمت (هر کیلو)</label>
            <Input value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} placeholder="استعلام تماس / روز" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-1">توضیحات کوتاه</label>
            <textarea className="flex w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm dark:border-brand-700 dark:bg-brand-950" rows={2} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}></textarea>
          </div>
          <div>
            <label className="block text-sm mb-1">ویژگی اول (ضخامت/درجه)</label>
            <Input value={formData.thickness} onChange={e => setFormData({...formData, thickness: e.target.value})} placeholder="۳ تا ۴ سانتی‌متر" />
          </div>
          <div>
            <label className="block text-sm mb-1">ویژگی دوم (بسته‌بندی/بافت)</label>
            <Input value={formData.packaging} onChange={e => setFormData({...formData, packaging: e.target.value})} placeholder="وکیوم اسکین‌پک" />
          </div>
        </div>
        <div className="flex gap-2">
          <Button type="submit"><Plus className="w-4 h-4 ml-2" /> {isEditing ? 'ذخیره تغییرات' : 'افزودن محصول'}</Button>
          {isEditing && <Button type="button" variant="ghost" onClick={() => {setIsEditing(null); setFormData({ title: '', description: '', badge: '', icon: '', grade: '', thickness: '', packaging: '', price: '', category: 'steak' });}}>لغو</Button>}
        </div>
      </form>

      <div className="bg-white dark:bg-brand-900 rounded-2xl border border-gray-200 dark:border-brand-800 overflow-hidden">
        <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-brand-950 dark:text-gray-300">
            <tr>
              <th className="px-6 py-3">عنوان</th>
              <th className="px-6 py-3">دسته‌بندی</th>
              <th className="px-6 py-3">قیمت</th>
              <th className="px-6 py-3">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id} className="bg-white border-b dark:bg-brand-900 dark:border-brand-800">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {prod.title}
                </td>
                <td className="px-6 py-4">{prod.category}</td>
                <td className="px-6 py-4">{prod.price}</td>
                <td className="px-6 py-4 flex gap-2">
                  <button onClick={() => handleEdit(prod)} className="text-brand-600 hover:text-brand-800 dark:text-brand-400 dark:hover:text-white"><Edit2 className="w-4 h-4" /></button>
                  <button onClick={() => handleDelete(prod.id)} className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-white"><Trash2 className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center">محصولی یافت نشد.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
