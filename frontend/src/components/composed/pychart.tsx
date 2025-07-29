'use client';
import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import { DSVRowString } from 'd3';
import { Card } from '../ui/card';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';


export default function PyChart() {
    const data = useState(
        [
            {property: 'a', value: 4},
            {property: 'b', value: 3},
            {property: 'c', value: 10},
            {property: 'd', value: 2},
            {property: 'e', value: 8},
        ]
    )


     
  return (
    <Card className="w-fit h-fit relative">
      <Link href={'dashboard/access-logs'}>
        <ExternalLink className="absolute z-20 top-3 right-3 hover:scale-120 hover:cursor-pointer" />
      </Link>
      <div id="graph"></div>
    </Card>
  );
}
