import styled from "styled-components";
import whatsapp from "../../imgs/icone_whatsapp.png";
import email from "../../imgs/icone_email.png";

const Base = styled.div`
    position: fixed;
    bottom: 0%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 8.5em;
    padding: 1em;
    background-color: #ddd;
    box-shadow: 0em 0.3125em 0.625em 0em #aaa;
    z-index: 2;
`
const ContainerFooter = styled.div`
    display: flex;
    flex-direction: column;
`
const Contato = styled.div`
    .he { 
    text-align: start;
    padding: 1em;
    }
    
`
const BotaoWPP = styled.img`
    width: 35px;
    border-radius: 50%;
    margin-top: 0.5em;
    margin-right: 0.5em;
`

const BotaoEmail = styled.img`
    width: 35px;
    border-radius: 50%;
    margin-top: 0.5em;
    margin-right: 0.5em;
`

const Direitos = styled.div`
    font-size: 10px;
    p {
        align-text: center
    }
`

const Links = styled.div``

const SobreNos = styled.div`
    text-align: center;
    margin: 10em;
`

const exploreOpcoes = ['Home', 'Sobre', 'Contato', 'Blog', 'FAQ']

function Footer() {
    return (
        <Base>
            <Contato>
                <h3>Fale Conosco</h3>
                <BotaoWPP href=""
                    src={whatsapp}
                    alt='contato wpp'>
                </BotaoWPP>
                <BotaoEmail href=""
                    src={email}
                    alt='contato email'>
                </BotaoEmail>
            </Contato>
            <Links>
                <a>Explore</a>
                <ul className='opcoes'>
                    {exploreOpcoes.map((texto) => (
                        <li className='opcao'><p>{texto}</p></li>
                    ))}
                </ul>
            </Links>
            <SobreNos>
                O grupo galo busca estufar trazer conforto e acessibilidade a sociedade. A Vinheria Galo faz isso através do consumo de um bom vinho.
            </SobreNos>
            <Direitos>
                <a>Vinheria Galo é uma marca oficial da Galo Enterprise.</a>
                <a><p>Todos os direitos reservados.</p></a>
                <a><p> 2022-2025</p></a>
            </Direitos>
        </Base>
    )
}

export default Footer