import React from 'react'

const ninjas = ({ ninjas, deleteNinja }) => {
    const ninjalist = ninjas.map(ninja => {
        return (
            <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
                <button onClick = {() => {deleteNinja(ninja.id)}}>Delete</button>
            </div>
        )
    })
    return (
        <div className="ninjalist">
            {ninjalist}
        </div>
    )

}

export default ninjas
