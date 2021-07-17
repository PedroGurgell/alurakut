function CommunityPeople({people}){
    
    return(
    <>
    <h2 className="smallTitle">
        Pessoas da Comunidade ({people.length})
    </h2>
    <div className="relations-content">
        <ul>         
            {people.map((itemAtual) => {
            return(
                <li key={itemAtual}>
                    <a href={`https://github.com/${itemAtual}`}>
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                    </a>
                </li>
                );
            })}
        </ul>
    </div>
    
    </>
    );
}

export default CommunityPeople;