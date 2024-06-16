import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';
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

  const [colaboradores, setColaboradores] = useState([
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
    setColaboradores([...colaboradores, colaborador]);
  };

  const aoDeletarColaborador = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
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
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito;
      }
      return colaborador;
    })
    )
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
