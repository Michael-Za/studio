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
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Check, X, Coins, MessageSquare, Star } from 'lucide-react';

const requestDetails = {
  id: 1,
  title: 'تركيب حوض مطبخ جديد',
  description: 'محتاج أركب حوض مطبخ رخام صناعي جديد مقاس 80 سم. الحوض القديم تم فكه والمكان جاهز للتركيب. محتاج سباك محترف عشان يركب الحوض والخلاط والصرف.',
  budget: '300 جنيه',
  status: 'بانتظار العروض',
};

const offers = [
  {
    id: 1,
    craftsman: {
      name: 'محمد عبد الله',
      avatar: 'https://placehold.co/40x40.png',
      rating: 4.9,
      reviews: 120,
    },
    price: '280 جنيه',
    notes: 'معايا كل العدد اللازمة والتركيب هيتم في أقل من ساعة. خبرة 15 سنة في المجال.',
  },
  {
    id: 2,
    craftsman: {
      name: 'علي حسن',
      avatar: 'https://placehold.co/40x40.png',
      rating: 4.7,
      reviews: 85,
    },
    price: '300 جنيه',
    notes: 'جاهز للعمل فوراً. السعر شامل كل حاجة.',
  },
  {
    id: 3,
    craftsman: {
      name: 'كريم مصطفى',
      avatar: 'https://placehold.co/40x40.png',
      rating: 4.8,
      reviews: 92,
    },
    price: '250 جنيه',
    notes: 'أقل سعر وأفضل جودة. شوف تقييماتي.',
  },
];

export default function RequestDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>{requestDetails.title}</CardTitle>
            <Badge>{requestDetails.status}</Badge>
          </div>
          <CardDescription>الميزانية المقترحة: {requestDetails.budget}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{requestDetails.description}</p>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-4 font-headline">العروض المستلمة ({offers.length})</h2>
      <div className="space-y-4">
        {offers.map((offer) => (
          <Card key={offer.id} className="overflow-hidden">
            <CardContent className="p-4 flex flex-col sm:flex-row items-start gap-4">
              <div className="flex items-center gap-3 flex-shrink-0">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={offer.craftsman.avatar} data-ai-hint="person face" alt={offer.craftsman.name} />
                  <AvatarFallback>{offer.craftsman.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold">{offer.craftsman.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-accent">
                    <Star className="h-4 w-4 fill-accent" />
                    <span>{offer.craftsman.rating} ({offer.craftsman.reviews} تقييم)</span>
                  </div>
                </div>
              </div>
              <Separator orientation="vertical" className="h-auto mx-4 hidden sm:block" />
              <div className="flex-grow">
                <div className="flex items-center gap-2 font-bold text-lg text-primary mb-2">
                  <Coins className="h-5 w-5" />
                  <span>{offer.price}</span>
                </div>
                {offer.notes && (
                    <div className="flex items-start gap-2 text-sm text-muted-foreground bg-secondary/50 p-3 rounded-md">
                        <MessageSquare className="h-4 w-4 mt-1 flex-shrink-0" />
                        <p>{offer.notes}</p>
                    </div>
                )}
              </div>
              <div className="flex gap-2 w-full sm:w-auto pt-4 sm:pt-0">
                <Button className="flex-1" size="sm">
                  <Check className="ml-2 h-4 w-4" /> قبول
                </Button>
                <Button className="flex-1" size="sm" variant="outline">
                  <X className="ml-2 h-4 w-4" /> رفض
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
         {offers.length === 0 && (
          <div className="text-center py-16 border-2 border-dashed rounded-lg">
            <h3 className="text-xl font-medium">لم تستقبل أي عروض بعد</h3>
            <p className="text-muted-foreground mt-2">
              سيتم إعلامك فور وصول أي عروض جديدة لطلبك.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
