import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlusCircle, ChevronLeft, Clock, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const userRequests = [
  {
    id: 1,
    title: 'تركيب حوض مطبخ رخام',
    status: 'بانتظار العروض',
    offers: 3,
    date: 'منذ ساعتين',
    statusVariant: 'default',
  },
  {
    id: 2,
    title: 'تصليح باب غرفة نوم',
    status: 'تم التنفيذ',
    offers: 5,
    date: 'أمس الساعة 10م',
    statusVariant: 'secondary',
  },
];

export default function CustomerDashboard() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black font-headline mb-2">طلباتي</h1>
          <p className="text-muted-foreground font-medium text-lg">تحكم في خدماتك وتابع العروض المستلمة.</p>
        </div>
        <Button asChild size="lg" className="rounded-full h-14 px-8 font-bold shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
          <Link href="/dashboard/post">
            <PlusCircle className="ml-2 h-6 w-6" />
            نشر طلب جديد
          </Link>
        </Button>
      </div>

      <div className="grid gap-6">
        {userRequests.map((request) => (
          <Card key={request.id} className="border-none ios-glass group">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-3xl">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-1">{request.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                      <Clock className="h-4 w-4" />
                      {request.date}
                    </div>
                  </div>
                </div>
                <Badge className="rounded-full px-4 py-1 text-sm font-bold" variant={request.statusVariant as any}>
                  {request.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-black/5 rounded-2xl p-4 flex items-center justify-between">
                <p className="font-bold text-foreground/80">
                  {request.offers > 0 ? `لديك ${request.offers} عروض متاحة` : 'في انتظار الصنايعية...'}
                </p>
                {request.offers > 0 && (
                   <div className="flex -space-x-3 space-x-reverse">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-muted flex items-center justify-center text-[10px] font-bold">
                        H
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button asChild variant="ghost" className="rounded-full font-bold group-hover:text-primary group-hover:bg-primary/5">
                <Link href={`/dashboard/request/${request.id}`}>
                  عرض العروض
                  <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
        {userRequests.length === 0 && (
          <div className="text-center py-24 ios-glass rounded-[3rem] border-2 border-dashed border-primary/20">
            <div className="bg-primary/5 p-8 rounded-full w-fit mx-auto mb-6">
              <PlusCircle className="h-16 w-16 text-primary/40" />
            </div>
            <h3 className="text-2xl font-black font-headline mb-4">لا توجد طلبات بعد</h3>
            <p className="text-muted-foreground font-medium mb-10 max-w-sm mx-auto">
              ابدأ الآن وانشر أول طلب ليك عشان توصل لأفضل الحرفيين في مصر.
            </p>
            <Button asChild size="lg" className="rounded-full px-10">
              <Link href="/dashboard/post">نشر طلب جديد</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}