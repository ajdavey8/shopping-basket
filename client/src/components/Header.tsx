import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
margin: 16px 40px;
`

interface Header {
  heading: string
}

const Header = ({ heading }: Header) => (
  <Container>
    <h1>{heading}</h1>
  </Container>
)

export default Header;