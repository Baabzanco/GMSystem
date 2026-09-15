import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: string;
  title: string;
  description: string;
  badge: string;
  icon: string;
  grade: string;
  thickness: string;
  packaging: string;
  price: string;
  category: string;
}

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  restaurant: string;
  details: string;
  comments: string;
  createdAt: string;
}

interface AppState {
  isAuthenticated: boolean;
  products: Product[];
  inquiries: Inquiry[];
  login: () => void;
  logout: () => void;
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, product: Omit<Product, 'id'>) => void;
  deleteProduct: (id: string) => void;
  addInquiry: (inquiry: Omit<Inquiry, 'id' | 'createdAt'>) => void;
  deleteInquiry: (id: string) => void;
}

const defaultProducts: Product[] = [
  {
    id: '1',
    title: 'استیک ریب‌آی اعلا (Ribeye)',
    description: 'برگرفته از دنده‌های میانی گوساله جوان؛ دارای چشم چربی لطیف در مرکز و رگه‌های مرمرین فوق‌العاده. ایده‌آل برای تابه چدنی یا گریل زغالی.',
    badge: 'پرفروش‌ترین استیک',
    icon: 'fa-solid fa-bacon',
    grade: 'نمره ماربلینگ A4+',
    thickness: '۳ تا ۴ سانتی‌متر',
    packaging: 'وکیوم اسکین‌پک',
    price: 'استعلام تماس / روز',
    category: 'steak',
  },
  {
    id: '2',
    title: 'فیله گوساله تمیزشده (Tenderloin)',
    description: 'لذیذترین و عاری از هرگونه چربی مازاد و بافت پیوندی؛ مناسب استیک فیله‌مینیون، شاتوبریان و مدالیون‌های فاخر هتلی.',
    badge: 'نرم‌ترین بافت عضلانی',
    icon: 'fa-solid fa-drumstick-bite',
    grade: 'گوساله ممتاز نر پرواری',
    thickness: '۱۰۰٪ بدون چربی و رگ',
    packaging: 'فوق‌العاده لطیف',
    price: 'استعلام تماس / روز',
    category: 'steak',
  },
  {
    id: '3',
    title: 'راسته و شیشلیک گوسفندی',
    description: 'برگرفته از بره شیرخوار و نرینه پرواری دشت مغان؛ استخوان دنده فرنچ‌شده و بافت گوشتی بسیار لذیذ و بدون بو.',
    badge: 'بره نرینه تازه',
    icon: 'fa-solid fa-wheat-awn',
    grade: 'کشتار روز تهران',
    thickness: 'گرم، ترد و زودپز',
    packaging: 'کباب شیشلیک و کباب برگ',
    price: 'استعلام تماس / روز',
    category: 'lamb',
  }
];

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      products: defaultProducts,
      inquiries: [],
      login: () => set({ isAuthenticated: true }),
      logout: () => set({ isAuthenticated: false }),
      addProduct: (prod) => set((state) => ({ products: [...state.products, { ...prod, id: Date.now().toString() }] })),
      updateProduct: (id, updated) => set((state) => ({ products: state.products.map(p => p.id === id ? { ...updated, id } : p) })),
      deleteProduct: (id) => set((state) => ({ products: state.products.filter(p => p.id !== id) })),
      addInquiry: (inq) => set((state) => ({ inquiries: [{ ...inq, id: Date.now().toString(), createdAt: new Date().toISOString() }, ...state.inquiries] })),
      deleteInquiry: (id) => set((state) => ({ inquiries: state.inquiries.filter(i => i.id !== id) }))
    }),
    {
      name: 'protein-golmohammadi-storage',
    }
  )
);
