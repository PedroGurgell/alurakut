
import React from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AluraCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import Communities from '../src/components/ProfileRelations/Communities';
import CommunityPeople from '../src/components/ProfileRelations/CommunityPeople';
/*
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
*/
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
export default function Home() {
  const [comunidades, setComunidades] = React.useState([{
    id:'15151156',
    title : 'fotos fantásticas',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
  }]);
  ///const comunidades= ['fotos'];
  const usuario = "PedroGurgell";
  const pessoasFavoritas = [
    'juunegreiros', 
    'omariosouto', 
    'peas', 
    'rafaballerini', 
    'marcobrunodev', 
    'felipefialho',
    'PedroGurgell'
  ]

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
          <h2 className="subTitle">O que você deseja fazer?</h2>
          
          <form onSubmit={function handleCreateCommunity(event){
            event.preventDefault();
            
            const dadosForm = new FormData(event.target);
            const comunidade = {
              id: new Date().toISOString(),
              title: dadosForm.get('title'),
              image: dadosForm.get('image')
            }
            ///comunidades.push(['alura']);
            const comunidadesAtualizadas = [...comunidades, comunidade]
            setComunidades(comunidadesAtualizadas);

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
