'use client';
import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { DSVRowString } from 'd3';
import { Card } from '../ui/card';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface Data {
  Country: string; 
  Value: number;
}

export default function LineGraph() {

  useEffect(() => {
    d3.select('#graph').select('svg').remove(); 

    const margin = { top: 30, right: 30, bottom: 70, left: 60 },
      width = 900 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select('#graph')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    d3.csv<Data>(
       'https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv',
      function (d: DSVRowString<string>): Data | null {
        if (!d || !d.Country || d.Value === undefined) return null;
        return {
          Country: d.Country,
          Value: +d.Value, 
        };
      }
    ).then(function (data: Data[]) {
      console.log(data);
      
      data.sort((a, b) => a.Country.localeCompare(b.Country));

      const x = d3
        .scalePoint() 
        .range([0, width])
        .domain(data.map((d) => d.Country));

      svg
        .append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('transform', 'translate(-10,0)rotate(-45)')
        .style('text-anchor', 'end');

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.Value)! + 1000]) 
        .range([height, 0]);

      svg.append('g').call(d3.axisLeft(y));

      const line = d3
        .line<Data>()
        .x((d) => x(d.Country)!)
        .y((d) => y(d.Value)); 

      svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue') 
        .attr('stroke-width', 2)
        .attr('d', line);

      svg
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', (d) => x(d.Country)!)
        .attr('cy', (d) => y(d.Value))
        .attr('r', 4) 
        .attr('fill', 'steelblue');
    });
  }, []);

  return (
    <Card className="w-fit h-fit relative">
      <Link href={'dashboard/access-logs'}>
        <ExternalLink className="absolute z-20 top-3 right-3 hover:scale-120 hover:cursor-pointer" />
      </Link>
      <div id="graph"></div>
    </Card>
  );
}
