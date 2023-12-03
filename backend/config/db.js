const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://itsmereddy3001:tVbu7k7EGYalO3jn@assignment.qrmu7wl.mongodb.net/assignment?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });
