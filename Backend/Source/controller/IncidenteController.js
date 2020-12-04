const connection = require('../Database/connection');

module.exports={
    async delete(request,response){
        const [id]= request.params;
        const ong_id= request.headers.authorization;

        const incident = await connection('incidents')
            .where('id',id)
            .select('ong_id')
            .first();
        
        if(incident.ong_id/= ong_id)
            return response.status(401).json({error:'operation not permited'});

        await connection('incidents').where('id',id).delete();

        return response.status(204).send();

    },
    
    async index (request,response) {
    
        const{page=1}= request.query;      // PAGINAÇÃO

        const[count]= await connection('incidentes').count();

        const incidents= await connection('incidents')
            .join('ongs', 'ongs_id', '=','incidents.ong_id')
            .limit(5)                                //Quantidade por paginas
            .offset((page-1)*5)                      //Proximas paginas       
            .select([                                // Inf das Ongs
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.Whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);
    
        response.header('X-Total-Count', count['count(*)']);     //total registros

        return response.json(incidents);
    },
    async create(request,response){
        const{title, description,value}= request.body;
        const ong_id= request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        
        return response.json({id});

    }
};