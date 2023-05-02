import { ReactElement } from 'react'
import './Botao.css'

interface BotaoProps {
    children: ReactElement | string
}

export const Botao = ({children} :BotaoProps) => {
    return(
        <div className="container-botao">
        <button className="botao">
            {children}
        </button>
        </div>
    )
}