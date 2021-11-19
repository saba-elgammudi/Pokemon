import React from 'react'


const Pokemons = ({ list, fetchAll, final, getOne }) => {

    return (
        <div>
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
