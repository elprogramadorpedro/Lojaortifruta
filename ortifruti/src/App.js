import React from 'react';
import styled from 'styled-components'

const MarketGrid= styled.div`
display:grid;
grid-template-columns:2fr 4fr 2fr;
gap:20px;
`
const SectionWrapper= styled.div`
width:100%;
border:1px solid black;
padding: 5px;
`


function App() {
  return (
    <MarketGrid>
          <SectionWrapper>Hello filtro</SectionWrapper>
          <SectionWrapper>Hello Produto</SectionWrapper>
          <SectionWrapper>Hello Carrinho</SectionWrapper>
    </MarketGrid>
  );
}

export default App;
