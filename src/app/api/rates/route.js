import { DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb';

const client = new DynamoDBClient({});

export async function GET() {
  try {
    const { Item } = await client.send(
      new GetItemCommand({
        TableName: process.env.TABLE_NAME,
        Key: {
          id: { S: req.query.id },
        },
      })
    );
    return Response.json(Item);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
