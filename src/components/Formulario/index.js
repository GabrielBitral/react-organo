import { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = ({ times, aoNovoColaboradorCadastrado, aoCadastrarTime }) => {
    const [nome, setNome] = useState('');
    const [mainPersonagem, setMainPersonagem] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('#000000');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        aoNovoColaboradorCadastrado({
            nome,
            mainPersonagem,
            imagem,
            time
        })
        setNome('');
        setMainPersonagem('');
        setImagem('');
        setTime('');
    }

    const aoSalvarTime = (evento) => {
        evento.preventDefault();
        aoCadastrarTime({
            nome: nomeTime,
            cor: corTime
        })
        setNomeTime('');
        setCorTime('');
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <Campo valor={nome} obrigatorio label="Nome" placeholder="Digite seu nome" aoAlterado={valor => setNome(valor)} />
                <Campo valor={mainPersonagem} obrigatorio label="Main" placeholder="Digite o nome do seu main" aoAlterado={valor => setMainPersonagem(valor)} />
                <Campo valor={imagem} label="Imagem" placeholder="Informe o endereço da imagem" aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa valor={time} obrigatorio label="Time" items={times} aoAlterado={valor => setTime(valor)} />
                <Botao>Criar Card</Botao>
            </form>
            <form onSubmit={aoSalvarTime}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo valor={nomeTime} obrigatorio label="Nome do Time" placeholder="Digite o nome do time" aoAlterado={valor => setNomeTime(valor)} />
                <Campo valor={corTime} obrigatorio tipo="color" label="Cor" aoAlterado={valor => setCorTime(valor)} />
                <Botao>Criar Time</Botao>
            </form>
        </section>
    )
}

export default Formulario;