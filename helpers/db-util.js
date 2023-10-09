export async function connectDatabase() {
  const pwParam = encodeURIComponent(process.env.MONGODB_PW);
  const client = await MongoClient.connect(
    `mongodb+srv://two4onebill:${pwParam}@cluster0.xvwjnur.mongodb.net/events?retryWrites=true&w=majority`
  );
  return client;
}

export async function insertDocument(client, document) {
  const db = client.db();

  await db.collection("newsletter").insertOne(document);
}
