import express from 'express'
import rotas from './routes'

const app = express();

app.use(express.json());

const port = 3333;

app.use(rotas);


app.listen(port, ()=>{
    console.log(`servidor em pé na porta ${port}`);
})