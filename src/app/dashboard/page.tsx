import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlusCircle, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const userRequests = [
  {
    id: 1,
    title: 'تركيب حوض مطبخ جديد',
    status: 'بانتظار العروض',
    offers: 3,
    statusVariant: 'default',
  },
  {
    id: 2,
    title: 'تصليح باب غرفة نوم',
    status: 'تم اختيار حرفي',
    offers: 5,
    statusVariant: 'secondary',
  },
  {
    id: 3,
    title: 'دهان غرفة أطفال',
    status: 'مكتمل',
    offers: 4,
    statusVariant: 'outline',
  },
];

export default function CustomerDashboard() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold font-headline">طلباتي</h1>
          <p className="text-muted-foreground">تابع حالة طلباتك الحالية والسابقة من هنا.</p>
        </div>
        <Button asChild size="lg">
          <Link href="/dashboard/post">
            <PlusCircle className="ml-2 h-5 w-5" />
            نشر طلب جديد
          </Link>
        </Button>
      </div>

      <div className="space-y-6">
        {userRequests.map((request) => (
          <Card key={request.id}>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <CardTitle>{request.title}</CardTitle>
                <Badge variant={request.statusVariant as any}>{request.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {request.status === 'بانتظار العروض'
                  ? `وصلك ${request.offers} عروض حتى الآن.`
                  : request.status === 'تم اختيار حرفي'
                  ? `قمت باختيار عرض من بين ${request.offers} عروض.`
                  : 'تم إنجاز هذا الطلب بنجاح.'}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline">
                <Link href={`/dashboard/request/${request.id}`}>
                  عرض التفاصيل
                  <ChevronLeft className="mr-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
        {userRequests.length === 0 && (
          <div className="text-center py-16 border-2 border-dashed rounded-lg">
            <h3 className="text-xl font-medium">ليس لديك أي طلبات بعد</h3>
            <p className="text-muted-foreground mt-2 mb-4">
              أنشئ طلبك الأول الآن وابدأ في استقبال عروض من أفضل الحرفيين.
            </p>
            <Button asChild>
              <Link href="/dashboard/post">
                <PlusCircle className="ml-2 h-5 w-5" />
                نشر طلب جديد
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
