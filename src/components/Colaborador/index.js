import './Colaborador.css';

const Colaborador = ({ nome, mainPersonagem, imagem, corDeFundo}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt='Foto do integrante do time' />
            </div>
            <div className='rodape-card'>
                <h4>{nome}</h4>
                <h5>Main: {mainPersonagem}</h5>
            </div>
        </div>
    )
}

export default Colaborador;