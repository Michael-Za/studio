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
    <div className="flex flex-col items-center">
      <section className="w-full bg-primary/10 py-20 md:py-32 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 font-headline">
            صنايعي اكسبرس
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            راحتك تهمنا. أسهل وأسرع طريقة تلاقي بيها أحسن الصنايعية في مصر.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-bold">
              <Link href="/dashboard/post">محتاج خدمة <ChevronLeft className="mr-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/craftsman/dashboard">أنا صنايعي</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2 font-headline">إزاي بيشتغل؟</h2>
          <p className="text-muted-foreground mb-12">ثلاث خطوات بسيطة عشان تنجز شغل بيتك.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                  <FilePlus2 className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>١. انشر طلبك</CardTitle>
              </CardHeader>
              <CardContent>
                <p>وضح المشكلة اللي عندك، حدد ميزانيتك، والميعاد المناسب ليك.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                  <MessagesSquare className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>٢. استقبل عروض</CardTitle>
              </CardHeader>
              <CardContent>
                <p>هتوصلك عروض أسعار من أمهر الصنايعية القريبين منك.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                  <CheckCircle className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>٣. اختار الأنسب</CardTitle>
              </CardHeader>
              <CardContent>
                <p>قارن بين العروض والتقييمات واختار الصنايعي اللي يناسبك.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 font-headline">خدماتنا المتاحة</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-primary/5 transition-colors">
                <div className="bg-primary/10 rounded-full p-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <span className="font-medium">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-32">
        <div className="container mx-auto px-4">
           <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 text-center md:text-right">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">انضم لأسطول صنايعية اكسبرس</h2>
                <p className="mb-6 opacity-90">
                  لو أنت صنايعي شاطر، مكانك معانا. سجل دلوقتي، زود دخلك، ووصل لملايين العملاء في كل مكان.
                </p>
                <Button asChild size="lg" variant="secondary" className="font-bold bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/auth">سجل كحرفي الآن</Link>
                </Button>
              </div>
              <div className="md:w-1/2">
                <Image 
                  src="https://placehold.co/600x400.png"
                  alt="Craftsmen working"
                  data-ai-hint="craftsmen tools"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
