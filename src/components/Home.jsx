import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
// 1. As consts que guardam os nomes das tecnologias
  const frontTech = ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Styled Components"];
  const backTech= ["Node.js", "Express.js"];

  const [mostraFront, setMostraFront] = useState(false);
  const [mostraBack, setMostraBack] = useState(false);


 return(
        <div className="contei_bio">
            <div >
                <h1>Laura Souza</h1>
            </div>
            <div className="mim">
               <section className="sobreMim">
               <h2> <strong>Mais Sobre Mim</strong></h2>
            <br />
            <div className="apresentacao">
                <p className='objetivos'><strong>Objetivos Profissionais</strong></p>
                <br />
                 <p className='primeiro_Texto'>Desenvolvedora Front-End em transição para Full Stack.
                Especialista na criação de interfaces visuais e na experiência do usuário,
                atualmente expandindo minhas habilidades para o ecossistema Back-End
                com o objetivo de construir aplicações ponta a ponta.</p>
            <br />
            <p className='segundo_Texto'>
             Desejo consolidar meu entendimento em Front-End 
                e elevar o meu conhecimento a Full Stack.Posso dizer que umas 
                das coisas que sei e quero fazer é ajudar as equipes de Desenvolvedores
                a ter ideias criativas e limpas para o UX.
            </p>
            </div>
            <br />
           <div className="biografia"> <p><strong>MInha Biografia</strong></p>
            <br />
            <p className='terceiro_Texto'>No ano de 2025, o Senai havia disponibilizado cursos gratis
            para as escolas estaduais e a minha era uma delas, então eu resolvi me inscrever e assim começou
            a minha jornada.Primeiramente eu tinha escolhido esse curso pois ele é o que proporcina 
            um salario maior porem eu nem gostava tanto assim de trabalhar em computadores 
            mas quando o tempo foi passando eu fui criando um gosto para coisa. Não quer dizer que eu amo mas eu me empenho e me esforço para aprender 
            e dominar na pratica.
            </p></div>
            </section>
            </div>
            
       <section >
      <h2 >🛠️ Minha Tech Stack</h2>
      
      <div className="caixinha_brow">
        <button className="button_front"
          onClick={() => setMostraFront(!mostraFront)} 
         
        >
          <span  className="texto_front">🌐 Front-End (Clique para ver)</span>
          <span>{mostraFront ? "🔼" : "🔽"}</span>
        </button>
        
        {mostraFront && (
          <div className="tech-list">
            {frontTech.map((tech) => (
              <span key={tech} >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="caixinha_brow">
        <button className="button_back"
          onClick={() => setMostraBack(!mostraBack)} 
        
        >
          <span className="texto_back">⚙️ Back-End (Clique para ver)</span>
          <span>{mostraBack ? "🔼" : "🔽"}</span>
        </button>
        
        {mostraBack && (
          <div className="tech-list">
            {backTech.map((tech) => (
              <span key={tech} className="texto_back_item">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
        <Link to="/projetos" style={{ border: '1px solid #6e4620', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', color: '#fff' }}>
        Ver meus projetos
      </Link>
    </div>
     )
 }       
