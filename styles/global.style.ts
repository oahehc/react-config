import css from 'styled-jsx/css';
import * as vars from './vars';

export default css.global`
  * {
    font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', 'sans-serif', 'Microsoft Jhenghei', 'Pingfang TC';
    color: ${vars.grey1};
  }

  html,
  body {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    -ms-overflow-style: scrollbar;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${vars.grey6};
  }
`;
