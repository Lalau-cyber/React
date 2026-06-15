import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'

export default function Registrar() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  })
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setErro('')

    // Validação: senhas precisam coincidir
    if (form.senha !== form.confirmarSenha) {
      setErro('As senhas não coincidem')
      return
    }

    setLoading(true)
    try {
const resposta = await fetch('http://localhost:3000/registrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          senha: form.senha
        })
      })

      const dados = await resposta.json()

      if (!resposta.ok) {
        setErro(dados.erro || 'Erro ao cadastrar')
        return
      }

      // Cadastro ok, redireciona pro login
      navigate('/login')

    } catch (err) {
      setErro('Erro de conexão com o servidor')
    } finally {
      setLoading(false)
    }
  }
return(
    <div>
        <h2>Cadastre-se</h2>
        <form onSubmit={handleSubmit}>

            <input
             name='nome'
             type="text"
            placeholder="Digite seu Nome" 
            className="input_nome"
            value={form.nome}
            onChange={handleChange}
            required/>
            
            <input 
             name='email'
             type="text"
            placeholder="Digite seu Email" 
            className="input_email"
            value={form.email}
            onChange={handleChange}
            required/>
            
            <input 
            name='senha'
            type="password"
            placeholder="Digite sua Senha" 
            className="input_senha"
            value={form.senha}
            onChange={handleChange}
            required/>

             <input 
            name='confirmarSenha'
            type="password"
            placeholder="Digite sua Senha novamente" 
            className="input_senhaConf"
            value={form.confirmarSenha}
            onChange={handleChange}
            required/>

          { erro && <p style={{color: 'red'}}>{erro}</p>}

            <button type="submit" disabled={loading}>
               {loading ? 'Cadastrando...' : 'Cadastrar'}
            </button>
        </form>
       
        <p>Já tem conta? <Link to="/login" style={{color: 'white'}}>
         Entrar</Link>
         </p>

    </div>
)
}