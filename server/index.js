const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users')



const app = express();


app.use(express.json());


app.use(cors());
mongoose.connect('mongodb://127.0.0.1:27017/crud')

app.get("/", (req,res) => {
  UserModel.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.get("/getUser/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    console.log("Fetching user with ID:", userId); 

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }

    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error); 
    res.status(500).json({ message: "Server error", error });
  }
});

app.post("/createUser",(req,res) =>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put("/updateUser/:id",(req,res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate({_id:id},{
    name:req.body.name,
    email:req.body.email
  })
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.delete("/deleteUser/:id",(req,res) => {
  const id = req.params.id;
  UserModel.findOneAndDelete({_id:id})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});