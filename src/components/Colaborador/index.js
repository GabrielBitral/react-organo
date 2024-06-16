import { IoMdCloseCircle, IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import './Colaborador.css';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    const favoritar = () => {
        aoFavoritar(colaborador.id);
    };

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    };

    return (
        <div className='colaborador'>
            <IoMdCloseCircle
                size={25}
                className='deletar'
                onClick={() => aoDeletar(colaborador.id)}
            />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.imagem} alt='Foto do integrante do time' />
            </div>
            <div className='rodape-card'>
                <h4>{colaborador.nome}</h4>
                <h5>Main: {colaborador.mainPersonagem}</h5>
                <div className='favoritar'>
                    {colaborador.favorito 
                    ? <IoMdHeart {...propsFavorito} color="#ff0000" /> 
                    : <IoMdHeartEmpty {...propsFavorito} /> 
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador;