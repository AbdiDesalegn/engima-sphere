const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to the MongoDB database using Mongoose
mongoose.connect("mongodb://127.0.0.1:27017/engima-sphere", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.post('/login',(req,res) => {
const {email, password} = req.body;
UserModel.findOne({email:email})
.then( users => {
  if(users){
    if(users.password === password){
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

app.post('/register',(req, res)=>{
  UserModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err))

}) 



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
