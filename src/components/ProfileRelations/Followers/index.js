function FollowersGet(props){
    
    const elSize= 6;
    const newFollowers= [];
    for (var i = 0; i < elSize && i < props.followers.length; i++) {
            newFollowers.push(props.followers[i]);
     }
     
    return(
    <>
    <h2 className="smallTitle">
        Seguidores ({props.followers.length})
    </h2>
    <ul>         
        {newFollowers.map((itemAtual) => {
        return(
            <li key={itemAtual.id}>
                <a href={`https://github.com/${itemAtual.login}`}>
                 <img src={`https://github.com/${itemAtual.login}.png`} />
                 <span>{itemAtual.login}</span>
                </a>
            </li>
            );
        })}
    </ul>
    </>
    );
}

export default FollowersGet;