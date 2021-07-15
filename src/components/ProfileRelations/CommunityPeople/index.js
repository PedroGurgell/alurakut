function CommunityPeople({people}){

    return(
    <>
    <h2 className="smallTitle">
        Pessoas da Comunidade ({people.length})
    </h2>
    <ul>         
        {people.map((itemAtual) => {
        return(
            <li key={itemAtual}>
                <a href={`/users/${itemAtual}`}>
                 <img src={`https://github.com/${itemAtual}.png`} />
                 <span>{itemAtual}</span>
                </a>
            </li>
            );
        })}
    </ul>
    
    </>
    );
}

export default CommunityPeople;