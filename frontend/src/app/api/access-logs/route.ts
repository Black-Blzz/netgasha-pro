import { NextResponse } from 'next/server';
// import type { IAccessLogs } from '../../../types/general';

export async function GET() {
  // const data: IAccessLogs
  const response = await fetch(
    'https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv'
  );

  const csvText = await response.text();
  const rows = csvText.trim().split('\n');
  const headers = rows[0].split(',');
  const data = rows.slice(1).map((row) => {
    const values = row.split(',');
    return {
      [headers[0]]: values[0],
      [headers[1]]: Number(values[1]), 
    };
  });

  return NextResponse.json(data);
}
