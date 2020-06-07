import express from 'express'
import rotas from './routes'
import path from 'path'
import cors from 'cors'
const port = 3333;

const app = express();

app.use(express.json());


app.use(cors())
app.use(rotas);
app.use('/temp/uploads', express.static(path.resolve(__dirname,'..','temp','uploads')))

app.listen(port, ()=>{
    console.log(`servidor em pé na porta ${port}`);
})