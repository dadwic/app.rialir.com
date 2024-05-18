import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { GetCommand } from '@aws-sdk/lib-dynamodb';
import { NextResponse } from 'next/server';

const client = new DynamoDBClient({});

export async function GET() {
  try {
    const data = await client.send(
      new GetCommand({
        TableName: process.env.TABLE_NAME,
        Key: { id: 1 },
      })
    );
    return NextResponse.json(
      { ...data.Item, updated_at: new Date().toISOString() },
      {
        status: 200,
      }
    );
  } catch (e) {
    return Response.error();
  }
}
export const revalidate = 10;