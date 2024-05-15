import { DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb';

const client = new DynamoDBClient({});

export async function GET() {
  try {
    const data = await client.send(
      new GetItemCommand({
        TableName: process.env.TABLE_NAME,
        Key: { id: { N: '1' } },
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
