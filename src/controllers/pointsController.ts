import knex from '../BD/conecta' 
import {Request,Response} from 'express'


class PointController{


    async index ( request : Request, response : Response){
        const { cidade, uf, items  } = request.query

        const parsedItems = String(items)
          .split(',')
          .map( item => Number(item.trim()))
        
        const points = await knex('points')
        .join('point_items', "points.id", "=", "point_items.point_id")
        .whereIn('point_items.item_id',parsedItems)
        .where('cidade',String(cidade))
        .where('uf',String(uf))
        .distinct()
        .select('points.*')


        return response.json(points)
    }

    async create(req:Request,res:Response){

        const {

            nome,
            email,
            whatsapp,
            latitude,
            longitude,
            cidade,
            uf,
            items
            
        } = req.body;
    const points ={
        image:'https://a.cdn-hotels.com/gdcs/production9/d114/4cdc90ef-91ee-4fb8-8aed-6b77a0c97e30.jpg',
        nome,
        email,
        whatsapp,
        latitude,
        longitude,
        cidade,
        uf
    }
    
    const trx = await knex.transaction();
    
     const idsIseridos =   await trx('points').insert(points)
    
        const point_id =idsIseridos[0]
    
        const poitItens =items.map((item_id:number) =>{
            return{
               item_id,
               point_id
            }
        })
        await trx('point_items').insert(poitItens)
        await trx.commit();
    
        return res.json({
            id:point_id,
            ...points
        })
    }

    async show(req:Request,res:Response){
        const id = req.params.id

        const point = await knex('points').where('id',id).first();

        if(!point){
            return res.status(400).json({message:"ponto não encontrado"})
        }

        const items =await knex('items')
        .join('point_items','items.id','=','point_items.item_id')
        .where('point_items.point_id',id)
        .select('items.titulo')
        return res.json({point,items});
    }

   
}


export default PointController
