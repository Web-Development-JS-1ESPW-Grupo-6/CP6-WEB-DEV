import React from 'react';
import styled from 'styled-components';
import Logo from '../../imgs/Logo vinicola galo.png'; // Importe o ícone circular

const SidebarContainer = styled.aside`
  position: fixed;
  top: 5.5em;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #ddd;
  color: #030303;
  padding: 1em;
  box-shadow: 0em 0.3125em 0.625em 0em #aaa;
  z-index: 1;
`;

const SidebarHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarLogo = styled.img`
  width: 80px;
  border-radius: 50%;
  margin-bottom: 1em;
`;

const SidebarName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5em;
`;
const SidebarH3 = styled.h2`
  font-size: 1.1rem;
`;

const SidebarDescription = styled.p`
  font-size: 0.8rem;
  text-align: center;
  padding: 1em 0.5em;
`;
const SidebarHability = styled.p`
  text-align: center;
  padding: 1em 0.5em;
  font-size: 0.8rem;
`;

const SidebarLinks = styled.ul`
  font-size: 0.8rem;
  padding: 1em;
  list-style: none;
`;
const SidebarLink = styled.li`
  font-size: 1rem;
  padding: 1em;
  a{
    text-decoration: none;
    color: #030303;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarLogo src={Logo} alt="Logo Vinícola" />
        <SidebarName>Vinícola Galo</SidebarName>
        <SidebarDescription>A Vinheria Galo é um charmoso estabelecimento que oferece uma cuidadosa seleção de vinhos de alta qualidade. Localizada em um ambiente aconchegante, esta vinheria é o local ideal para os amantes do vinho explorarem e degustarem uma variedade de rótulos excepcionais, acompanhados de um atendimento especializado. O Galo é o destino perfeito para quem busca uma experiência enológica única e memorável.</SidebarDescription>

        <SidebarH3>Competencias</SidebarH3>
        <SidebarHability>Sommelier: Habilidades necessárias para ser um sommelier, como degustação, emparelhamento de vinhos e orientação aos clientes.</SidebarHability>
        <SidebarHability>Gestão de Vinheria: Habilidades essenciais para gerenciar uma vinheria, incluindo estoque, atendimento ao cliente e gestão de equipe.</SidebarHability>
        <SidebarH3>Redes Sociais</SidebarH3>
        <SidebarLinks>
          <SidebarLink>
            <a href='https://github.com/Galo-Weather'>Github</a>
          </SidebarLink>
          <SidebarLink>
            <a href='https://www.linkedin.com/in/guilherme-morais-53270b230/'>LinkedIn</a>
          </SidebarLink>
        </SidebarLinks>
      </SidebarHeader>
    </SidebarContainer>
  );
};

export default Sidebar;