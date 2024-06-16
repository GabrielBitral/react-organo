import './Campo.css';

const Campo = ({ valor, label, tipo = 'text', placeholder, obrigatorio, aoAlterado }) => {
    const placeholderModificado = `${placeholder}...`;

    const aoDigitar = (evento) => {
        aoAlterado(evento.target.value);
    }

    return (
        <div className={`campo campo-` + tipo}>
            <label>{label}</label>
            <input
                value={valor}
                type={tipo}
                onChange={aoDigitar}
                required={obrigatorio}
                placeholder={placeholderModificado}
            />
        </div>
    )
}

export default Campo