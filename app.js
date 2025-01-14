const express = require('express');
const app = express();
const todoRoutes = require('./routes/todoRoutes.js');
const db = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const port  = process.env.PORT|| 3000;
//middleware
app.use(express.json() )
app.use((req,res,next)=>{
    console.log('Time:', Date.now());
    next();
});
app.use('/api/todo',todoRoutes);
app.use('/api/user',userRoutes);

// app.get('/',(req,res) =>{
//     res.set('Content-Type','text/html');
//     res.send('<h1>Welcome to this Homepage</h1>');
// });

// app.get('/about',(req,res) =>{
//     res.set('Content-Type','text/html');
//     res.send('<h1>Welcome to the about page</h1
// });


// app.listen(3000,()=>{
//     console.log('Server is running on port 3000');
// });





const start = async () =>{
    await db.connect();
    app.listen(port,() =>{
        console.log(`server is running on port ${port}`);
    });
}

start();