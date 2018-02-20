import React, { Component } from 'react';
import styled from 'styled-components';

export const Footer = (props) => {

  const FooterWrapper = styled.div`
    background: blue;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  `
  const P = styled.p`
    margin-top: 10em;
    padding-bottom: 1 em;
    font-size: 16px;
    color: yellow;
  `
    return(
      <FooterWrapper>
        <P> Developed by Dmytro </P>
      </FooterWrapper>
    )
}
