import './Rodape.css'
import { BannerProps } from '../Banner'


export const Rodape = (props:BannerProps) => {
    return(
        <footer className='container-rodape'>
            <div className='rodape'>
                <img src={props.enderecoImagem} alt={props.textoAlternativo}/>
            </div>
            <div className='letreiro'>
                <p>Seja bem vindo ao PT Builder. Qualquer dúvida ou contato pelo email: igordscunha@outlook.com</p>
            </div>
        </footer>
    )
}