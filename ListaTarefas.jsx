 import {useState} from 'react'

    export default function ListaTarefas(){
    
    const [tarefas, setTarefas] = useState(['Aprender React', 'Praticar exercícios']);
    const [novaTarefa, setNovaTarefa] = useState('');

    // 2. Função para adicionar uma nova tarefa
    function adicionarTarefa() {
        if (novaTarefa.trim() === '') return; // Evita adicionar tarefas vazias

        // Atualiza a lista pegando as tarefas antigas (...) e adicionando a nova
        setTarefas([...tarefas, novaTarefa]);
        setNovaTarefa(''); // Limpa o campo de entrada
    }

    // 3. Função para remover uma tarefa da lista
    function removerTarefa(indexParaRemover) {
        // Filtra a lista, mantendo apenas as tarefas que não têm o índice clicado
        const tarefasFiltradas = tarefas.filter((_, index) => index !== indexParaRemover);
        setTarefas(tarefasFiltradas);
    }

    return (
        <div className="container">
        <h2>Minha Lista de Tarefas</h2>

        {/* Input controlado: o valor vem do estado e atualiza o estado ao digitar */}
        <input
            type="text"
            placeholder="Digite uma nova tarefa..."
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
         
        />
        <button className="Addtarefa" onClick={adicionarTarefa}>
            Adicionar
        </button>

        {/* Renderizando a lista dinamicamente com .map() */}
        <ul >
            {tarefas.map((tarefa, index) => (
            <li  className="removeTarefa" key={index} >
                {tarefa}{' '}
                <button 
                onClick={() => removerTarefa(index)} 
                >
                ❌
                </button>
            </li>
            ))}
        </ul>
        </div>
    );
}