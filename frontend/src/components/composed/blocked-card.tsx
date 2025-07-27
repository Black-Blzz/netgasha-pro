import Link from 'next/link';
import { IBloackedCollection } from '../../types/general';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card';
import { ExternalLink } from 'lucide-react';

export default async function BlockedCard() {
  const response = await fetch('http://localhost:3000/api/blocked-ip');
  const data: IBloackedCollection = await response.json();

  return (
    <Card className="w-xs h-80 flex relative flex-col items-center gap-10">
      <Link href={'dashboard/blocked-ip'}>
        <ExternalLink className="absolute top-3 right-3 hover:scale-120 hover:cursor-pointer" />
      </Link>
      <CardTitle className="mt-5"> Blocked Attacks</CardTitle>
      <CardDescription className="text-gray-500">last 24 hours</CardDescription>
      <CardContent className="text-4xl">{data.totalBloacked}</CardContent>
    </Card>
  );
}
