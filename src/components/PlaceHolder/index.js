import Logo from '../../imgs/Logo vinicola galo.png';
import styled from "styled-components";

const Main = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding-top: 15%;
`
const LogoImg = styled.figure`
img{
    width: 350px;
}
`
const MainTxt = styled.div`
`

function PlaceHolder(){
    return(
        <Main>
            <LogoImg>
                <img 
                src={Logo} 
                alt="Logo Vinícola"></img>
            </LogoImg>
            <MainTxt>
                <h1>Vinícola Galo</h1>
                <p>Este site ainda esta em construção volte mais tarde</p>
            </MainTxt>
        </Main>
    );
}

export default PlaceHolder