import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  FilePlus2,
  MessagesSquare,
  CheckCircle2,
  Wrench,
  Hammer,
  Zap,
  Paintbrush,
  BrickWall,
  AirVent,
  ChevronLeft,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const services = [
  { name: 'سباكة', icon: Wrench, color: 'bg-blue-500/10 text-blue-500' },
  { name: 'نجارة', icon: Hammer, color: 'bg-orange-500/10 text-orange-500' },
  { name: 'كهرباء', icon: Zap, color: 'bg-yellow-500/10 text-yellow-500' },
  { name: 'نقاشة', icon: Paintbrush, color: 'bg-purple-500/10 text-purple-500' },
  { name: 'بناء', icon: BrickWall, color: 'bg-red-500/10 text-red-500' },
  { name: 'تكييف', icon: AirVent, color: 'bg-cyan-500/10 text-cyan-500' },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-12 pb-20">
      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
             <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            أفضل الحرفيين في مصر بين يديك
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 font-headline tracking-tighter leading-none animate-in fade-in slide-in-from-bottom-6 duration-1000">
            صنايعي <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">اكسبرس</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-8 duration-1000">
            تجربة عصرية لحجز خدماتك المنزلية بلمسة واحدة. جودة، سرعة، وأمان تام.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <Button asChild size="lg" className="rounded-full px-12 h-16 text-xl font-bold shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
              <Link href="/dashboard/post">اطلب صنايعي الآن <ChevronLeft className="mr-2 h-6 w-6" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-12 h-16 text-xl font-bold border-2 ios-glass hover:bg-white/40 active:scale-95 transition-all">
              <Link href="/craftsman/dashboard">سجل كحرفي</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-headline tracking-tight">بساطة الاستخدام</h2>
          <p className="text-muted-foreground text-lg font-medium">خطوات قليلة وتخلص مهمتك</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: FilePlus2, title: 'انشر طلبك', desc: 'اكتب اللي محتاجه وصور المشكلة لو حابب.' },
            { icon: MessagesSquare, title: 'قارن العروض', desc: 'شوف تقييمات الصنايعية واختار السعر الأنسب.' },
            { icon: CheckCircle2, title: 'تم التنفيذ', desc: 'استمتع بخدمة احترافية وضمان على الشغل.' }
          ].map((item, i) => (
            <Card key={i} className="group p-8 text-center border-none ios-glass ios-card-hover">
              <div className="mx-auto bg-primary/10 rounded-[2rem] p-6 w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <item.icon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-headline">{item.title}</h3>
              <p className="text-muted-foreground font-medium">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full bg-white/40 backdrop-blur-md py-24 rounded-[4rem] border-y border-white/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div className="text-right">
              <h2 className="text-4xl font-bold font-headline mb-2">خدماتنا</h2>
              <p className="text-muted-foreground font-medium">نغطي كافة احتياجات منزلك</p>
            </div>
            <Button variant="ghost" className="rounded-full font-bold">عرض الكل <ArrowRight className="mr-2 h-4 w-4" /></Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col items-center gap-4 p-8 rounded-[2.5rem] ios-glass ios-card-hover cursor-pointer group">
                <div className={cn("rounded-2xl p-6 transition-all group-hover:scale-110", service.color)}>
                  <service.icon className="h-8 w-8" />
                </div>
                <span className="font-bold text-lg font-headline">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative overflow-hidden bg-primary rounded-[3.5rem] p-12 md:p-24 flex flex-col md:flex-row items-center gap-16 shadow-3xl">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)] pointer-events-none"></div>
          <div className="md:w-1/2 relative z-10">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 font-headline leading-[1.1]">ابـدأ رحلتك معنا كـمحترف</h2>
            <p className="text-white/80 text-xl mb-12 font-medium">
              انضم لآلاف الحرفيين المتميزين وارفع دخلك اليوم بضغطة زر.
            </p>
            <Button asChild size="lg" className="bg-white text-primary rounded-full px-12 h-16 text-xl font-bold hover:bg-white/90 shadow-2xl transition-all">
              <Link href="/auth">سجل الآن</Link>
            </Button>
          </div>
          <div className="md:w-1/2 relative z-10 flex justify-center">
             <div className="relative">
                <div className="absolute -inset-4 bg-white/20 blur-3xl rounded-full"></div>
                <Image 
                  src="https://picsum.photos/seed/craftsman/600/400"
                  alt="Professional craftsman"
                  data-ai-hint="professional tool"
                  width={600}
                  height={400}
                  className="rounded-[3rem] object-cover shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 relative z-10 border-4 border-white/10"
                />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
