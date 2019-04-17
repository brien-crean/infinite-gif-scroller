import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #222;
  height: 75px;
  padding: 20px;
  color: white;
`;

const HeaderTitle = styled.h1`
  font-size: 1.5em;
`;

const Header = () => (
  <HeaderContainer>
    <HeaderTitle>Infinite Scroller using the Interaction Observer API</HeaderTitle>
  </HeaderContainer>
)

export default Header;