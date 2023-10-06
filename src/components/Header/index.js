import styled from "styled-components";
import Logo from '../../imgs/Logo vinicola galo.png'

const Head = styled.header`
    position: fixed;
    top: 0%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5.5em;
    padding: 1em;
    background-color: #ddd;
    box-shadow: 0em 0.3125em 0.625em 0em #aaa;
    z-index: 2;
`

const LogoHeader = styled.div`
img{
    cursor: pointer;
    width: 60px;
}

`
const Nav = styled.div`
    
`
const NavHeader = styled.ul`
ul{
    display: flex;
    padding: 1em;
    list-style: none;
}
li{
    padding: 1em;
    cursor: pointer;
    text-decoration: none;
    color: #030303;
}
li:hover{
    text-decoration: none;
    color: #e69d16;
}
`

const navOpcoes = ['Home', 'Sobre', 'Contato','Blog', 'FAQ']

function Header() {
    return (
        <div>
            <Head>
                <LogoHeader>
                    <img
                        src={Logo}
                        alt='logo vinicola'
                    ></img>
                </LogoHeader>
                <Nav>
                    <NavHeader>
                        <ul className='opcoes'>
                        {navOpcoes.map ((texto) =>(
                            <li className='opcao'><p>{texto}</p></li>
                        ))}
                        </ul>   
                    </NavHeader>
                </Nav>
            </Head>
        </div>
    );
}

export default Header