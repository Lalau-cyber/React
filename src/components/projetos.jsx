import { Link } from 'react-router-dom';
import contador from '../assets/contador.png';
import filmes from '../assets/filmes.png';
import formulario from '../assets/formulario.png';

export default function Projetos(){

    const projetos = [
        {
            id: 1,
            projeto: 'projeto 1',
            descricao: 'Este é um contador com limites de 0 a 10, onde o usuário pode incrementar ou decrementar o valor do contador. O contador é exibido na tela e é atualizado a cada clique nos botões de incremento e decremento.',
            imagem: contador,
            badgeTecnologias: ['React', 'JavaScript', 'CSS'],
        },
        {
            id: 2,
            projeto: 'projeto 2',
            descricao: 'Este é um aplicativo de lista de filmes, onde o usuário pode adicionar, visualizar e remover filmes da lista. Os filmes são exibidos em uma grade e podem ser pesquisados por título.',
            imagem: filmes,
            badgeTecnologias: ['React', 'JavaScript', 'CSS'],
        },
        
        {id: 3,
            projeto: 'projeto 3',
            descricao: 'Este é um formulário de contato com validação de campos, onde o usuário pode enviar mensagens para a equipe de suporte. O formulário exibe mensagens de erro e sucesso conforme a validação dos campos.',
            imagem: formulario,
            badgeTecnologias: ['React', 'JavaScript', 'CSS'],
        }
    ];

    return(
        <div>
            
            <section style={{ padding: '20px' }}>

      <h2>Meus Projetos</h2>
      
      {/* Container dos Cards */}
      <div class="container-cards" >
        
        {/* 3. Mapeia a lista para renderizar os cards dinamicamente */}
        {projetos.map((projeto) => (
          <div key={projeto.id} className="card-projeto" >
            
            {/* Imagem / Thumbnail */}
            <img 
              src={projeto.imagem} 
              alt={`Thumbnail do ${projeto.projeto}`} 
             className="imagem-projeto" 
            />
            
            {/* Conteúdo do Card */}
            <div  className="conteudo-card" >
              {/* Nome do Projeto */}
              <h3 className="titulo-projeto">{projeto.projeto}</h3>
              
              {/* Descrição Curta */}
              <p className="descricao-projeto">{projeto.descricao}</p>
              
              {/* Badges de Tecnologias */}
              <div className="tech-usada">
                {projeto.badgeTecnologias.map((tag, index) => (
                  <span key={index} className="badge-tecnologia">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
    <Link to="/" >
        Voltar para o Inicio
      </Link>
        </div>
    )
}