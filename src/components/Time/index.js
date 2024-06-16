import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador';
import './Time.css';

const Time = ({ time, colaboradores, aoDeletar, aoMudarCorTime, aoFavoritar }) => {
    const background = { backgroundImage: 'url(/img/fundo.png)', backgroundColor: time.cor ? hexToRgba(time.cor, 0.6) : '' };

    return (
        (colaboradores.length > 0) ? <section className='time' style={background}>
            <input value={time.cor ? time.cor : '#ffffff' } onChange={evento => aoMudarCorTime(evento.target.value, time.id)} type='color' className='input-cor' />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador =>
                    <Colaborador
                        key={colaborador.id}
                        corDeFundo={time.cor}
                        colaborador={colaborador}
                        aoDeletar={aoDeletar}
                        aoFavoritar={aoFavoritar}
                    />)}
            </div>
        </section>
        : ''
    )
}

export default Time;