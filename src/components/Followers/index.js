import React from "react";

function FollowersGet(props){
    /*
    const elSize= 6;
    const newFollowers= [];
    for (var i = 0; i < elSize && i < props.followers.length; i++) {
            newFollowers.push(props.followers[i]);
     }
    */


    /// Variaveis de ambiente
    const URL = `https://api.github.com/users/${props.usuario}`;
    const [seguidores,setSeguidores] = React.useState([]);
    const [seguidoresLength,setSeguidoresLength] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);

    ///Usado para pegar um objeto com as informações do usuario
    React.useEffect(function(){
        fetch(URL)
        .then(function (serverResponse){
           return serverResponse.json();
        })
        .then(function(response){
          setSeguidoresLength(response);
        })
      }, [])

    ///Usado para listar os objetos(seguidores)
    React.useEffect(() =>{
     const PER_PAGE = 10;
     const URL_CONFIG = `?per_page=${PER_PAGE}&page=${currentPage}&order=desc`;
     const URL_FOLLOWERS = `${URL}/followers`;
     const URL_FILTER = URL_FOLLOWERS + URL_CONFIG;
     
    fetch(URL_FILTER)
    .then(function (serverResponse){
        return serverResponse.json();
    })
    .then(function(response){
        setSeguidores((prevSeguidores) => [...prevSeguidores, ...response])
    })

    }, [currentPage]);

    ///Usado para para verificar quando o elemento '<li .class-bar>' é descorberto
    ///Usado para adicionar mais 1 ao currentPage 
    React.useEffect(()=> {
        const intersectionObserver = new IntersectionObserver(entries => {
            if(entries.some(entry => entry.isIntersecting)){
                setCurrentPage((currentPage) => currentPage + 1);
            }
        });
        intersectionObserver.observe(document.querySelector('.cross-bar'));
        return ()=> intersectionObserver.disconnect();

    },[]);
    return(
    <>
    <h2 className="smallTitle">
        Seguidores ({seguidoresLength.followers})
    </h2>
    <div className="relations-content">
        <ul>         
            {seguidores.map((itemAtual) => {
            return(
                <li key={itemAtual.id}>
                    <a href={`https://github.com/${itemAtual.login}`}>
                    <img src={`https://github.com/${itemAtual.login}.png`} />
                    <span>{itemAtual.login}</span>
                    </a>
                </li>
                );
            })}
            <li className="cross-bar"></li>
        </ul>
    </div>
    </>
    );
}

export default FollowersGet;