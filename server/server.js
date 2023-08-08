const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

// Connect to the MongoDB database using Mongoose
mongoose.connect("mongodb://127.0.0.1:27017/engima-sphere", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import and use the route handlers for each model
const userRoutes = require("./routes/User");
const postRoutes = require("./routes/Post");
// ... Import other routes as needed

app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
// ... Use other routes as needed

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
