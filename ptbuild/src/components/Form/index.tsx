import { CampoTexto } from '../FieldText'
import { ListaSuspensa } from '../DropDown'
import './Formulario.css'
import { Botao } from '../Button'
import { useState } from 'react'
import { IPlayer } from '../../shared/interface/IPlayer'

interface FormProps {
    ptCriada: (player: IPlayer) => void
    horarios: string[]
    vocs: string[]
}

export const Formulario = (props :FormProps) => {

    const [nome, setNome] = useState('')
    const [nick, setNick] = useState('')
    const [imagem, setImagem] = useState('')
    const [voc, setVoc] = useState('')
    const [horario, setHorario] = useState('')

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        props.ptCriada({
            nome,
            nick,
            imagem,
            voc,
            horario
        })
        setNome('')
        setNick('')
        setImagem('')
        setVoc('')
        setHorario('')
    }

    return (
        <section className="formulario">

            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para montar a sua PT</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}
                    label="Nick"
                    placeholder="Digite o nick do char"
                    valor={nick}
                    aoAlterado={valor => setNick(valor)}
                />
                <CampoTexto 
                    label="Foto"
                    placeholder="Digite a url da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true}
                    label="Vocação"
                    itens={props.vocs}
                    valor={voc}
                    aoAlterado={valor => setVoc(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Disponibilidade de Horário"
                    itens={props.horarios}
                    valor={horario}
                    aoAlterado={valor => setHorario(valor)}
                />
                <Botao>
                    Montar PT
                </Botao>
            </form>
            
        </section>

    )
}