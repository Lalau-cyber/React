import {useState} from 'react'

function formulario(){
    const[nome, setNome] = useState('')
    const [mensagem, setMensagem] = useState('')

function handleSubmit(){
    if(nome.trim()== ''){
        setMensagem('por favor, informe seu nome')
        return
    }
    setMensagem{`Ola, ${nome}, seja bem vindo`}
}
return(
    <div>
        <input type="text"
        placeholder = "digite o seu nome"
        value = {nome}
        oneChange ={(e) => setNome(e.target.value)}
        />
        {/*mostra a mensagem na tela*/}
        {mensagem && <p>{mensagem}</p>}
    </div>
)
}

export default formulario