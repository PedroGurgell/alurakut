function CommunityPeople({people}){
    const elSize= 6;
    const newPeople= [];
    for (var i = 0; i < elSize && i < people.length; i++) {
            newPeople.push(people[i]);
     }
    return(
    <>
    <h2 className="smallTitle">
        Pessoas da Comunidade ({people.length})
    </h2>
    <ul>         
        {newPeople.map((itemAtual) => {
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