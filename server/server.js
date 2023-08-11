const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const UserModel = require("./models/User");
const ProfileModel = require("./models/Profile");
const bodyParser = require("body-parser");
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend domain
  methods: 'GET,PUT,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};


const app = express();
app.use(express.json());
// app.use(cors());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the MongoDB database using Mongoose
mongoose.connect("mongodb://127.0.0.1:27017/engima-sphere", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB successfully!");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

// making api route for the request from the client side or front end
// login api
app.post('/login',(req,res) => {
const {email, password} = req.body;
UserModel.findOne({email:email})
.then( users => {
  if(users){
    if(users.password === password){
      res.cookie("loggedIn", true);
      res.json("success");
    }
    else{
      res.json("sorry password is incorrect");
    }
  }
  else{
    res.json("no record existed!");
  }

})
})
// register api
app.post('/register',(req, res)=>{
  UserModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err))

}) 

// create the profile 
app.post('/profile', [
  // Validation code...
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  ProfileModel.create(req.body)
    .then(profile => res.status(201).json({ message: 'Profile created successfully', profile }))
    .catch(err => {
      console.error('Error creating profile:', err);
      res.status(500).json({ error: 'Server error' });
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
