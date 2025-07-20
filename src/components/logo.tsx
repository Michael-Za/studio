import { Wrench } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Wrench className="h-7 w-7 text-primary" />
      <span className="font-bold text-xl font-headline">صنايعي اكسبرس</span>
    </div>
  );
}
