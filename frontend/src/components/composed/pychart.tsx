'use client';
import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Card } from '../ui/card';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface Data {
    property: string;
    value: number;
}

export default function PyChart() {
    const [data] = useState<Data[]>([
        { property: 'a', value: 4 },
        { property: 'b', value: 3 },
        { property: 'c', value: 10 },
        { property: 'd', value: 2 },
        { property: 'e', value: 8 },
    ]);

    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!svgRef.current) return;

        const w = 400;
        const h = 400;
        const radius = Math.min(w, h) / 2; 

        const svg = d3.select(svgRef.current)
            .attr('width', w)
            .attr('height', h)
            .style('overflow', 'visible');

        svg.selectAll('*').remove();

        const g = svg.append('g')
            .attr('transform', `translate(${w / 2}, ${h / 2})`); 

        const formattedData = d3.pie<Data>().value(d => d.value)(data);
        const arcGenerator = d3.arc<d3.PieArcDatum<Data>>()
            .innerRadius(0)
            .outerRadius(radius);

        const color = d3.scaleOrdinal(d3.schemeSet1);

        
        g.selectAll('path')
            .data(formattedData)
            .join('path')
            .attr('d', arcGenerator)
            .attr('fill', (d, i) => color(i.toString()))
            .style('opacity', 0.7);

        g.selectAll('text')
            .data(formattedData)
            .join('text')
            .text(d => d.data.property)
            .attr('transform', d => `translate(${arcGenerator.centroid(d)})`)
            .style('text-anchor', 'middle')
            .style('fill', 'white')
            .style('font-size', '12px');

    }, [data]);

    return (
        <Card className="w-[430px] h-[430px] flex items-center justify-center relative p-0 ">
            <Link href={'dashboard/access-logs'}>
                <ExternalLink className="absolute z-20 top-3 right-3 hover:scale-120 hover:cursor-pointer" />
            </Link>
            <svg ref={svgRef} className="mx-auto "></svg>
        </Card>
    );
}