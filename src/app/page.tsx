import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  FilePlus2,
  MessagesSquare,
  CheckCircle,
  Wrench,
  Hammer,
  Zap,
  Paintbrush,
  BrickWall,
  AirVent,
  ChevronLeft,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  { name: 'سباكة', icon: Wrench },
  { name: 'نجارة', icon: Hammer },
  { name: 'كهرباء', icon: Zap },
  { name: 'نقاشة و دهانات', icon: Paintbrush },
  { name: 'بناء', icon: BrickWall },
  { name: 'تكييف و تبريد', icon: AirVent },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-12 pb-20">
      <section className="w-full pt-20 pb-12 md:pt-32 md:pb-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 font-headline tracking-tight">
            صنايعي <span className="text-primary italic">اكسبرس</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            راحتك تهمنا. أسهل وأسرع طريقة تلاقي بيها أحسن الصنايعية في مصر بتصميم عصري وذكي.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-10 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
              <Link href="/dashboard/post">محتاج خدمة <ChevronLeft className="mr-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-10 text-lg font-bold border-2 backdrop-blur-sm hover:bg-white/40 active:scale-95 transition-all">
              <Link href="/craftsman/dashboard">أنا صنايعي</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="w-full py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 font-headline tracking-tight text-foreground">إزاي بيشتغل؟</h2>
          <p className="text-muted-foreground mb-16 text-lg">ثلاث خطوات بسيطة عشان تنجز شغل بيتك في ثواني.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group bg-white/40 backdrop-blur-md border border-white/20 p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="mx-auto bg-primary/20 rounded-3xl p-6 w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <FilePlus2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">١. انشر طلبك</h3>
                <p className="text-muted-foreground leading-relaxed">وضح المشكلة اللي عندك، حدد ميزانيتك، والميعاد المناسب ليك.</p>
            </div>
            <div className="group bg-white/40 backdrop-blur-md border border-white/20 p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="mx-auto bg-primary/20 rounded-3xl p-6 w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <MessagesSquare className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">٢. استقبل عروض</h3>
                <p className="text-muted-foreground leading-relaxed">هتوصلك عروض أسعار من أمهر الصنايعية القريبين منك في الوقت الفعلي.</p>
            </div>
            <div className="group bg-white/40 backdrop-blur-md border border-white/20 p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="mx-auto bg-primary/20 rounded-3xl p-6 w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">٣. اختار الأنسب</h3>
                <p className="text-muted-foreground leading-relaxed">قارن بين العروض والتقييمات واختار الصنايعي اللي يناسبك بضغطة واحدة.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="w-[95%] py-20 bg-white/30 backdrop-blur-sm rounded-[3rem] border border-white/20 shadow-inner">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16 font-headline tracking-tight">خدماتنا المتاحة</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col items-center gap-4 p-6 rounded-[2rem] hover:bg-white/60 hover:shadow-xl hover:scale-105 transition-all cursor-pointer group">
                <div className="bg-primary/10 rounded-2xl p-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <span className="font-bold text-lg">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4">
        <div className="container mx-auto">
           <div className="bg-primary text-primary-foreground rounded-[3rem] p-10 md:p-20 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="md:w-1/2 text-center md:text-right z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline leading-tight">انضم لأسطول صنايعية اكسبرس</h2>
                <p className="mb-10 text-lg opacity-90 font-medium">
                  لو أنت صنايعي شاطر، مكانك معانا. سجل دلوقتي، زود دخلك، ووصل لعملاء أكتر بكتير.
                </p>
                <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-110 active:scale-95 px-12 text-xl font-bold shadow-2xl transition-all">
                  <Link href="/auth">سجل كحرفي الآن</Link>
                </Button>
              </div>
              <div className="md:w-1/2 z-10">
                <Image 
                  src="https://picsum.photos/seed/craft/600/400"
                  alt="Craftsmen working"
                  data-ai-hint="craftsmen tools"
                  width={600}
                  height={400}
                  className="rounded-[2.5rem] object-cover shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
                />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}