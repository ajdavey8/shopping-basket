import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, button, input, textarea {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 62.5%;
    font: inherit;
    vertical-align: baseline;
  }
  html {
    font-size: 62.5%;
  }
    body {
      font: 400 1.6rem Arial, Helvetica, sans-serif;
      background: #f8f9fa;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.4rem;
  }
`