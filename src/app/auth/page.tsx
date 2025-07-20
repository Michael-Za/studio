'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function AuthPage() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-8rem)] items-center justify-center py-12 px-4">
      <Tabs defaultValue="login" className="w-full max-w-md">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">تسجيل الدخول</TabsTrigger>
          <TabsTrigger value="signup">إنشاء حساب</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>أهلاً بعودتك!</CardTitle>
              <CardDescription>
                سجل دخولك عشان تتابع طلباتك أو تقدم عروض جديدة.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-login">البريد الإلكتروني أو رقم التليفون</Label>
                <Input id="email-login" type="text" placeholder="example@mail.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-login">كلمة المرور</Label>
                <Input id="password-login" type="password" required />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button className="w-full">دخول</Button>
              <Button variant="link" size="sm" className="text-muted-foreground">
                نسيت كلمة المرور؟
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>حساب جديد</CardTitle>
              <CardDescription>
                خطوة واحدة تفصلك عن أسهل طريقة لإنجاز خدماتك.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم بالكامل</Label>
                <Input id="name" type="text" placeholder="اسمك الثلاثي" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">رقم التليفون</Label>
                <Input id="phone" type="tel" placeholder="01xxxxxxxxx" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-signup">كلمة المرور</Label>
                <Input id="password-signup" type="password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user-type">أنا أسجل كـ</Label>
                <Select>
                  <SelectTrigger id="user-type">
                    <SelectValue placeholder="اختار نوع حسابك" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="customer">عميل (محتاج خدمة)</SelectItem>
                    <SelectItem value="craftsman">حرفي (بقدم خدمة)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground p-2 bg-muted rounded-md">
                 <ShieldCheck className="h-6 w-6 text-green-600 flex-shrink-0" />
                 <span>بياناتك في أمان تام. بنستخدمها فقط لتوثيق الحساب وتأمين التعاملات بينك وبين الطرف التاني.</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/profile">إنشاء حساب</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
