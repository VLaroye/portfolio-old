import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

// THEME
import theme from 'common/theme';

// COMPONENTS
import Layout from 'components/layout/Layout';

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Layout>
          <div>Coucou</div>
        </Layout>
      </Fragment>
    </ThemeProvider>
  );
}

