import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    const corSecundaria = { backgroundColor: props.corSecundaria };

    return (
        (props.colaboradores.length > 0) ? <section className='time' style={corSecundaria}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador =>
                    <Colaborador
                        key={colaborador.nome}
                        corDeFundo={props.corPrimaria}
                        nome={colaborador.nome}
                        mainPersonagem={colaborador.mainPersonagem}
                        imagem={colaborador.imagem}
                    />)}
            </div>
        </section>
        : ''
    )
}

export default Time;