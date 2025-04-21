import express from 'express';
import { Server } from 'socket.io';
import {createServer} from 'http';
import cors from 'cors';

const port=3000;
const app=express();

const server= createServer(app);
const io= new Server(server ,{
    cors:{
        origin:'http://localhost:5173',
        methods:['GET','POST'],
        credentials:true,
    }
});
app.use(cors(
    {
        origin:'http://localhost:5173',
        methods:['GET','POST'],
        credentials:true,
    }
));

// created a connection with socket.io
io.on('connection',(socket)=>{
    console.log('A user is connected');
    console.log('Id:',socket.id);
});

app.get('/',(req,res)=>{
    res.send('Hello World!');
});

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})