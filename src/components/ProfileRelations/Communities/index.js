function Communities({ community }){
  const elSize= 6;
  const newCommunity= [];
  for (var i = 0; i < elSize && i < community.length; i++) {
      newCommunity.push(community[i]);
   }
    
    return(
    <>
        <h2 className="smallTitle">
            Comunidades ({community.length})
        </h2>
        <ul>         
            {newCommunity.map((itemAtual) => {
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