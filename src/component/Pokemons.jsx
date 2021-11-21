import React from 'react'


const Pokemons = ({ list, fetchAll, final, getOne,handleChangeSearch,search }) => {

    return (
        <div>
            <input type="text" className="search-input" placeholder="Search..." onChange={(e)=>handleChangeSearch(e,final.count)} />
            {
                search.length > 0?
                <div className="search-container">
                    {
                        search.map((search,index)=>
                        <div key={index} onClick={() => getOne(search.url)} className="search-item">{search.name}</div>
                        )
                    }
                </div>
                :null
            }
            {
                list.map((pokemon, index) => (
                    <div 
                        key={index}
                        className="card-container"
                        onClick={() => getOne(pokemon.url)}
                    >
                        <div className="title-img">
                            <span
                                style={{
                                    backgroundImage: `url(${pokemon.image})`,
                                    backgroundPosition: "cover",
                                    backgroundRepeat: "no-repeat",
                                    height: "5.5rem", width: "7rem"
                                }}
                            >
                            </span>
                            <span className="name">{pokemon.name}</span>
                        </div>
                        <div className="description">
                            {pokemon.description}
                        </div>
                    </div>
                ))
            }
            <div className="pagination">
                <span className="prev-next" onClick={() => (fetchAll(final.previous))} >{"<"}</span>
                <span className="prev-next" onClick={() => (fetchAll(final.next))} >{">"}</span>
            </div>
        </div>
    )
}

export default Pokemons
