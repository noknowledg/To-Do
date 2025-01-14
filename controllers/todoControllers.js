// const tasks=[
//     {
//         id:1,
//         title:"Task 1",
//         description:"This is task 1",
//         done:false
//     },
//     {
//         id:2,
//         title:"Task 2",
//         description:"This is task 2",
//         done:false
//     },

//     {
//         id:3,
//         title:"Task 3",
//         description:"This is task 3",
//         done:true
//     },
//     {
//         id:4,
//         title:"Task 4",
//         description:"This is task 4",
//         done:false
//     },
//     {
//         id:5,
//         title:"Task 5",
//         description:"This is task 5",
//         done:true
//     },
//     {
//         id:6,
//         title:"Task 6",
//         description:"This is task 6",
//         done:false
//     }
// ]
const Todo= require('../models/Todo');

const createTodo = async(req, res) => {
    console.log(req.body)
    try{
        const {id}= req.user;
        const {title, description,status,public} = req.body;
        const todo=await Todo.create({title, description, status,  public,userId: id});
        res.status(201).json(todo);

    }catch(error){
        console.log(error)
    res.status(500).json({message:"Todo not created"})
    }
}


const getTodos = async(req,res)=>{
    try{
        const todos = await Todo.findAll();
        res.status(200).json(todos);

    }catch(error){
        res.status(500).json({message: 'Todos not found'});
    }
}

const getTodo = async(req,res)=>{
    try{
        const {id} = req.params;
        const todo = await Todo.findByPk(id);
        if(todo){
            res.status(200).json(todo);
        }
        else{
            res.status(404).json({message:`Todo with id ${id} not found`});
        }
        // res.status(200).json(todo);
    }catch (error){
        res.status(404).json({message:`Todo with id ${id} not found`});
    }
}

const updateTodo = async (req,res)=> {
    const {id} = req.params;
    try{
        const {title, description, status}=req.body;
        const todo = await Todo.findByPk(id);
        if (todo) {
            const updatedTodo = await todo.update({title,description,status});
            res.status(200).json(updatedTodo);
            
        }
        else{
            res.status(404).json({message:`Todo with id ${id} not found`});
        }
    }catch(error){
        console.log(error);
        res.status(404).json({message:`Todo with ${id} not found`});
    }
}


                    const deleteTodo = async(req, res) => {
                        const {id} = req.params;
                        try{
                            const todo = await Todo.findByPk(id);
                            const result = await Todo.destroy({
                                where:{id: id}
                            });
                            // console.log(result);
                        if(result){

                            res.status(200).json({message:`Todo with id ${id} deleted`});
                            }else{
                            res.status(404).json({message: `task with id${id}not found`});
                        }
                    }  catch(error){
                                res.status(500).json({message: `an error occoured: ${error.message}`});
                        }
                        }
// const createTodo = async(req, res) => {
//     const {title, description} = req.body;
//     const newTask = {
//         id: tasks.length + 1,
//         title,
//         description,
//         done: false
//         };
//         tasks.push(newTask);
//     res.status(201).json(tasks);
// };

// const getTodos = async(req, res) => {
//     res.status(200).json(tasks);
// }

// const getTodo = async(req, res) => {
//     const {id}=req.params;
//     const task = tasks.find(task => task.id === parseInt(id));
//     if(task){
//         res.status(200).json(task);
//     }else{
//         res.status(200).json({message: `task with id${id}not found  `});
//     }

//  }

// const updateTodo = async(req, res) => {
//     const {id} = req.params;
//     const {title, description, done} = req.body;
//     const task = tasks.find(task => task.id === parseInt(id));
//     if(task){
//         task.title = title || task.title;
//         task.description = description || task.description;
//         task.done =done || task.done;
//         res.status(200).json(task);
//     }else{
//         res.status(200).json({message: `task with id${id}not found`});
//     // res.send("Todo updated");
// }
// }
// const deleteTodo = async(req, res) => {
//     const {id} = req.params;
//     const task = tasks.find(task => task.id === parseInt(id));
//     if(task){
//         tasks = tasks.filter(task => task.id !== parseInt(id));
//         res.status(200).json(task);
//         }else{
//             res.status(200).json({message: `task with id${id}not found`});
//     // res.send("Todo delete");
// }
// }

module.exports={
    createTodo,
    getTodos,
    getTodo,
    updateTodo,
    deleteTodo
};