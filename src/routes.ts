import express from 'express'
import PointController from './controllers/pointsController'
import IndexController from './controllers/itemsController'
import multer from 'multer'
import multerConfig from './config/multer'


const rotas = express.Router();
const upload = multer(multerConfig)

const pointsController = new PointController();
const itemsController = new IndexController();

rotas.get('/',itemsController.index)
rotas.get('/points/:id',pointsController.show)
rotas.get('/points',pointsController.index)

rotas.post('/points',upload.single('image'),pointsController.create)

export default rotas;