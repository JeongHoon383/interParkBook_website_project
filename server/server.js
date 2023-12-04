import express from 'express';
import cors from 'cors';
import empRouter from './router/empRouter.js';

const server = express();
const PORT = 8000;

server.use(express.json());
server.use(cors());

server.use('/', empRouter);

server.listen(PORT, ()=>{
  console.log(`server running!! ----> ${PORT}`);
});
