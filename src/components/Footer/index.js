import styled from "styled-components";
import whatsapp from "../../imgs/icone_whatsapp.png";
import email from "../../imgs/icone_email.png";

const Contato = styled.div`
    justify-content: center;
`

const ContatoHeader = styled.div``

const BotaoWPP = styled.img`
    width: 15px;
    border-radius: 50%;
    margin-bottom: 1em;
`

const BotaoEmail = styled.img`
    width: 15px;
    border-radius: 50%;
    margin-bottom: 1em;
`

const Direitos = styled.div``

const Links = styled.div``

const SobreNos = styled.div``

const exploreOpcoes = ['Home', 'Sobre', 'Contato','Blog', 'FAQ']

function Footer() {
    return(
        <div>
            <Contato>
                <ContatoHeader>
                    <h6>Fale Conosco</h6>
                </ContatoHeader>
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
                    {exploreOpcoes.map ((texto) =>(
                        <li className='opcao'><p>{texto}</p></li>
                    ))}
                </ul>
            </Links>
            <SobreNos>
                O grupo galo busca estufar o peito e botar moral, já a vinheria galo é pra tomar um vinho da hora depois.
            </SobreNos>
            <Direitos>
                <a>Vinheria Galo é uma marca oficial da Galo Enterprise.</a>
                <a><p>Todos os direitos reservados. 2022-2025</p></a>
            </Direitos>
        </div>
    )
}

export default Footer