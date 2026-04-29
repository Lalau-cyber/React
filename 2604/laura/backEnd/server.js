/*--------variveis-------- */

const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000;

app.use(cors())
app.use(express.json())

let filmes = [
    { id: 1, nome: "Vingadores", diretor: "100", ano: "2012", nota: "8.0", genero: "Ação" },
    { id: 2, nome: "A culpa é das estrelas", diretor: "200", ano: "2014", nota: "9.5", genero: "Romance" },
    { id: 3, nome: "Alien prometheus", diretor: "300", ano: "2012", nota: "10.0", genero: "Ficção Científica" },
    { id: 4, nome: "O assassino da lua das flores", diretor: "400", ano: "2015", nota: "6.5", genero: "Suspense" },
]   
/* -----ROTAS----- */




// GET /filmes/
app.get('/filmes', (req, res) => {
    setTimeout(() => {
        res.json(filmes)
    }, 1000)
    
})

/* GET - filmes; retorna um filme especifico */

app.get('/filmes/:id', (req, res) => {
    const id = Number(req.params.id)
    const filme = filmes.find((f) => f.id === id)

    if(! filme){
        return res.status(404).json({ message: "Filme não encontrado" })
    }
    res.json(filme)
})

//POST / filmes -> cadastra um novo filme
app.post('/filmes', (req, res) => {
    const {titulo, diretor, ano, nota, genero} = req.body;
   if(!titulo || !diretor){
       return res.status(400).json({ message: "Titulo e diretor são obrigatórios" })
   }
   const novo = {
    id: filmes.length + 1,
    titulo,
    diretor,
    ano: Number(ano) || null,
    nota: Number(nota) || null,
    genero: genero || "sem genero"
   }
   filmes.push(novo)
   res.status(201).json(novo)
})

//PUT /filmes/:id -> atualiza um filme existente
app.put('/filmes/:id', (req, res) => {
    const id = Number(req.params.id)
    const index = filmes.findIndex((f) => f.id === id)

    if(index === -1){
        return res.status(404).json({ message: "Filme não encontrado" })
    }

    const {titulo, diretor, ano, nota, genero} = req.body;
    if (tituo) filmes[index].ftitulo = titulo
    if (diretor) filmes[index].diretor = diretor
    if (ano) filmes[index].ano = Number(ano)
    if (nota) filmes[index].nota = Number(nota)
    if (genero) filmes[index].genero = genero
    
    res.json(filmes[index])
})

//DELETE / filmes/:id -> deleta um filme existente

app.delete ("/filmes/:id", (req, res) => {
    const id = Number(req.params.id)
    const index = filmes.findIndex((f) => f.id === id)

    if(index === -1){
        return res.status(404).json({ message: "Filme não encontrado" })
    }
    const removido = filmes.splice(index, 1)[0]
    res.json({ message: "Filme removido", filme: removido })

})

app.listen(port, () => {
    console.log(`\n Servidor rodando na porta ${port}`)
    console.log(` GET    /filmes`)
    console.log(` GET    /filmes/:id`)
    console.log(` POST   /filmes`)
    console.log(` PUT    /filmes/:id`)
    console.log(` DELETE /filmes/:id \n`)
})
