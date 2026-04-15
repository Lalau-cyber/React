function CardPerfil({props}){
   return(
    <div>
        <p>{props.nome} - {props.idade}</p>
        <p>{props.profissao} - {props.foto}</p>
    </div>
   )

}
export default CardPerfil