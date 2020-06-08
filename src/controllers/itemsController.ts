import {Request,Response} from 'express'
import knex from '../BD/conecta'


class IndexController {
    async index  (req:Request,res:Response){
        const items = await knex('items').select('*');
    
        const serializedItems =items.map(item =>{
            return {
                id:item.id,
                titulo:item.titulo,
                image_url:`http://localhost:3333/temp/uploads/${item.image}`
            }
        })
    
        return res.json(serializedItems)
}
}

export default IndexController
