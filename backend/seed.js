const { MongoClient } = require("mongodb");
const { mockData } = require("./data");

const uri =
  "mongodb+srv://itsmereddy3001:tVbu7k7EGYalO3jn@assignment.qrmu7wl.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function seedData() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    const database = client.db("assignment");
    const collection = database.collection("user-list");

    const data = mockData;

    const result = await collection.insertMany(data);
    console.log(`${result.insertedCount} documents inserted`);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}
