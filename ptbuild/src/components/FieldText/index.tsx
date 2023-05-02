import './CampoTexto.css'

interface FieldTextProps {
    aoAlterado: (valor: string) => void
    label: string
    valor: string
    obrigatorio?: boolean
    placeholder: string
}

export const CampoTexto = ({aoAlterado, label, valor, placeholder, obrigatorio = false} :FieldTextProps) => {

    const placeholderMoficada = `${placeholder}...`

    const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }
    
    return (

        <div className="campo-texto">
            <label>{label}</label>
            <input value={valor} onChange={aoDigitar} required={obrigatorio} placeholder={placeholderMoficada}/>
        </div>

    )
}