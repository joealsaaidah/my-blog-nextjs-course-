import { MongoClient } from "mongodb";
const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    //validation
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "incalid input." });
      return;
    }
    //Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    /* const connectionString1 = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.70jzy.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`; */
    /* const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.70jzy.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`; */
    try {
      client = await MongoClient.connect(
        `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.70jzy.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to the database." });
      return;
    }

    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage._id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed" });
      return;
    }

    client.close();
    console.log("successfully");

    res
      .status(201)
      .json({ message: "Message stored successfully", message: newMessage });
  }
};

export default handler;
