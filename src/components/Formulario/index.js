import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {
    const [nome, setNome] = useState('');
    const [mainPersonagem, setMainPersonagem] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoNovoColaboradorCadastrado({
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

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <CampoTexto valor={nome} obrigatorio={true} label="Nome" placeholder="Digite seu nome" aoAlterado={valor => setNome(valor)} />
                <CampoTexto valor={mainPersonagem} obrigatorio={true} label="Main" placeholder="Digite o nome do seu main" aoAlterado={valor => setMainPersonagem(valor)} />
                <CampoTexto valor={imagem} label="Imagem" placeholder="Informe o endereço da imagem" aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa valor={time} obrigatorio={true} label="Time" items={props.times} aoAlterado={valor => setTime(valor)} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;