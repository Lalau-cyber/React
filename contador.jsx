import {useState} from 'react'

function contador(){
    const[contagem, setContagem] = useState(0)

    return(
        <div>
            <h2>contador : {contagem}</h2>

            <button onClick= {() =>{setContagem(contagem + 1)}}>+</button>
            <button onClick= {() =>{setContagem(contagem - 1)}}>-</button>
            <button onClick= {() =>{setContagem(0)}}>zerar</button>
        </div>

    )
} 
export default contador