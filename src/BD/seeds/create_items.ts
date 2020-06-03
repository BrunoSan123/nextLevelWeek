import Knex from 'knex'

export async function seed(knex: Knex) {
   await  knex('items').insert([,
        { titulo: 'Lampadas', image: 'lampadas.svg' },
        { titulo: 'Pilhas e Baterias', image: 'pilhas.svg' },
        { titulo: 'Papeis', image: 'papeis.svg' },
        { titulo: 'Residuos-Eletronicos', image: 'eletronico.svg' },
        { titulo: 'Residuos-Organicos', image: 'Organico.svg' },


    ])
}

