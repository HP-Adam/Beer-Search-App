const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

let todoList = ['task 1', 'task 2', 'task 3'];

app.use(cors());
app.use(bodyParser.json());

app.get('/api/todo', (req, res) => res.send({ todoList: todoList }));

app.post('/api/send', (req, res) => {
    todoList.push(req.body.userInput);
    return res.send({ todoList: todoList });
});

app.delete('/api/delete', (req, res) => {
    todoList.splice(req.body.spot, 1);
    return res.send({ todoList: todoList });
});

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
