import { useState } from 'react'

export default function Configuracoes() {
  const [form, setForm] = useState({ nome: '', senhaAtual: '', novaSenha: '' })
  const [mensagem, setMensagem] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const token = localStorage.getItem('token')

    const resposta = await fetch('http://localhost:3000/configuracoes', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(form)
    })

    const dados = await resposta.json()
    setMensagem(dados.mensagem || dados.erro)
  }

  return (
    <div>
      <h2>Configurações</h2>
      <form onSubmit={handleSubmit}>
        <input name="nome" placeholder="Novo nome" onChange={handleChange} />
        <input name="senhaAtual" type="password" placeholder="Senha atual" onChange={handleChange} />
        <input name="novaSenha" type="password" placeholder="Nova senha (opcional)" onChange={handleChange} />
        <button type="submit">Salvar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  )
}