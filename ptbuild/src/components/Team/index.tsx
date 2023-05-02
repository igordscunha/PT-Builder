import { IPlayer } from '../../shared/interface/IPlayer'
import { Jogadores } from '../Players'
import './Time.css'

interface TeamProps {
    horario: string
    players: IPlayer[]
}

export const Time = ({horario, players} :TeamProps) => {
    return(
        (players.length > 0) ? <section className="time">
            <h3>{horario}</h3>

            <div className='jogadores'>

                {players.map(player => 
                <Jogadores 
                    nome={player.nome}
                    nick={player.nick} 
                    voc={player.voc} 
                    imagem={player.imagem} 
                    key={player.nome}                
                />)}

            </div>
        </section>
        :<></>
    )
}