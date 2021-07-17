import {SiteClient} from 'datocms-client';

export default async function requestsGet(request,response){
    ///acionar quando for post
    if(request.method === 'POST'){

        const TOKEN = '24d1047a682f9dca2e6e897e55cdd5';
        const client = new SiteClient(TOKEN);

        ///configurar o registro da nova comunidade para o dato aceitar no servidor
        const registroCriado = await client.items.create({
            itemType: "972640", // ID do model de comunidades criado pelo dato
            ...request.body,
            /*
            title:"Teste",
            imageUrl:'https://github.com/PedroGurgell.png'
            */
        })

        ///resposta da api local
        response.json({
            dados:'Algum dado qualquer',
            registroCriado:registroCriado,
        })

        return;
    }
    ///caso o metodo não seja post
    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}