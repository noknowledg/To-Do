const express =  require('express');
const router = express.Router();
const todoControllers = require('../controllers/todoControllers');
const authMidddleware = require('../middleware/auth');


router.post('/create',authMidddleware,todoControllers.createTodo);
// router.post('/create',todoControllers.createTodo);
router.get('/',todoControllers.getTodos);
router.get('/:id',todoControllers.getTodo);
router.put('/:id/update',todoControllers.updateTodo);
router.delete('/:id/delete',todoControllers.deleteTodo);

// router.get('/', (req,res)=>{
//     res.send("Hello world");
// });

module.exports = router;