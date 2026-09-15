import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '@/src/store/appStore';
import { Input } from '@/src/components/ui/input';
import { Button } from '@/src/components/ui/button';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const login = useAppStore(state => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In local mode, bypass actual authentication checking
    // Any login credentials will work to get into the dashboard
    login();
    navigate('/admin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-brand-950 px-4 font-sans" dir="rtl">
      <div className="w-full max-w-md bg-white dark:bg-brand-900 p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-brand-800">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-black text-brand-900 dark:text-white mb-2">
            ورود به پنل مدیریت (نسخه لوکال)
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            فایربیس غیرفعال است. با هر ایمیل/رمزی می‌توانید وارد شوید.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ایمیل:</label>
            <Input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="text-left" 
              dir="ltr"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">رمز عبور:</label>
            <Input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="text-left" 
              dir="ltr"
              required 
            />
          </div>
          <Button type="submit" className="w-full h-12 text-base">ورود موقت (تستی)</Button>
        </form>
      </div>
    </div>
  );
}
