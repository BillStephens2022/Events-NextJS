import { connectDatabase, insertDocument, getAllDocuments } from "../../../helpers/db-util";

async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;

  try {
    client = await connectDatabase();

    if (req.method === "POST") {
      // add server-side validation
      const { email, name, text } = req.body;

      if (
        !email.includes("@") ||
        !name ||
        name.trim() === "" ||
        !text ||
        text.trim === ""
      ) {
        res.status(422).json({ message: "Invalid input." });
        return;
      }

      const newComment = {
        email,
        name,
        text,
        eventId,
      };

      let result;

      try {
        result = await insertDocument(client, 'comments', newComment);
        newComment._id = result.insertedId;
        res.status(201).json({ message: "Added comment.", comment: newComment });  
      } catch (error) {
        res.status(500).json({ message: "Inserting document failed!"});
      }
    }

    if (req.method === "GET") {
      try {
        const documents = await getAllDocuments(client, 'comments', { _id: -1 });
        res.status(200).json({ comments: documents });
      } catch (error) {
        res.status(500).json({ message: 'Failed to get comments!'});
      }  
    }
  } catch (error) {
    res.status(500).json({ message: "Connection to the database failed!"});
  } finally {
    // Close the connection in the finally block
    if (client) {
      client.close();
    }
  }
}

export default handler;
