import React from 'react'
const Details = ({ pokemon }) => {
    return (
        <>
            {
                pokemon.weight ?
                    <div className="details">
                        <p>Species Name: {pokemon?.species?.name}</p>
                        <p>Species URL: <a href={pokemon?.species?.url}>{pokemon?.species?.url}</a></p>
                        {pokemon?.stats?.map((stat, index) => (
                            <div key={index}>
                                <p>Base Stat: {stat.base_stat}</p>
                                <p>Effort: {stat.effort}</p>
                                <p>Stat Name: {stat.stat.name}</p>
                                <p>Stat URL :<a href={stat.stat.url}>{stat.stat.url}</a></p>
                            </div>
                        ))}
                        {pokemon?.types?.map((type, index) => (
                            <div key={index}>
                                <p>Slot: {type.slot}</p>
                                <p>Type Name: {type.type.name}</p>
                                <p>Type URL :<a href={type.type.url}>{type.type.url}</a></p>
                            </div>
                        ))}
                        <p>Moves:
                            {pokemon?.moves?.map((move, index) => (
                                move.move.name + "  ,  "
                            ))}
                        </p>
                        <p>Weight: {pokemon?.weight}</p>
                    </div>
                    : null
            }
        </>
    )
}
export default Details;