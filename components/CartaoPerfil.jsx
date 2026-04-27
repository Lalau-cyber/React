function CardPerfil({nome, idade, profissao, foto}){
   return(
    <div>
        <img 
        src={foto} 
        alt={nome} 
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} 
      />
        <p>{nome} , {idade}</p>
        <p>profissão: {profissao} </p>
    </div>
   )

}
export default CardPerfil