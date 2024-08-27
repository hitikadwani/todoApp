//write basic express bolilerplate code
//with express.json() middleware

const express =require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } =require("./db");
const cors =require("cors");
const app = express();



app.use(express.json());
app.use(cors());

//body {
 //title : string;
 //description: string;
//}

app.post("/todos",async function (req,res) {
   const createPayload=req.body;
   const parsedPayload= createTodo.safeParse(createPayload);
   if(!parsedPayload.success) {
    res.status(411).json({
        msg: "You sent the wrong inputs"
    })
    return;
   }
   //put in mongodb
   await todo.create({ //waiting  for that to get update on db
    title: createPayload.title,
    description: createPayload.description,
    completed: false
   })

   res.json({
    msg: "Todo created"
   })
})

app.get("/todos",async function(req,res) {
  const todos = await todo.find({});  //have to await todos to come back to you from db in US otherwise it wwill be promise which will eventuallly resolve
  res.json({
    todos
  })
  //console.log("Hi there, I am here")
})

app.put("/completed",async function(req,res) {
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    await todo.update({
      _id: req.body.id 
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })

})

app.listen(3000);