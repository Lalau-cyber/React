import { useState } from 'react'


export default function ContLimited() {

    const [contador, setContador] = useState(1);
    const [historico, setHistorico] = useState([]);

    const limite_maximo = 10;
    const limite_minimo = 0;

    const [visivel, setVisivel] = useState(false)

    function incrementar() {
        if (contador < limite_maximo) {
            const novoValor = contador + 1
            setContador(novoValor)
            setHistorico([...historico, `Aumentou para ${novoValor}`]);

        }
    }

    function decrementar() {
        if (contador > limite_minimo) {
            const novoValor = contador - 1
            setContador(novoValor)
            setHistorico([...historico, `Aumentou para ${novoValor}`]);
        }
    }

    function reiniciar() {
        setContador(1)
        setHistorico([])
    }

    function historicos() {

        setVisivel(!visivel);

    }
    return (
        <div className="container" >
            <h1>Contador Atualizado</h1>

            <h2 style={{ fontSize: '48px', margin: '10px 0', color: contador === limite_maximo ? 'red' : 'white' }}>{contador}</h2>
            {contador === limite_maximo && <p style={{ color: 'red' }}> Alerta!🚨 Limite máximo  atingido!</p>}
            {contador === limite_minimo && <p style={{ color: 'gray' }}> Alerta!🚨 Limite mínimo atingido!</p>}

            <div className="BotaoCont">

                <button className="adicionar" onClick={incrementar}
                    disabled={contador === limite_maximo}>Adicionar</button>

                <button className="diminuir"
                    onClick={decrementar}
                    disabled={contador === limite_minimo}> Diminuir</button>

                <button className="reiniciar"
                    onClick={reiniciar}> Reiniciar </button>

                <div className="histImag">
                    <img src="https://thumbs.dreamstime.com/b/vista-de-cima-do-livro-aberto-leitura-aprendizado-lar-aconchegante-elemento-design-com-estrutura-t%C3%B3picos-desenho-rosca-plano-cor-221915542.jpg"
                        alt="historico aqui"
                        onClick={historicos}
                        style={{ cursor: 'pointer', width: '100px', height: '100px' }} />
                </div>




                {visivel && (
                    <div id="historico">
                        <h3>Histórico de Cliques</h3>
                        {historico.length === 0 ? (
                            <p >Nenhuma ação realizada ainda.</p>
                        ) : (
                            <ul >
                                {historico.map((acao, index) => (
                                    <li key={index}>{acao}</li>
                                ))}
                            </ul>

                        )}
                    </div>

                )}


            </div>
        </div>


    )
}