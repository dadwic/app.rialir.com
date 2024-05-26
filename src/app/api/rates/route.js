import { NextResponse } from 'next/server';
import { GetCommand } from '@aws-sdk/lib-dynamodb';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

const client = new DynamoDBClient({});

export const fetchCache = 'force-no-store';
export const revalidate = 0;

export async function GET() {
  try {
    const data = await client.send(
      new GetCommand({
        TableName: process.env.TABLE_NAME,
        Key: { id: 1 },
      })
    );
    return NextResponse.json(data.Item);
  } catch (e) {
    return NextResponse.error();
  }
}
