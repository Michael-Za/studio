'use client';

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Coins,
  MapPin,
  Clock,
  User,
  Star,
  Hammer,
  Wrench,
  Zap,
} from 'lucide-react';

const jobRequests = [
  {
    id: 1,
    title: 'تركيب حوض مطبخ جديد',
    service: 'سباكة',
    icon: Wrench,
    budget: '300 جنيه',
    location: 'المعادي، القاهرة',
    time: 'بكرة الساعة 5 مساءً',
    client: 'أحمد محمود',
    clientRating: 4.8,
  },
  {
    id: 2,
    title: 'تصليح باب غرفة نوم لا يغلق',
    service: 'نجارة',
    icon: Hammer,
    budget: '200 جنيه',
    location: 'مصر الجديدة، القاهرة',
    time: 'في أسرع وقت',
    client: 'سارة علي',
    clientRating: 4.9,
  },
  {
    id: 3,
    title: 'تغيير مفاتيح كهرباء قديمة',
    service: 'كهرباء',
    icon: Zap,
    budget: '450 جنيه',
    location: 'الزمالك، القاهرة',
    time: 'السبت القادم صباحاً',
    client: 'محمد حسين',
    clientRating: 4.5,
  },
];

export default function CraftsmanDashboard() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">أهلاً بك يا أسطى!</h1>
        <p className="text-muted-foreground">دي الطلبات المتاحة حالياً. قدم عرضك الأفضل.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobRequests.map((job) => (
          <Card key={job.id} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="mb-2">{job.title}</CardTitle>
                    <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                        <job.icon className="h-4 w-4" />
                        {job.service}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-accent font-bold">
                    <Star className="h-5 w-5 fill-accent" />
                    <span>{job.clientRating}</span>
                  </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="h-4 w-4" /> <span>العميل: {job.client}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Coins className="h-4 w-4" /> <span>الميزانية: {job.budget}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" /> <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" /> <span>{job.time}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">تقديم عرض</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>تقديم عرض لطلب: {job.title}</DialogTitle>
                    <DialogDescription>
                      حدد السعر اللي هتشتغل بيه وأي ملاحظات تانية. عرضك هيوصل للعميل فوراً.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="price" className="text-right col-span-1">
                        السعر (بالجنيه)
                      </Label>
                      <Input id="price" type="number" placeholder="مثال: 250" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="notes" className="text-right col-span-1">
                        ملاحظات
                      </Label>
                      <Textarea id="notes" placeholder="أي تفاصيل إضافية حابب العميل يعرفها..." className="col-span-3" />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="submit">إرسال العرض</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
