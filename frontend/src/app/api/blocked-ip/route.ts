import { NextResponse } from 'next/server';
import type { IBloackedCollection } from '../../../types/general';

export async function GET() {
  const data: IBloackedCollection= {
    blocked: [
      {
        ipAddress: '192.168.1.1',
        user: {
          email: 'user1@example.com',
          role: 'admin',
        },
        timeOfBlock: new Date(),
      },
      {
        ipAddress: '10.0.0.1',
        user: {
          email: 'user2@example.com',
          role: 'user',
        },
        timeOfBlock: new Date(),
      },
    ],
    totalBloacked: 2000
  };

  return NextResponse.json(data);
}
