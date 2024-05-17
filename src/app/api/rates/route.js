import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { GetCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});

export async function GET() {
  try {
    const data = await client.send(
      new GetCommand({
        TableName: process.env.TABLE_NAME,
        Key: { id: 1 },
      })
    );
    return Response.json(data.Item, {
      status: 200,
      headers: {
        'Cache-Control': 'max-age=60',
        'CDN-Cache-Control': 'max-age=60',
        'Vercel-CDN-Cache-Control': 'max-age=3600',
      },
    });
  } catch (e) {
    return Response.error();
  }
}
