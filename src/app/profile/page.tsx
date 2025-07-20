import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
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
import { Separator } from '@/components/ui/separator';
import { Edit, ShieldCheck, Upload } from 'lucide-react';

const userProfile = {
  name: 'أحمد محمود',
  email: 'ahmed.m@example.com',
  phone: '01012345678',
  avatar: 'https://placehold.co/100x100.png',
  type: 'عميل',
  verified: true,
  bankAccount: '**** **** **** 1234',
};

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-primary/20">
            <AvatarImage src={userProfile.avatar} data-ai-hint="person face" alt={userProfile.name} />
            <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-3xl font-headline">{userProfile.name}</CardTitle>
          <CardDescription>
            <Badge variant={userProfile.verified ? 'default' : 'destructive'} className="bg-green-500 hover:bg-green-600 text-white">
              <ShieldCheck className="ml-1 h-4 w-4" />
              {userProfile.verified ? 'حساب موثق' : 'حساب غير موثق'}
            </Badge>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-right">
            <Button variant="outline" size="sm">
              <Edit className="ml-2 h-4 w-4" /> تعديل الملف الشخصي
            </Button>
          </div>
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <Label>الاسم بالكامل</Label>
              <Input value={userProfile.name} readOnly />
            </div>
            <div>
              <Label>البريد الإلكتروني</Label>
              <Input value={userProfile.email} readOnly />
            </div>
            <div>
              <Label>رقم التليفون</Label>
              <Input value={userProfile.phone} readOnly />
            </div>
            <div>
              <Label>نوع الحساب</Label>
              <Input value={userProfile.type} readOnly />
            </div>
          </div>
          <Separator />
          <div>
            <h3 className="font-bold text-lg mb-4 font-headline">بيانات الدفع</h3>
            <div>
              <Label>الحساب البنكي</Label>
              <Input value={userProfile.bankAccount} readOnly />
            </div>
          </div>
          <Separator />
          <div>
             <h3 className="font-bold text-lg mb-2 font-headline">توثيق الهوية</h3>
             <Card className="bg-secondary/50">
                <CardContent className="p-4">
                     <Label htmlFor="id-upload">صورة البطاقة الشخصية</Label>
                     <p className="text-xs text-muted-foreground mb-2">
                        بنحتاج صورة واضحة من البطاقة لتأمين حسابك وحماية كل الأطراف.
                     </p>
                    <div className="flex items-center gap-4">
                        <Input id="id-upload" type="file" className="hidden" />
                        <Button asChild variant="outline" className="flex-1">
                            <label htmlFor="id-upload" className="cursor-pointer">
                                <Upload className="ml-2 h-4 w-4" />
                                رفع صورة البطاقة
                            </label>
                        </Button>
                        <p className="text-sm text-green-600 font-medium">
                            {userProfile.verified ? 'تم التحقق من الهوية' : 'في انتظار المراجعة'}
                        </p>
                    </div>
                </CardContent>
             </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
