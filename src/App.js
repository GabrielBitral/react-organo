import { useState, useReducer } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';
import reducer, { ADICIONAR_COLABORADOR, EXCLUIR_COLABORADOR, FAVORITAR_COLABORADOR } from './reducer';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Top Laners',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'Caçadores',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Mid Laners',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'Atiradores',
      cor: '#FF8A29'
    },
    {
      id: uuidv4(),
      nome: 'Suportes',
      cor: '#FFBA05'
    }
  ]);

  const [colaboradores, dispatch] = useReducer(reducer, [
    {
      id: uuidv4(),
      nome: 'Gabriel',
      mainPersonagem: 'Katarina',
      imagem: 'https://github.com/GabrielBitral.png',
      time: 'Mid Laners'
    },
    {
      id: uuidv4(),
      nome: 'Gabriel',
      mainPersonagem: 'Kindred',
      imagem: 'https://github.com/GabrielBitral.png',
      time: 'Caçadores'
    },
    {
      id: uuidv4(),
      nome: 'Gabriel',
      mainPersonagem: 'Fiora',
      imagem: 'https://github.com/GabrielBitral.png',
      time: 'Top Laners'
    },
    {
      id: uuidv4(),
      nome: 'Gabriel',
      mainPersonagem: 'Vayne',
      imagem: 'https://github.com/GabrielBitral.png',
      time: 'Atiradores'
    }
  ]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    colaborador.id = uuidv4();
    colaborador.favorito = false;
    dispatch({
      tipo: ADICIONAR_COLABORADOR,
      colaborador
    });
  };

  const aoDeletarColaborador = (id) => {
    dispatch({
      tipo: EXCLUIR_COLABORADOR,
      id
    });
  };

  const mudarCorDoTime = (cor, id) => {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }

      return time;
    }));
  };

  const aoNovoTimeAdicionado = (novoTime) => {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  };

  const resolverFavorito = (id) => {
    dispatch({
      tipo: FAVORITAR_COLABORADOR,
      id
    });
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoCadastrarTime={aoNovoTimeAdicionado}
        aoNovoColaboradorCadastrado={aoNovoColaboradorAdicionado}
      />
      <div id='times'>
        {times.map(time =>
          <Time
            key={time.id}
            time={time}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={aoDeletarColaborador}
            aoMudarCorTime={mudarCorDoTime}
            aoFavoritar={resolverFavorito}
          />
        )}
      </div>
      <Rodape />
    </div>
  );
}

export default App;
