import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cors from 'cors'; 
import dotenv from 'dotenv'
import pkg from 'pg'

dotenv.config({path:'./arquivo.env'})
const {Pool} = pkg

const pool = new Pool({
host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
})



const app = express()
app.use(cors())
app.use(express.json())



function autenticar(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1] // "Bearer TOKEN"

  if (!token) {
    return res.status(401).json({ erro: 'Token não fornecido' })
  }

  try {
    const dados = jwt.verify(token, process.env.JWT_SECRET)
    req.usuario = dados // disponibiliza os dados nas rotas
    next()
  } catch {
    return res.status(403).json({ erro: 'Token inválido ou expirado' })
  }
}

app.get('/home', (request, response) => {
    return response.send("Bem-vindo à nossa API!");
});


app.post('/registrar', async (req, res) =>{
    const{nome, email, senha} = req.body

    if(!nome || !email || !senha){
        return res.status(400).json({erro: 'Prencha todos os campos'})
    }

    try{
        const emailExists = await pool.query(
            'SELECT ID FROM USUARIOS WHERE EMAIL = $1 ',
            [email]
        )
        const senhaHash = await bcrypt.hash(senha, 10)

    await pool.query(
      'INSERT INTO usuarios (nome, email, senha_hash) VALUES ($1, $2, $3)',
      [nome, email, senhaHash]
    )
        
        return res.status(201).json({mensagem: 'Usuario cadastrado com sucesso'})
        
    }catch(err){
        console.error(err)
        return res.status(500).json({erro: 'Erro interno no servidor'})
    }

})

app.post('/login', async (req, res) => {
  const { email, senha } = req.body

  if (!email || !senha) {
    return res.status(400).json({ erro: 'Preencha todos os campos' })
  }

  try {
    // 1. Busca o usuário no banco pelo email
    const resultado = await pool.query(
      'SELECT * FROM usuarios WHERE email = $1',
      [email]
    )

    // 2. Se não encontrou ninguém, retorna 401
    if (resultado.rows.length === 0) {
      return res.status(401).json({ erro: 'Credenciais inválidas' })
    }

    const usuario = resultado.rows[0]

    // 3. Compara a senha digitada com o hash do banco
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha_hash)

    if (!senhaCorreta) {
      return res.status(401).json({ erro: 'Credenciais inválidas' })
    }

    // 4. Gera o JWT com os dados do usuário
    const token = jwt.sign(
      {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    )

    return res.status(200).json({ token })

  } catch (err) {
    console.error(err)
    return res.status(500).json({ erro: 'Erro interno no servidor' })
  }
})

app.get('/perfil', autenticar, async (req, res) => {
  try {
    const resultado = await pool.query(
      'SELECT id, nome, email, criado_em FROM usuarios WHERE id = $1',
      [req.usuario.id]
    )

    if (resultado.rows.length === 0) {
      return res.status(404).json({ erro: 'Usuário não encontrado' })
    }

    return res.status(200).json(resultado.rows[0])
  } catch (err) {
    console.error(err)
    return res.status(500).json({ erro: 'Erro interno no servidor' })
  }
})

app.put('/configuracoes', autenticar, async (req, res) => {
  const { nome, senhaAtual, novaSenha } = req.body

  try {
    const resultado = await pool.query(
      'SELECT * FROM usuarios WHERE id = $1',
      [req.usuario.id]
    )

    const usuario = resultado.rows[0]

    // Se enviou nova senha, valida a atual primeiro
    if (novaSenha) {
      const senhaCorreta = await bcrypt.compare(senhaAtual, usuario.senha_hash)
      if (!senhaCorreta) {
        return res.status(400).json({ erro: 'Senha atual incorreta' })
      }

      const novoHash = await bcrypt.hash(novaSenha, 10)
      await pool.query(
        'UPDATE usuarios SET nome = $1, senha_hash = $2 WHERE id = $3',
        [nome || usuario.nome, novoHash, req.usuario.id]
      )
    } else {
      // Só atualiza o nome
      await pool.query(
        'UPDATE usuarios SET nome = $1 WHERE id = $2',
        [nome || usuario.nome, req.usuario.id]
      )
    }

    return res.status(200).json({ mensagem: 'Dados atualizados com sucesso' })
  } catch (err) {
    return res.status(500).json({ erro: 'Erro ao atualizar dados' })
  }
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));