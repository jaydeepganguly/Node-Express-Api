import express from "express";
import {v4 as uuidv4} from 'uuid';

const router = express.Router();

let users = [
   
]

// all routes here are starting with /users
router.get("/",(req,res)=>{


    res.send(users);
    
});

router.post('/',(req,res)=>{
   
    const userId = uuidv4();
    const userwithId = {userId,...req.body}

    users.push(userwithId);

    res.send(`${req.body.firstName} added to the clan`);
});


router.get('/:id',(req,res)=>{
  const { id } = req.params;

  const foundUser = users.find((user) => user.id=== id);

  res.send(foundUser);
});

router.delete('/:id' , (req,res)=>{
  const { id } = req.params;

  users = users.filter(user=>user.id!==id);
  res.send(users);
});


router.patch('/:id',(req,res)=>{
  const { id } = req.params;
  const { firstName , lastName , age} =req.body;
  const userToBeUpdated = users.find((user)=> user.id ===id);
  
   if(firstName){
     userToBeUpdated.firstName=firstName;
   }

   if(lastName){
     userToBeUpdated.lastName = lastName;
   }

   if(age){
     userToBeUpdated.age=age;
   }

   
})
export default router;