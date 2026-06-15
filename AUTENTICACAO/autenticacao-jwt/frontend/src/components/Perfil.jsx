import { useEffect, useState } from 'react'

export default function Perfil() {
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')

    fetch('http://localhost:3000/perfil', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(dados => setUsuario(dados))
  }, [])

  if (!usuario) return <p>Carregando...</p>

  return (
    <div>
      <h2>Meu Perfil</h2>
      <p><strong>Nome:</strong> {usuario.nome}</p>
      <p><strong>E-mail:</strong> {usuario.email}</p>
      <p><strong>Membro desde:</strong> {new Date(usuario.criado_em).toLocaleDateString('pt-BR')}</p>
    </div>
  )
}