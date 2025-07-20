'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import Link from 'next/link';

export default function PostRequestPage() {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="container mx-auto flex justify-center py-12 px-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>طلب خدمة جديد</CardTitle>
          <CardDescription>
            املأ التفاصيل عشان توصل لأفضل الصنايعية. كل ما كانت التفاصيل أوضح، كل ما كانت العروض أحسن.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="service-type">نوع الخدمة</Label>
            <Select>
              <SelectTrigger id="service-type">
                <SelectValue placeholder="اختار نوع الخدمة المطلوبة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="plumbing">سباكة</SelectItem>
                <SelectItem value="carpentry">نجارة</SelectItem>
                <SelectItem value="electricity">كهرباء</SelectItem>
                <SelectItem value="painting">نقاشة و دهانات</SelectItem>
                <SelectItem value="building">بناء</SelectItem>
                <SelectItem value="ac">تكييف و تبريد</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">وصف المشكلة</Label>
            <Textarea
              id="description"
              placeholder="مثال: محتاج أركب حوض مطبخ جديد، الحوض القديم تم فكه..."
              rows={4}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="budget">الميزانية التقريبية (بالجنيه)</Label>
              <Input id="budget" type="number" placeholder="مثال: 300" />
            </div>
            <div className="space-y-2">
              <Label>الميعاد المناسب</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-full justify-start text-right font-normal',
                      !date && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="ml-2 h-4 w-4" />
                    {date ? format(date, 'PPP', { locale: ar }) : <span>اختار تاريخ</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    dir="rtl"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
           <div className="space-y-2">
            <Label htmlFor="location">المكان / العنوان</Label>
            <Input id="location" type="text" placeholder="مثال: المعادي، القاهرة" />
          </div>
          <Button asChild size="lg" className="w-full">
            <Link href="/dashboard">انشر الطلب</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
