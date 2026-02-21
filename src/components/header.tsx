import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, UserCircle } from 'lucide-react';
import { Logo } from './logo';

const navLinks = [
  { href: '/dashboard', label: 'طلباتي' },
  { href: '/craftsman/dashboard', label: 'لوحة التحكم' },
  { href: '#services', label: 'الخدمات' },
];

export function Header() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 w-[92%] max-w-7xl mx-auto">
      <div className="ios-glass h-16 rounded-full px-6 flex items-center justify-between transition-all duration-300">
        <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-sm font-bold text-muted-foreground transition-all hover:text-primary relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden md:inline-flex rounded-full px-6 font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
            <Link href="/auth">
              <UserCircle className="ml-2 h-5 w-5" />
              دخول
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-full hover:bg-primary/5">
                <Menu className="h-6 w-6" />
                <span className="sr-only">فتح القائمة</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white/90 backdrop-blur-2xl border-none">
              <div className="flex flex-col gap-8 p-8 mt-12">
                <Link href="/" className="mb-4">
                   <Logo />
                </Link>
                <nav className="flex flex-col gap-8 text-2xl font-bold font-headline">
                  {navLinks.map(link => (
                    <Link key={link.href} href={link.href} className="text-foreground/80 hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="mt-8 rounded-full h-14 text-xl shadow-xl shadow-primary/20">
                  <Link href="/auth">دخول / تسجيل</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}