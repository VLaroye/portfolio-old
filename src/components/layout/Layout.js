import React, { Fragment } from 'react';
import styled from 'styled-components';
import media from 'common/media';

// COMPONENTS
import SideBar from './SideBar';

const AppContainer = styled.div`
  ${media.desktop`
    display: flex;
  `}
`;

const ContentContainer = styled.div`

`;

export default (props) => {
  return (
    <Fragment>
      <AppContainer>
        <SideBar />
        <ContentContainer>
          {props.children}
        </ContentContainer>
      </AppContainer>
    </Fragment>
  )
}