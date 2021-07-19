
import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AluraCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import Communities from '../src/components/Communities';
import CommunityPeople from '../src/components/CommunityPeople';
import Followers from '../src/components/followers';


function ProfileSideBar(propriedades){
  return(
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{borderRadius:'8px'}}/>
      <hr/>
      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>
      <hr/>
      <AlurakutProfileSidebarMenuDefault/>
    </Box>
  );
}

export default function Home(props) {
  ///Usuario que será usado na pagina
  const usuario = props.githubUser;

  ///Pessoas utilizadas nas pessoas da comunidade;
  const pessoasFavoritas = [
    'juunegreiros', 
    'omariosouto', 
    'peas', 
    'rafaballerini', 
    'marcobrunodev', 
    'felipefialho',
    'PedroGurgell'
  ]

  ///Comunidades
  const [comunidades, setComunidades] = React.useState([]);

    ///Usado para pegar um objeto com as informações do usuario
    React.useEffect(function(){
      fetch('https://graphql.datocms.com/' , {
        method:'POST',
        headers:{
          'Authorization':'4823deb7d8b9f0316cc015cfe25efe',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ "query":`query {
          allCommunities {
            title
            id
            imageUrl
          }
        }` })
      })
        .then(function (serverResponse){
           return serverResponse.json();
        })
        .then(function(response){
          const comunidadesDATO = response.data.allCommunities;
          setComunidades(comunidadesDATO);
        })
      }, [])
      ///Caminho:
      ///console.log(comunidadesDATO.data.allCommunities[0].title);
  return (
    <>
    <AlurakutMenu githubUser={usuario}/>
    <MainGrid>
      <div className="profileArea" style={{gridArea:'profileArea'}}>
      <ProfileSideBar  githubUser={usuario}/>
      </div>
      <div className="welcomeArea" style={{gridArea:'welcomeArea'}}>
        <Box >
         <h1 className="title">Bem vindo(a)</h1>
         <OrkutNostalgicIconSet/>
        </Box>

        <Box>
          <h2 className="subTitle">Crie aqui a sua Comunidade!</h2>
  
          <form onSubmit={function handleCreateCommunity(event){
            event.preventDefault();
            
            const dadosForm = new FormData(event.target);
            const comunidade = {
              title: dadosForm.get('title'),
              imageUrl: dadosForm.get('image')
            }
            
            fetch('/api/communities',{
              method:'POST',
              headers: {
                'Content-Type':'application/json',
              },
              body: JSON.stringify(comunidade)
            })
            .then(async (response) => {
              const dados = await response.json();
              console.log(dados.registroCriado);
              const comunidade = dados.registroCriado;
              const comunidadesAtualizadas = [...comunidades, comunidade]
              setComunidades(comunidadesAtualizadas);
            })
          }}>
            <div>
              <input
                placeholder="Qual vai ser o nome da sua comunidade?" 
                name="title" 
                aria-label="Qual vai ser o nome da sua comunidade?">
              </input>
            </div>
            <div>
              <input
                placeholder="Coloque uma URL para usarmos de capa" 
                name="image" 
                aria-label="Coloque uma URL para usarmos de capa">
              </input>
            </div>
            <button>
              Criar comunidade
            </button>
          </form>
        </Box>
      </div>
      <div className="profileRelations" style={{gridArea:'profileRelations'}}>
      <ProfileRelationsBoxWrapper>

        <Followers usuario = {usuario} />
        
      </ProfileRelationsBoxWrapper>

      <ProfileRelationsBoxWrapper>

        <Communities community = {comunidades}/>

      </ProfileRelationsBoxWrapper>

      <ProfileRelationsBoxWrapper>

        <CommunityPeople people={pessoasFavoritas}/>
        
      </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
    </>
  );
}
///Erro ao verificar usuarios invalidos na URL : sempre é true
export async function getServerSideProps(context) {

  const cookies = nookies.get(context);
  const token = cookies.USER_TOKEN;
  const { githubUser } = jwt.decode(token);
  const { isAuthenticated } = await fetch('http://localhost:3000/api/auth', {
    headers: {
        Authorization: token
      }
  })
  .then((resposta) => resposta.json())
  
  console.log('isAuthenticated',isAuthenticated);
  console.log('token',token);
  if(!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }
  return {
    props: {
      githubUser,
    }
  }
}
