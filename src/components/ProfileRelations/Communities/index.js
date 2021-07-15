function Communities({ community }){

    
    return(
    <>
        <h2 className="smallTitle">
            Comunidades ({community.length})
        </h2>
        <ul>         
            {community.map((itemAtual) => {
              return(
                <li key={itemAtual.id}>
                  <a href={`/users/${itemAtual.title}`}>
                    <img src={itemAtual.image} />
                    <span>{itemAtual.title}</span>
                  </a>
                </li>
              );
            })}
        </ul>
    </>
    );
}
export default Communities;