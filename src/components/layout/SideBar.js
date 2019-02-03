import React from 'react';
import styled from 'styled-components';
import Icon from 'react-fontawesome';

const Container = styled.nav`
  z-index: 3;
  position: relative;
  background-color: ${({ theme }) => theme.secondary};
  width: 20em;
  min-height: 100vh;
`;

const ToggleIcon = styled(Icon)`
  position: absolute;
  right: 0.4em;
  top: 0.2em;
  cursor: pointer;
`;

export default () => {
  return (
    <Container>
        <ToggleIcon name="bars" color="white" size="2x"/>
    </Container>
  )
}
