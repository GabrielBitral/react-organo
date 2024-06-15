import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    const aoSelecionar = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select value={props.valor} required={props.obrigatorio} onChange={aoSelecionar}>
                <option value=""></option>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;