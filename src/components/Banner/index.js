import './Banner.css';

function Banner() {
    return (
        <header className='banner' style={{backgroundImage: 'url(/img/fundo.png)'}}>
            <img src='/img/logo.png' alt='Logo do Organo' />
            <h1>Aqui é onde você encontra um time para se divertir!</h1>
            {/* <img src="/img/banner.png" alt="Banner principal da página do Organo" /> */}
            <a href='#times' className='link'>Times</a>
        </header>
    )
}

export default Banner