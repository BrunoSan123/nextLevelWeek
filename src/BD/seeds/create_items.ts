import Knex from 'knex'

export async function seed(knex: Knex) {
   await  knex('items').insert([
        { titulo: 'Lampadas', image: 'lampadas.svg' },
        { titulo: 'Pilhas e Baterias', image: 'baterias.svg' },
        { titulo: 'Papeis', image: 'papeis-papelao.svg' },
        { titulo: 'Residuos-Eletronicos', image: 'eletronicos.svg' },
        { titulo: 'Residuos-Organicos', image: 'organicos.svg' },
        {titulo:'Oleos',image:'oleo.svg'}


    ])
}

