import express from 'express'
import PointController from './controllers/pointsController'
import IndexController from './controllers/itemsController'


const rotas = express.Router();
const pointsController = new PointController();
const itemsController = new IndexController();

rotas.get('/',itemsController.index)
rotas.get('/points/:id',pointsController.show)
rotas.get('/points',pointsController.index)

rotas.post('/points',pointsController.create)

export default rotas;