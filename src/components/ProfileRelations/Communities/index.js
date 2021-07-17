function Communities({ community }){
  
    
    return(
    <>
        <h2 className="smallTitle">
            Comunidades ({community.length})
        </h2>
        <div className="relations-content">
          <ul>         
              {community.map((itemAtual) => {
                return(
                  <li key={itemAtual.id}>
                    <a href={itemAtual.image}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
    </>
    );
}
export default Communities;