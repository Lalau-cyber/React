import {useState} from 'react'

export default function Home(){
// 1. As consts que guardam os nomes das tecnologias
  const frontTech = ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Sass", "Styled Components", "Bootstrap"];
  const backTech= ["Node.js", "Express.js", "MongoDB"];

  const [mostraFront, setMostraFront] = useState(false);
  const [mostraBack, setMostraBack] = useState(false);


 return(
        <div className="nome">
            <div >
                <h1>Prazer, Meu nome é Laura Souza</h1>
            </div>
            <div className="mim">
               <section className="sobreMim">
                <strong>Mais Sobre Mim</strong>
            <br />
            <p><strong>Desenvolvedora Front-End em transição para Full Stack.</strong> 
                Especialista na criação de interfaces visuais e na experiência do usuário,
                atualmente expandindo minhas habilidades para o ecossistema Back-End
                com o objetivo de construir aplicações ponta a ponta.</p>
            <br />
            <p> Desejo consolidar meu entendimento em Front-End 
                e elevar o meu conhecimento a Full Stack.Posso dizer que umas 
                das coisas que sei e quero fazer é ajudar as equipes de Desenvolvedores
                a ter ideias criativas e limpas para o UX.
            </p>
            <br />
            <p><strong>Uma mini biografia sobre mim</strong></p>
            <br />
            <p>No ano de 2025, o Senai havia disponibilizado cursos gratis
            para as escolas estaduais e a minha era uma delas, então eu resolvi me inscrever e assim começou
            a minha jornada.Primeiramente eu tinha escolhido esse curso pois ele é o que proporcina 
            um salario maior porem eu nem gostava tanto assim de trabalhar em computadores 
            mas quando o tempo foi passando eu fui criando um gosto para coisa. Não quer dizer que eu amo mas eu me empenho e me esforço para aprender 
            e dominar na pratica.
            </p>
            </section>
            </div>
            
       <section className="p-8 bg-gray-900 text-white rounded-lg max-w-2xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-400">🛠️ Minha Tech Stack</h2>
      
      <div className="mb-6">
        <button 
          onClick={() => setMostrarFront(!mostrarFront)} 
          className="text-xl font-semibold mb-3 text-emerald-400 flex items-center gap-2 cursor-pointer bg-transparent border-none w-full text-left justify-between hover:opacity-80"
        >
          <span>🌐 Front-End (Clique para ver)</span>
          <span>{mostraFront ? "🔼" : "🔽"}</span>
        </button>
        
        {mostraFront && (
          <div className="flex flex-wrap gap-2 mt-2 transition-all">
            {frontTech.map((tech) => (
              <span key={tech} className="bg-gray-800 text-sm font-medium px-4 py-2 rounded-md border border-gray-700">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div>
        <button 
          onClick={() => setMostrarBack(!mostrarBack)} 
          className="text-xl font-semibold mb-3 text-amber-400 flex items-center gap-2 cursor-pointer bg-transparent border-none w-full text-left justify-between hover:opacity-80"
        >
          <span>⚙️ Back-End (Clique para ver)</span>
          <span>{mostraBack ? "🔼" : "🔽"}</span>
        </button>
        
        {mostraBack && (
          <div className="flex flex-wrap gap-2 mt-2 transition-all">
            {backTech.map((tech) => (
              <span key={tech} className="bg-gray-800 text-sm font-medium px-4 py-2 rounded-md border border-gray-700 opacity-80">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
        </div>
     )
 }       
