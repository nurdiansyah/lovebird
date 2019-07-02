import { createGlobalStyle } from 'styled-components/macro';
import { defaultTheme } from '@deboxsoft/component-webapp-react/theme/default';

export const ResetStyled = createGlobalStyle`
   *,
  *::before,
  *::after {
    box-sizing: border-box;
  }   

  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color:#212529;
    text-align: left;
    background-color: #fff;
  }
`;

export const theme = defaultTheme;
