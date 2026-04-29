//  MODULO DE API PARA FILMESDE FILMES
//AQUI FICA TODA A COMUNICAÇÃO COM O BACKEND

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',

})

//GET /filmes
// retorna todos os fimes

export const getFilmes = () => 
    api.get('/filmes')

//GET / filmes/:id

export const getFimesById = (id) => {
    api.get(`/filmes/${id}`)
}

//POST /filmes
//dados = {titulo, diretor, ano, nota, genero}
export const postFilme = () => {
    api.post('/filmes', dados)
}
//PUT /filmes/:id
//atualiza parcialmente

export const putFilme = () => {
    api.put(`/filmes/${id}`, dados)
}

//DELETE / filme/:od

export const deleteFilme = () => {
    api.delete(`/filmes/${id}`)
}