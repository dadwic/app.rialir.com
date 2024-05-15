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
    return Response.json(data.Item);
  } catch (e) {
    return Response.json(
      { message: 'لطفاً بعداً دوباره امتحان کنید' },
      { status: 500 }
    );
  }
}
