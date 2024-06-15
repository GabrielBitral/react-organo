import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='rodape'>
            <section className='imagens'>
                <ul>
                    <li>
                        <a href="https://github.com/GabrielBitral" target='_blank' rel="noreferrer">
                            <img src='./img/gi.png' alt='Logo do facebook' />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/gabriel-fabiano-ch/" target='_blank' rel="noreferrer">
                            <img src='./img/li.png' alt='Logo do Twitter' />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='./img/logo.png' alt='Logo do organo' />
            </section>
            <section>
                <p>Desenvolvido por Gabriel.</p>
            </section>
        </footer>
    )
};

export default Rodape;