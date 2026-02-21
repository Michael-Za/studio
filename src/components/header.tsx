import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Logo } from './logo';

const navLinks = [
  { href: '#how-it-works', label: 'إزاي بيشتغل؟' },
  { href: '#services', label: 'الخدمات' },
  { href: '/dashboard', label: 'طلباتي' },
  { href: '/craftsman/dashboard', label: 'لوحة التحكم' },
];

export function Header() {
  return (
    <header className="sticky top-4 z-50 w-[95%] mx-auto mt-4 rounded-2xl border bg-white/60 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="container mx-auto flex h-14 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-muted-foreground transition-all hover:text-primary hover:scale-105">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex rounded-full px-6 shadow-md hover:shadow-lg transition-all active:scale-95">
            <Link href="/auth">دخول / تسجيل</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">فتح القائمة</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white/80 backdrop-blur-xl">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 mb-4">
                   <Logo />
                </Link>
                <nav className="flex flex-col gap-6 text-lg font-semibold">
                  {navLinks.map(link => (
                    <Link key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-primary">
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="mt-8 rounded-full">
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