function BoxForm(){
    return(
    <>
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
    </>
    );
}

export default BoxForm;