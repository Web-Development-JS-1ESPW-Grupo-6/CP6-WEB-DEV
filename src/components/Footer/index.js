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

const Links = styled.div`
    display: flex;
    flex-direction: column;
`

const ContainerOp = styled.div`
    display: flex;
`

const Opcoes = styled.ul`
    list-style: none;
    padding-right: 1em;
    padding-top: 0.5em;
    li{
        cursor: pointer;
        color: #030303;
    }
    li:hover{
        color: #e69d16;
    }
`

const SobreNos = styled.div`
    text-align: center;
    width: 25em;
`
const Direitos = styled.div`
    text-align: center;
    p {
        align-text: center
    }
`

function Footer() {
    return (
        <Base>
            <Contato>
                <h3>Fale Conosco</h3>
                <BotaoWPP href="/"
                    src={whatsapp}
                    alt='contato wpp'>
                </BotaoWPP>
                <BotaoEmail href="/"
                    src={email}
                    alt='contato email'>
                </BotaoEmail>
            </Contato>
            <Links>
                <h3>Explore</h3>
                <ContainerOp>
                    <Opcoes>
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Contato</li>
                    </Opcoes>
                    <Opcoes>
                        <li>Blog</li>
                        <li>FAQ</li>
                    </Opcoes>
                </ContainerOp>
            </Links>
            <SobreNos>
                O grupo galo busca estufar trazer conforto e acessibilidade a sociedade. A Vinheria Galo faz isso através do consumo de um bom vinho.
            </SobreNos>
            <Direitos>
                <p>Vinheria Galo é uma marca oficial da Galo Enterprise.</p>
                <p>Todos os direitos reservados.</p>
                <p> 2022-2025</p>
            </Direitos>
        </Base>
    )
}

export default Footer