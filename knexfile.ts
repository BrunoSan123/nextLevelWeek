import path from 'path'

module.exports={
    client:'sqlite3',
    connection:{
        filename:path.resolve(__dirname,'src','BD','database.sqlite'),
    },
    migrations:{
        directory:path.resolve(__dirname,'src','BD','migrations')
    },

    seeds:{
        directory:path.resolve(__dirname,'src','BD','seeds')
    },

    useNullAsDefault:true,
    

};