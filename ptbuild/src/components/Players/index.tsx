import './Jogadores.css'

interface PlayerProps {
    nome: string
    nick: string
    voc: string
    imagem: string
}

export const Jogadores = ({nome, nick, voc, imagem}:PlayerProps) => {
    return(        
        <div className='jogador'>
            <div className='cabecalho'>
                <img src={imagem} alt={nome}/>
            </div>

            <div className='rodape'>
                <h4 className='nome-jogador'>{nome}</h4>
                <h4>{nick}</h4>
                <h5>{voc}</h5>
            </div>
        </div>
    )
}